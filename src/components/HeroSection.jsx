import React, { useState, useEffect } from 'react';
import { heroSlides } from '../data/heroData';
import { FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{slide.subtitle}</p>
                <a 
                  href="#products" 
                  className="inline-flex items-center bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300"
                >
                  <span>Explore Our Fleet</span>
                  <FaChevronRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-16 left-0 right-0 flex justify-center z-30">
        <div className="flex space-x-4 bg-black/30 backdrop-blur-sm py-2 px-4 rounded-full">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide ? "bg-primary border border-white w-10" : "bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-32 right-8 z-30 bg-black/30 backdrop-blur-sm py-2 px-4 rounded-full text-white font-medium">
        {activeSlide + 1} / {heroSlides.length}
      </div>
    </section>
  );
};

export default HeroSection;