import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    useful: [
      { label: 'Home', path: '/' },
      { label: 'About us', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Contact', path: '/contact' }
    ],
    services: [
      { label: 'Branding', path: '/services' },
      { label: 'Web Design', path: '/services' },
      { label: 'Web Development', path: '/services' },
      { label: 'Content Writing', path: '/services' },
      { label: 'Digital Marketing', path: '/services' },
      { label: 'Custom Software', path: '/services' },
      { label: 'E-Commerce Solutions', path: '/services' },
      { label: 'Mobile App Development', path: '/services' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/chidebru', label: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/ChidebruTechs/', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/chidebrutechs/', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/chidebru-techs/', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@chidebrutechs', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="Chidebru Techs Logo" className="w-full h-full object-contain p-1" />
              </div>
              <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">Chidebru Techs</span>
            </Link>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              At Chidebru Techs, we are committed to delivering exceptional digital solutions that drive your business success. Contact us today to learn more about how we can help your business thrive in the digital age.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg gradient-text font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {footerLinks.useful.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors hover:underline" // Use Link for internal navigation
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg gradient-text font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors hover:underline" // Use Link for internal navigation
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h5 className="font-semibold mb-2">Address</h5>
              <p className="text-gray-300 text-sm">
                Ondiek Highway<br />
                Kisumu, Kenya
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Contact</h5>
              <p className="text-gray-300 text-sm">
                Phone: +254 795712677<br />
                Email: chidebrutechs@gmail.com
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">
                Monday - Friday<br />
                8:00AM - 05:00PM
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © Copyright {currentYear} Chidebru Techs. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;