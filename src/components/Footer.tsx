
import React from 'react';
import { Heart, Phone, Mail, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center mb-3">
              <img 
                src="/lovable-uploads/7e9862c1-b964-4d23-ba20-b8a41967eeb5.png" 
                alt="Election Commission of India" 
                className="h-10 mr-2 bg-white p-1 rounded"
              />
              <span className="font-semibold">Digital Voting Platform</span>
            </div>
            <p className="text-sm text-blue-100 mb-4">
              The official electronic voting platform of the Election Commission of India.
            </p>
            <div className="flex items-center space-x-1 text-sm text-blue-200">
              <span>Built with</span>
              <Heart size={14} className="text-red-400 fill-red-400" />
              <span>by ECI Tech Team</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
              <Link to="/current-voting" className="text-blue-200 hover:text-white transition-colors">Current Elections</Link>
              <Link to="/past-voting" className="text-blue-200 hover:text-white transition-colors">Past Elections</Link>
              <Link to="/future-voting" className="text-blue-200 hover:text-white transition-colors">Upcoming Elections</Link>
              <Link to="/complaints" className="text-blue-200 hover:text-white transition-colors">File Complaints</Link>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-green-400" />
                <div>
                  <p className="font-medium">Toll-Free Helpline</p>
                  <p className="text-blue-200">1800-111-950</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-green-400" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-blue-200">support@digitalvoting.gov.in</p>
                </div>
              </div>
              <div className="flex items-center">
                <HelpCircle size={16} className="mr-2 text-green-400" />
                <div>
                  <p className="font-medium">Help Center</p>
                  <p className="text-blue-200">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-blue-800 text-center text-sm text-blue-300">
          <p>&copy; {currentYear} Election Commission of India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
