import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartItem } from '../types';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface StripeCheckoutProps {
  cartItems: CartItem[];
  onSuccess: () => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ cartItems, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe n\'a pas pu être chargé');
      }

      // Créer une session de paiement
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            price_data: {
              currency: 'eur',
              product_data: {
                name: item.product.name,
                images: [item.product.images[0]],
                metadata: {
                  size: item.size,
                  team: item.product.team
                }
              },
              unit_amount: Math.round(item.product.price * 100), // Prix en centimes
            },
            quantity: item.quantity,
          }))
        }),
      });

      const session = await response.json();

      // Rediriger vers Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Erreur Stripe:', result.error.message);
      }
    } catch (error) {
      console.error('Erreur lors du checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
    >
      {loading ? 'Chargement...' : 'Payer avec Stripe'}
    </button>
  );
};

export default StripeCheckout;