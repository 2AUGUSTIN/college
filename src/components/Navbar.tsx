import  { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Info, BookOpen, Users, ClipboardList, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/', icon: <HomeIcon className="h-5 w-5 mr-2" /> },
    { name: 'About Us', path: '/about', icon: <Info className="h-5 w-5 mr-2" /> },
    { name: 'Academic Programs', path: '/academic-programs', icon: <BookOpen className="h-5 w-5 mr-2" /> },
    { name: 'Student Life', path: '/student-life', icon: <Users className="h-5 w-5 mr-2" /> },
    { name: 'Admissions', path: '/admissions', icon: <ClipboardList className="h-5 w-5 mr-2" /> },
    { name: 'Partners', path: '/partners', icon: <Users className="h-5 w-5 mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="h-5 w-5 mr-2" /> },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900 bg-opacity-95 bg-blur shadow-md py-2' : 'bg-blue-900 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-between items-center gap-4 w-full">
          <NavLink to="/" className="flex items-center space-x-2 mb-2 md:mb-0 flex-shrink-0">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white border-2 border-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              </svg>
            </div>
            <div className="text-xl font-bold text-red-400" style={{position:'relative',zIndex:1}}>CBG II <span className="text-red-400">TVET</span></div>
          </NavLink>

          {/* Desktop menu */}
          <nav className="hidden md:flex flex-1 flex-row flex-wrap items-center justify-center space-x-2 md:space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `menu-link ${isActive ? 'text-red-600 active' : 'text-red-600 hover:text-red-400'}`
                }
              >
                <span className="flex items-center">{item.icon}{item.name}</span>
              </NavLink>
            ))}
            <button className="flex items-center space-x-1 text-sm font-medium text-red-600 bg-red-50 px-3 py-2 rounded hover:bg-red-100 transition-colors">
              <Globe className="h-4 w-4" />
              <span>EN</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-900 flex-shrink-0"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-5 space-y-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md w-full text-center ${
                    isActive ? 'bg-red-50 text-red-600 font-medium' : 'text-red-600 hover:bg-red-100'
                  }`
                }
              >
                <span className="flex items-center justify-center">{item.icon}{item.name}</span>
              </NavLink>
            ))}
            <button className="flex items-center justify-center space-x-1 text-sm font-medium text-red-600 bg-red-50 px-3 py-2 rounded-md w-full mt-2">
              <Globe className="h-4 w-4" />
              <span>EN</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
