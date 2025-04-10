import React from 'react';
import { FaShieldAlt, FaAward, FaHistory, FaHandshake } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Our Company
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With decades of experience in the transportation industry, we've established
            ourselves as leaders in quality, reliability, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl img-hover-zoom">
                <img
                  src="/images/about.jpg"
                  alt="Company Facility"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Delivering Excellence Since 1983
            </h3>
            <p className="text-gray-600 mb-6">
              Turtle Top and Forest River have been at the forefront of passenger transportation
              solutions for over four decades. Our commitment to quality craftsmanship and
              customer satisfaction has made us the preferred choice for businesses,
              communities, and organizations nationwide.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FaShieldAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Safety First</h4>
                  <p className="text-gray-600 text-sm">Industry-leading safety standards in every vehicle</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FaAward className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Quality Assured</h4>
                  <p className="text-gray-600 text-sm">Rigorous quality control and testing procedures</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FaHistory className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Proven Reliability</h4>
                  <p className="text-gray-600 text-sm">Long-lasting vehicles with exceptional performance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FaHandshake className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Customer Support</h4>
                  <p className="text-gray-600 text-sm">Dedicated service team for all your needs</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Our Team
              </a>
              <a 
                href="#products" 
                className="text-primary hover:text-secondary font-medium flex items-center justify-center"
              >
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;