import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // For header background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // For active section highlighting
      const sections = ['products', 'solutions', 'innovation', 'about', 'contact'];
      
      let currentSection = '';
      let minDistance = Infinity;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-black/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className={`text-2xl font-bold ${
            isScrolled 
              ? "text-gray-800" 
              : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
          }`}>
            <span className="mr-2 font-medium">Travel with Comfort and Style</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className={`px-6 py-2 ${isScrolled ? "bg-white" : "bg-black/20 backdrop-blur-sm"} rounded-full flex space-x-8`}>
            {[
              { href: '#products', label: 'Products' },
              { href: '#solutions', label: 'Solutions' },
              { href: '#innovation', label: 'Features' },
              { href: '#about', label: 'About Us' },
              { href: '#contact', label: 'Contact' }
            ].map(item => (
              <a 
                key={item.label}
                href={item.href} 
                className={`font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1) 
                    ? (isScrolled ? "text-primary font-semibold" : "text-white font-semibold") 
                    : (isScrolled ? "text-gray-600 hover:text-primary" : "text-gray-200 hover:text-white")
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"} focus:outline-none bg-white/10 backdrop-blur-sm p-2 rounded-full`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg mt-2 transition-all duration-300 animate-fadeDown">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-0">
              {[
                { href: '#products', label: 'Products' },
                { href: '#solutions', label: 'Solutions' },
                { href: '#innovation', label: 'Features' },
                { href: '#about', label: 'About Us' },
                { href: '#contact', label: 'Contact' }
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`py-3 px-4 rounded-lg ${
                    activeSection === item.href.substring(1)
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;