import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderImage {
  url: string;
  alt: string;
  link: string;
}

interface ImageSliderProps {
  images: SliderImage[];
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= images.length) {
      setIsTransitioning(false);
      goToSlide(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      goToSlide(currentIndex + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, goToSlide]);

  const prev = () => {
    setIsTransitioning(true);
    goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const next = () => {
    setIsTransitioning(true);
    goToSlide(currentIndex + 1);
  };

  const handleImageClick = (link: string) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl">
      <div
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {[...images, images[0]].map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 cursor-pointer"
            onClick={() => handleImageClick(image.link)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}