import React from 'react';
import { productCategories } from '../data/productData';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const ProductSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Vehicle Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of Turtle Top and Forest River transportation solutions 
            designed for comfort, reliability, and exceptional passenger experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/90 flex flex-col justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h4 className="text-xl font-bold mb-4">
                    Key Specifications
                  </h4>
                  <ul className="space-y-2">
                    {category.specs.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheck className="mr-2 text-green-300" />
                        <span className="text-white">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a 
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary hover:text-secondary font-medium flex items-center whitespace-nowrap group"
                >
                  <span className="group-hover:underline">Learn More</span>
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Added call-to-action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Need a customized solution for your specific transportation needs? 
            Our team is ready to help you find the perfect vehicle.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center justify-center"
          >
            Request a Consultation
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;