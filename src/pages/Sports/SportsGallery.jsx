import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const SportsGallery = ({ images, sportName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleKeyPress = (event) => {
    if (selectedImageIndex !== null) {
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
      if (event.key === 'Escape') closeLightbox();
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex]);

  if (!images.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">Nenhuma foto disponível para esta modalidade.</p>
      </div>
    );
  }

  return (
    <>
      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-2" style={{ gridAutoRows: '200px' }}>
          {images.map((image, index) => {
            // Pattern: 7 images per group
            // Layout: 
            // 1 1 2 3
            // 1 1 4 3
            // 1 1 4 5
            // 6 6 6 7
            // 6 6 6 7
            const groupIndex = Math.floor(index / 7);
            const positionInGroup = index % 7;
            
            let gridClasses = 'relative overflow-hidden bg-nfk-gray cursor-pointer group hover:scale-[1.01] transition-transform duration-300';
            
            if (positionInGroup === 0) {
              // Photo 1: Large (2x3) - 2 columns, 3 rows
              gridClasses += ' col-span-2 row-span-3';
            } else if (positionInGroup === 1) {
              // Photo 2: Small (1x1) - top right
              gridClasses += ' col-span-1 row-span-1';
            } else if (positionInGroup === 2) {
              // Photo 3: Tall (1x2) - right side
              gridClasses += ' col-span-1 row-span-2';
            } else if (positionInGroup === 3) {
              // Photo 4: Tall (1x2) - middle right
              gridClasses += ' col-span-1 row-span-2';
            } else if (positionInGroup === 4) {
              // Photo 5: Small (1x1) - bottom right
              gridClasses += ' col-span-1 row-span-1';
            } else if (positionInGroup === 5) {
              // Photo 6: Wide (3x2) - bottom wide
              gridClasses += ' col-span-3 row-span-2';
            } else if (positionInGroup === 6) {
              // Photo 7: Tall (1x2) - bottom right
              gridClasses += ' col-span-1 row-span-2';
            }
            
            return (
              <div
                key={index}
                className={gridClasses}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${sportName} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-nfk-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <div 
            className="relative w-full h-full flex items-center justify-center p-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-nfk-red hover:bg-opacity-100 active:bg-nfk-red transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-nfk-red hover:bg-opacity-100 active:bg-nfk-red transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-nfk-red hover:bg-opacity-100 active:bg-nfk-red transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={images[selectedImageIndex]}
              alt={`${sportName} ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-nfk-black bg-opacity-75 px-4 py-2 rounded-full">
              <span className="text-white font-bebas text-sm">
                {selectedImageIndex + 1} / {images.length}
              </span>
            </div>

            {/* Mobile swipe hint - only show on first image */}
            {selectedImageIndex === 0 && (
              <div className="md:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-nfk-black bg-opacity-75 px-4 py-2 rounded-full">
                <span className="text-white font-bebas text-xs opacity-75">
                  DESLIZE PARA NAVEGAR
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SportsGallery;
