import React, { useState, useEffect } from 'react';

const images = [
  'https://i.postimg.cc/tTDpZS0j/Whats-App-Image-2025-10-22-at-16-50-09.jpg',
  'https://i.postimg.cc/44zC24BF/Gemini-Generated-Image-b4fhysb4fhysb4fh.png',
  'https://i.postimg.cc/G3SDNrtr/f53e7dc0-35c5-43ae-b377-483a9766496c.jpg',
  'https://i.postimg.cc/JnjTxqjv/Screenshot-2025-10-22-at-6-47-57-PM.png',
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  return (
    <div className="relative h-[60vh] bg-gray-800 overflow-hidden">
      {/* Slides container */}
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${index + 1}`}
            loading="eager"
            // FIX: Corrected the `fetchpriority` attribute to `fetchPriority` to align with React's property naming conventions.
            fetchPriority="high"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious} 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-opacity z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-opacity z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};