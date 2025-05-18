import  { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

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
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academic Programs', path: '/academic-programs' },
    { name: 'Incubator', path: '/incubator' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'News & Events', path: '/news' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900 bg-opacity-95 bg-blur shadow-md py-2' : 'bg-blue-900 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <NavLink to="/" className="flex items-center space-x-2 mb-2 md:mb-0">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-900 text-white overflow-hidden">
              <img src="" alt="Logo" className="h-10 w-10 object-cover absolute inset-0 opacity-30" style={{zIndex:0}} />
              {/* Foreground logo or text remains above */}
            </div>
            <div className="text-xl font-bold text-red-400" style={{position:'relative',zIndex:1}}>CBG II <span className="text-red-400">TVET</span></div>
          </NavLink>

          {/* Desktop menu */}
          <nav className="hidden md:flex flex-wrap items-center space-x-4 md:space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `menu-link ${isActive ? 'text-red-600 active' : 'text-red-600 hover:text-red-400'}`
                }
              >
                {item.name}
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
            className="md:hidden text-gray-700 hover:text-blue-900"
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
                {item.name}
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
