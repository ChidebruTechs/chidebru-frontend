import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', exact: true }, // Add exact for home page
    {
      label: 'About',
      path: '/about', // No exact for parent path with dropdown
      dropdown: [
        { label: 'Chidebru Techs', path: '/about' },
        { label: 'Team', path: '/about#team' } // Anchor link within the About page
      ]
    },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-900/80 backdrop-blur-md shadow-2xl border-b border-gray-200'
        : 'bg-gray-900/80 backdrop-blur-sm shadow-lg' // Distinct background when not scrolled
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Chidebru Techs Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className={`${
              isScrolled ? 'text-white' : 'text-white' // Adjust logo text color based on scroll
            } text-xl font-bold gradient-text transition-colors`}>
              Chidebru Techs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 transition-all duration-300 hover:text-[#02caf5] hover:scale-105 relative ${ // Enhanced hover effect
                    (item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path)) // Check for active path
                      ? 'text-[#02caf5] font-bold border-b-2 border-[#02caf5] pb-1' // Enhanced active link style
                      : isScrolled ? 'text-white' : 'text-white' // Default link style based on scroll
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white rounded-lg font-medium hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'v hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl rounded-b-lg border-b border-gray-200">
            <nav className="flex flex-col space-y-1 p-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      (item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path))
                        ? 'bg-gradient-to-r from-cyan-50 to-purple-50 text-[#02caf5] font-semibold border-l-4 border-[#02caf5]' 
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 hover:text-[#02caf5]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropdownItem.path}
                         className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 ${
                           location.pathname === dropdownItem.path 
                             ? 'bg-gradient-to-r from-cyan-50 to-purple-50 text-[#02caf5] font-semibold border-l-2 border-[#02caf5]' 
                             : 'text-gray-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 hover:text-[#02caf5]'
                         }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
               className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white rounded-lg font-medium hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;