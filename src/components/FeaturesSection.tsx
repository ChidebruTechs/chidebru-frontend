import React from 'react';
import { Zap, Shield, Users, Clock, Award, Lightbulb } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Delivery",
      description: "We deliver high-quality digital solutions with rapid turnaround times, ensuring your business stays ahead of the competition."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Your data security is our priority. We implement industry-standard security measures to protect your business and customer information."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our diverse team of 15+ skilled professionals brings years of experience across all digital disciplines to your project."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "We provide round-the-clock support with over 2624+ hours of dedicated customer service to ensure your success."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "With 9+ satisfied clients and 8+ successful projects, we have a proven history of delivering exceptional results."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative Solutions",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give your business a competitive advantage."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#02caf5]/10 to-[#ce0aff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[#ce0aff]/10 to-[#02caf5]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-full text-[#02caf5] text-sm font-medium border border-cyan-100 mb-2">
            <span className="w-2 h-2 bg-[#02caf5] rounded-full mr-2 animate-pulse"></span>
            Why Choose Chidebru Techs
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us
            <span className="block bg-gradient-to-r from-[#02caf5] to-[#ce0aff] bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with creative innovation to deliver comprehensive digital solutions that drive real business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-cyan-200"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#02caf5]/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#ffffff] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">Ready to get started?</span> Let's transform your digital presence together.
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-[#ce0aff] to-[#02caf5] rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-full border-2 border-white"></div>
              </div>
              <span>Trusted by 9+ businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;