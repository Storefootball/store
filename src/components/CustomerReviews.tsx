import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { CustomerReview } from '../types';

interface CustomerReviewsProps {
  reviews: CustomerReview[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Minimum distance for swipe
  const minSwipeDistance = 50;

  // Auto-scroll plus rapide (toutes les 2 secondes au lieu de 30s)
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 2000); // 2 secondes au lieu de 30

    return () => clearInterval(interval);
  }, [reviews.length, isAutoScrolling]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoScrolling(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextReview();
    } else if (isRightSwipe) {
      prevReview();
    }

    // Reprendre l'auto-scroll après 5 secondes
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Desktop: Scrolling Reviews */}
        <div className="hidden md:block relative">
          <div className="flex animate-scroll-fast space-x-6">
            {/* First set of reviews */}
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-80 bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">"{review.comment}"</p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-blue-600">{review.product}</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(review.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {reviews.map((review) => (
              <div
                key={`duplicate-${review.id}`}
                className="flex-shrink-0 w-80 bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">"{review.comment}"</p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-blue-600">{review.product}</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(review.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Swipeable Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>

            {/* Swipeable Container */}
            <div
              ref={scrollRef}
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">"{review.comment}"</p>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-gray-900">{review.name}</p>
                            <p className="text-sm text-blue-600">{review.product}</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            {new Date(review.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;