import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import VideoModal from './components/VideoModal';
import ProductSelector from './components/ProductSelector';
import CookieBanner from './components/CookieBanner';
import CartNotification from './components/CartNotification';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FrenchTeams from './pages/FrenchTeams';
import InternationalClubs from './pages/InternationalClubs';
import NationalTeams from './pages/NationalTeams';
import Kids from './pages/Kids';
import RetroJerseys from './pages/RetroJerseys';
import CollectorJerseys from './pages/CollectorJerseys';
import AllProducts from './pages/AllProducts';
import FeaturedProducts from './pages/FeaturedProducts';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import SizeGuide from './pages/SizeGuide';
import FAQ from './pages/FAQ';
import Returns from './pages/Returns';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import { Product, CartItem, VideoPresentation } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoPresentation | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showProductSelector, setShowProductSelector] = useState(false);
  const [pendingPromoGroup, setPendingPromoGroup] = useState<{items: {product: Product, size: string}[], needsFreeItem: boolean} | null>(null);
  
  // Cart notification state
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [notificationProduct, setNotificationProduct] = useState<string>('');

  // Cart functions with 2+1 offer system
  const addToCart = (product: Product, size: string) => {
    // Show notification
    setNotificationProduct(product.name);
    setShowCartNotification(true);

    if (product.hasPromotion) {
      // For promotion items, add to cart and check if we need to trigger selector
      const newItem: CartItem = {
        product,
        size,
        quantity: 1,
        isPaid: true,
        promoGroupId: Date.now().toString()
      };
      
      setCartItems(prev => {
        const updated = [...prev, newItem];
        
        // Count promotion items that are paid
        const promoItems = updated.filter(item => item.product.hasPromotion && item.isPaid);
        const totalPromoQuantity = promoItems.reduce((sum, item) => sum + item.quantity, 0);
        
        // Check if we need to offer a free item (every 2 paid items = 1 free)
        const freeItemsNeeded = Math.floor(totalPromoQuantity / 2);
        const currentFreeItems = updated.filter(item => item.product.hasPromotion && !item.isPaid).length;
        
        if (freeItemsNeeded > currentFreeItems) {
          // We need to let user choose a free item
          setPendingPromoGroup({
            items: [{product, size}],
            needsFreeItem: true
          });
          setShowProductSelector(true);
        }
        
        return updated;
      });
    } else {
      // For non-promotion items (like PSG), add normally
      setCartItems(prev => {
        const existingItem = prev.find(item => 
          item.product.id === product.id && 
          item.size === size && 
          item.isPaid !== false
        );
        
        if (existingItem) {
          return prev.map(item =>
            item === existingItem
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        
        return [...prev, { product, size, quantity: 1, isPaid: true }];
      });
    }
  };

  const addFreeItem = (freeProduct: Product, freeSize: string) => {
    if (!pendingPromoGroup) return;
    
    const freeItem: CartItem = {
      product: freeProduct,
      size: freeSize,
      quantity: 1,
      isPaid: false,
      promoGroupId: Date.now().toString()
    };
    
    setCartItems(prev => [...prev, freeItem]);
    setPendingPromoGroup(null);
    setShowProductSelector(false);
  };

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    
    setCartItems(prev => {
      const updated = prev.map(item =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      );
      
      // Recalculate free items for promotion products
      if (updated.find(item => item.product.id === productId && item.product.hasPromotion)) {
        const promoItems = updated.filter(item => item.product.hasPromotion && item.isPaid);
        const totalPromoQuantity = promoItems.reduce((sum, item) => sum + item.quantity, 0);
        const freeItemsNeeded = Math.floor(totalPromoQuantity / 2);
        
        // Remove excess free items
        const freeItems = updated.filter(item => item.product.hasPromotion && !item.isPaid);
        if (freeItems.length > freeItemsNeeded) {
          const itemsToRemove = freeItems.slice(freeItemsNeeded);
          return updated.filter(item => !itemsToRemove.includes(item));
        }
        
        // Add free items if needed
        if (freeItemsNeeded > freeItems.length) {
          setPendingPromoGroup({
            items: [{product: updated.find(item => item.product.id === productId)!.product, size}],
            needsFreeItem: true
          });
          setShowProductSelector(true);
        }
      }
      
      return updated;
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setCartItems(prev => {
      const updated = prev.filter(item => 
        !(item.product.id === productId && item.size === size)
      );
      
      // Recalculate free items for promotion products
      const promoItems = updated.filter(item => item.product.hasPromotion && item.isPaid);
      const totalPromoQuantity = promoItems.reduce((sum, item) => sum + item.quantity, 0);
      const freeItemsNeeded = Math.floor(totalPromoQuantity / 2);
      
      // Remove excess free items
      const freeItems = updated.filter(item => item.product.hasPromotion && !item.isPaid);
      if (freeItems.length > freeItemsNeeded) {
        const itemsToRemove = freeItems.slice(freeItemsNeeded);
        return updated.filter(item => !itemsToRemove.includes(item));
      }
      
      return updated;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleVideoPlay = (video: VideoPresentation) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header
        cartItems={cartItems}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        searchQuery=""
        onSearchChange={() => {}}
      />

      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              onVideoPlay={handleVideoPlay}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/equipes-francaises" 
          element={
            <FrenchTeams 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/clubs-internationaux" 
          element={
            <InternationalClubs 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/selections-nationales" 
          element={
            <NationalTeams 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/enfant" 
          element={
            <Kids 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/maillots-retro" 
          element={
            <RetroJerseys 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/maillots-collector" 
          element={
            <CollectorJerseys 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/tous-les-maillots" 
          element={
            <AllProducts 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/maillots-vedettes" 
          element={
            <FeaturedProducts 
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
              searchQuery=""
            />
          } 
        />
        <Route 
          path="/commande" 
          element={
            <Checkout 
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              onClearCart={clearCart}
            />
          } 
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guide-des-tailles" element={<SizeGuide />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/retours-echanges" element={<Returns />} />
        <Route path="/conditions-utilisation" element={<Terms />} />
        <Route path="/politique-confidentialite" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>

      <Footer />

      {/* Modals */}
      <ProductDetail
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      <VideoModal
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => {
          setIsVideoModalOpen(false);
          setSelectedVideo(null);
        }}
      />

      <ProductSelector
        isOpen={showProductSelector}
        onClose={() => {
          setShowProductSelector(false);
          setPendingPromoGroup(null);
        }}
        onSelectProduct={addFreeItem}
        excludeProduct={pendingPromoGroup?.items[0]?.product}
      />

      <CartNotification
        isVisible={showCartNotification}
        productName={notificationProduct}
        onClose={() => setShowCartNotification(false)}
      />

      <CookieBanner />
    </div>
  );
}

export default App;