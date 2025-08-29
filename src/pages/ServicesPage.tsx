import React from 'react';
import { Award, ShoppingBag, BarChart, BookOpen, Megaphone, Binary, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';

const Services = () => {
  // Icon mapping
  const IconMap = {
    Award,
    ShoppingBag,
    BarChart,
    BookOpen,
    Megaphone,
    Binary,
    CreditCard,
    Smartphone
  };

  return (
    <section id="services" className="py-20 bg-gray-50 animate-fade-in-up">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 hover:border-cyan-300"
            >
              {/* Icon */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {React.createElement(IconMap[service.icon as keyof typeof IconMap], { className: "w-8 h-8" })}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#02caf5] transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-cyan-50 text-[#02caf5] text-sm rounded-full border border-cyan-100"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link to={`/services/${service.slug}`} className="w-full py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 text-center block">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return <Services />;
};

export default ServicesPage;
