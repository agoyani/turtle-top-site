import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find all the information you need to reach out to our team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src="/images/contact.jpg"
                alt="Company Headquarters"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <FaMapMarkerAlt className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Headquarters</h4>
                  <p className="text-gray-600">
                    123 Transportation Way
                    <br />
                    Indianapolis, IN 46268
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <FaPhone className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Phone</h4>
                  <p className="text-gray-600">+1 (800) 555-TPSV</p>
                  <p className="text-gray-600">+1 (317) 555-1234</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <FaEnvelope className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Email</h4>
                  <p className="text-gray-600">sales@tpsv1.com</p>
                  <p className="text-gray-600">support@tpsv1.com</p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                <div className="flex justify-center space-x-6">
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <FaFacebookF className="text-primary text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <FaTwitter className="text-primary text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <FaLinkedinIn className="text-primary text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <FaYoutube className="text-primary text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;