import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import SolutionsSection from './components/SolutionsSection';
import InnovationSection from './components/InnovationSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// CSS for primary colors
import './App.css';

function App() {
  // Add preloading for hero images to prevent flickering
  useEffect(() => {
    const preloadImages = () => {
      const imageList = [
        '/images/hero1.jpg',
        '/images/hero2.jpg',
        '/images/hero3.jpg',
        '/images/product1.jpg',
        '/images/product2.jpg',
        '/images/product3.jpg',
        '/images/innovation.jpg',
        '/images/contact.jpg',
        '/images/about.jpg',
        '/images/solutions-bg.jpg'
      ];
      
      imageList.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <SolutionsSection />
        <InnovationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;