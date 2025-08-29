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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-gradient-to-r from-white/95 via-cyan-50/95 to-purple-50/95 backdrop-blur-xl shadow-2xl border-b border-cyan-200/50'
        : 'bg-gradient-to-r from-gray-900/90 via-cyan-900/80 to-purple-900/90 backdrop-blur-lg shadow-xl border-b border-white/10'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Chidebru Techs Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="text-xl font-bold gradient-text transition-all duration-300 hover:scale-105">
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
                  className={`flex items-center space-x-1 transition-all duration-300 hover:text-[#02caf5] hover:-translate-y-0.5 ${ // Enhanced hover effect
                    (item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path)) // Check for active path
                      ? 'text-[#02caf5] font-bold' // Active link style
                      : isScrolled ? 'text-gray-700' : 'text-white' // Default link style based on scroll
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
              isScrolled ? 'text-gray-700 hover:bg-cyan-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-1 p-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      (item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path))
                        ? 'bg-cyan-50 text-[#02caf5] font-semibold' : 'text-gray-700 hover:bg-cyan-50 hover:text-[#02caf5]'
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
                         className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                           location.pathname === dropdownItem.path ? 'bg-cyan-50 text-[#02caf5] font-semibold' : 'text-gray-600 hover:bg-cyan-50 hover:text-[#02caf5]'
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
               className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white rounded-lg font-medium hover:from-[#0299c7] hover:to-[#a308cc] transition-all mt-4"
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