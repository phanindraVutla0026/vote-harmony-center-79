
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { VoteIcon, ClipboardList, CalendarDays, Clock, LogOut, AlertCircle, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { to: '/', label: 'Home', icon: <VoteIcon size={18} /> },
    { to: '/current-voting', label: 'Current Voting', icon: <Clock size={18} /> },
    { to: '/past-voting', label: 'Past Voting', icon: <ClipboardList size={18} /> },
    { to: '/future-voting', label: 'Future Voting', icon: <CalendarDays size={18} /> },
    { to: '/complaints', label: 'File Complaints', icon: <AlertCircle size={18} /> },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7e9862c1-b964-4d23-ba20-b8a41967eeb5.png" 
              alt="Election Commission of India" 
              className="h-10"
            />
            <div className="hidden sm:block">
              <span className="font-semibold text-lg">Digital Voting Platform</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 rounded-lg flex items-center space-x-1 text-sm transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
                {isActive(link.to) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="block md:hidden mr-2">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
            <Link
              to="/login"
              className="inline-flex items-center space-x-1 text-sm py-2 px-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md ${
                    isActive(link.to)
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{link.icon}</span>
                    <span>{link.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
