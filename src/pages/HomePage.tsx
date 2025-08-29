import React from 'react';
import { ArrowRight, Play, Award, BarChart, Megaphone, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import FeaturesSection from '../components/FeaturesSection';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900 to-purple-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
          alt="Digital Technology Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#02caf5]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-[#ce0aff]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Welcome to Chidebru Techs
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Accelerate Your Business Growth with
            <span className="block bg-gradient-to-r from-[#02caf5] to-[#ce0aff] bg-clip-text text-transparent m-2">
              Expert Digital Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Transform your business with our comprehensive suite of digital services. We help SMEs establish powerful online presence, engage customers effectively, and drive measurable growth through expert branding, web development, and digital marketing.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">9+</div>
              <div className="text-xs sm:text-sm text-gray-300">Clients</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">8+</div>
              <div className="text-xs sm:text-sm text-gray-300">Projects</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2624+</div>
              <div className="text-xs sm:text-sm text-gray-300">Hours Support</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-xs sm:text-sm text-gray-300">Team Members</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Start Your Digital Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-sm sm:text-base"
            >
              <Play className="mr-2 w-5 h-5" />
              Explore Our Solutions
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

const TrustedBy = () => {
  const clients = [
    'Tower Arts Enterprises', 'Sunset Hotel Kisumu', 'Western Computers', 'Usawa Quest', 
    'City of Hope Worship Center', 'GRise System Solutions', 'ManageMate', 'AffordHostel'
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Growing Businesses
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the businesses that have transformed their digital presence with our expert solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="group text-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-purple-50 transition-all duration-300 border border-gray-100 hover:border-cyan-200">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-[#02caf5] transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KeyServices = () => {
  const services = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Brand Identity & Logo Design",
      description: "Create a memorable brand that resonates with your audience and stands out in the marketplace.",
      link: "/services"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Build robust, scalable websites and applications tailored to your business needs.",
      link: "/services"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Boost your online visibility and drive targeted traffic with our comprehensive marketing strategies.",
      link: "/services"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Content & Copywriting",
      description: "Engage your audience with compelling, SEO-optimized content that converts visitors into customers.",
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#02caf5] text-sm font-medium border border-cyan-100 mb-4">
            <span className="w-2 h-2 bg-[#02caf5] rounded-full mr-2 animate-pulse"></span>
            Our Core Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Can
            <span className="block gradient-text"> Help Your Business </span>
           
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to execution, we provide end-to-end digital solutions that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 hover:border-cyan-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#02caf5] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link
                to={service.link}
                className="inline-flex items-center text-[#02caf5] font-semibold hover:text-[#0299c7] transition-colors group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 shadow-lg"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What services does Chidebru Techs offer?",
      answer: "Chidebru Techs provides a comprehensive range of digital solutions including branding (logo design), web design, web development, content writing, and digital marketing."
    },
    {
      question: "How can Chidebru Techs help my business grow?",
      answer: "We offer end-to-end digital solutions that help establish and enhance your online presence, engage your audience with compelling content, and implement effective marketing strategies."
    },
    {
      question: "Do you offer custom web design and development?",
      answer: "Yes, we provide custom web design and development tailored to meet the unique needs of your business, ensuring a user-friendly, responsive, and visually appealing online presence."
    },
    {
      question: "Can you assist with logo and brand identity design?",
      answer: "Absolutely! Our branding experts specialize in creating memorable and impactful logos that represent your business identity and resonate with your target audience."
    },
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a full suite of digital marketing services including SEO, SEM, social media marketing, email marketing, PPC advertising, and content marketing."
    },
    {
      question: "How does Chidebru Techs ensure the security of my business data?",
      answer: "Our cybersecurity services include risk assessments, threat detection, data encryption, network security, and ongoing monitoring to protect your business from potential cyber threats and data breaches."
    },
    {
      question: "Can you create content for my website and marketing campaigns?",
      answer: "Yes, our team of professional content writers can create high-quality, engaging, and SEO-optimized content for your website, blogs, and marketing campaigns to attract and retain your audience."
    },
    {
      question: "How do I get started with Chidebru Techs?",
      answer: "Getting started is easy! Contact us via our website, email, or phone to discuss your business needs and goals."
    },
    {
      question: "What sectors do you serve?",
      answer: "Our solutions are adaptable to meet the specific needs of various business sectors."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on the specific services and scope of your project. Contact us for a detailed consultation and customized quote that fits your budget and requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Side */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="block text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your go-to section! We have compiled answers to some of the most commonly asked questions about us. If you have any additional questions, please feel free to contact us.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl p-6 border border-cyan-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Can't find the answer you're looking for? Please reach out to our team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105"
              >
                Get Your Free Consultation
              </Link>
            </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturesSection />
      <KeyServices />
      <FAQ />
    </>
  );
};

export default HomePage;
