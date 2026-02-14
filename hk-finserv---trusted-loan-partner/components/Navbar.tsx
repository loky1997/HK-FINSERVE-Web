
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <span className="text-white font-bold text-xl">HK</span>
            </div>
            <span className="text-xl font-bold text-gray-900">{BUSINESS_INFO.name}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#eligibility" className="text-gray-600 hover:text-blue-600 transition-colors">Eligibility</a>
            <a href="#documents" className="text-gray-600 hover:text-blue-600 transition-colors">Documents</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md">
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-xl">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-600 py-2">Home</a>
          <a href="#eligibility" onClick={() => setIsOpen(false)} className="block text-gray-600 py-2">Eligibility</a>
          <a href="#documents" onClick={() => setIsOpen(false)} className="block text-gray-600 py-2">Documents</a>
          <a href="tel:9966992935" className="block bg-blue-600 text-white text-center py-3 rounded-lg">Call Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
