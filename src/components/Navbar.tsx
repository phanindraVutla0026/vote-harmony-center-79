
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { VoteIcon, ClipboardList, CalendarDays, Clock, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
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
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-full bg-rkv-blue text-white">
              <VoteIcon size={22} />
            </div>
            <span className="font-semibold text-lg">RK Valley Voting</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 rounded-lg flex items-center space-x-1 text-sm transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-rkv-blue font-medium'
                    : 'text-gray-600 hover:text-rkv-blue hover:bg-rkv-light-blue/50'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
                {isActive(link.to) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-rkv-blue rounded-full"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Link
              to="/login"
              className="inline-flex items-center space-x-1 text-sm py-2 px-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
