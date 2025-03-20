
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 bg-rkv-off-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} RGUKT RK Valley. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Official Electronic Voting Platform
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-rkv-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-rkv-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-rkv-blue transition-colors">
              Help Center
            </a>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>at RGUKT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
