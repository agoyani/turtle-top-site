import React from 'react';
import { FaLeaf, FaShieldAlt, FaCog, FaUniversalAccess } from 'react-icons/fa';

const InnovationSection = () => {
  return (
    <section id="innovation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quality & Innovation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading the industry with superior build quality, thoughtful design, and features
            that enhance passenger experience and driver satisfaction.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/20 rounded"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-primary/20 rounded"></div>
              
              <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/innovation.jpg"
                  alt="Vehicle Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Exceptional Build Quality
                    </h3>
                    <p className="text-gray-200">
                      Experience industry-leading craftsmanship in every vehicle we offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="space-y-10">
              <div className="transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start">
                  <div className="bg-green-100 p-4 rounded-lg mr-5 shadow-md">
                    <FaLeaf className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      Fuel Efficiency
                    </h3>
                    <p className="text-gray-600">
                      Our vehicles are designed to maximize fuel efficiency without compromising
                      on performance, saving you money while reducing environmental impact.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start">
                  <div className="bg-green-100 p-4 rounded-lg mr-5 shadow-md">
                    <FaShieldAlt className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      Safety Features
                    </h3>
                    <p className="text-gray-600">
                      Advanced safety systems including enhanced stability control, collision
                      avoidance technology, and comprehensive airbag systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start">
                  <div className="bg-green-100 p-4 rounded-lg mr-5 shadow-md">
                    <FaCog className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      Durability & Maintenance
                    </h3>
                    <p className="text-gray-600">
                      Built to last with high-quality components and easy-to-service design
                      that reduces downtime and maintenance costs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start">
                  <div className="bg-green-100 p-4 rounded-lg mr-5 shadow-md">
                    <FaUniversalAccess className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      Accessibility Options
                    </h3>
                    <p className="text-gray-600">
                      ADA-compliant configurations available with wheelchair lifts, flexible
                      seating arrangements, and easy-entry designs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Customer Satisfaction</span>
                    <span className="font-bold text-primary">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Service Reliability</span>
                    <span className="font-bold text-primary">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;