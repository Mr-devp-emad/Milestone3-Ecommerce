import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Welcome to <strong>PRESH STORE</strong>! We are a leading eCommerce platform offering the best products at competitive prices. Our mission is to provide a seamless shopping experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="/" className="hover:text-gray-400">Home</a></li>
              <li className="mb-2"><a href="/shop" className="hover:text-gray-400">Shop</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
              <li className="mb-2"><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm">
              <li className="mb-2">Email: support@preshstore.com</li>
              <li className="mb-2">Phone: +1 (123) 456-7890</li>
              <li className="mb-2">Address: Karachi Sindh , Pakistan</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <strong>PRESH STORE</strong>.
            DEVELOPED BY EMAD AHMED 
             All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;