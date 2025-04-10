import React from 'react';
import { solutions } from '../data/solutionData';
import { FaCheck, FaArrowRight, FaBuilding, FaRoute, FaUsers } from 'react-icons/fa';

const SolutionsSection = () => {
  // Function to get the right icon based on the icon name
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'building':
        return <FaBuilding className="text-primary text-2xl" />;
      case 'route':
        return <FaRoute className="text-primary text-2xl" />;
      case 'users':
        return <FaUsers className="text-primary text-2xl" />;
      default:
        return <FaBuilding className="text-primary text-2xl" />;
    }
  };

  return (
    <section
      id="solutions"
      className="py-20 relative"
      style={{ 
        background: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/solutions-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transportation Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Customized approaches for every transportation challenge, designed
            to meet the specific needs of your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
            >
              {/* Accent decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                {getIcon(solution.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {solution.description}
              </p>
              <ul className="space-y-3 mb-6 bg-gray-50 p-4 rounded-lg">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <FaCheck className="text-primary text-xs" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <a
                  href={`#case-studies-${solution.id}`}
                  className="text-primary hover:text-secondary font-medium flex items-center justify-center mx-auto group"
                >
                  <span className="group-hover:underline">View Case Studies</span>
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Added solution finder */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Find Your Perfect Solution
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Not sure which solution is right for you? Our transportation experts will help you find the perfect match for your needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Contact Our Team
            </a>
            <a 
              href="#products" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300 text-center"
            >
              Browse All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;