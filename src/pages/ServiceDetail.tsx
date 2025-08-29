import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Award, 
  ShoppingBag, 
  BarChart, 
  BookOpen, 
  Megaphone, 
  Binary, 
  CreditCard, 
  Smartphone,
  ArrowLeft,
  Check,
  ArrowRight,
  Star
} from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
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

  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = IconMap[service.icon as keyof typeof IconMap];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#02caf5]/20 to-[#ce0aff]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[#ce0aff]/20 to-[#02caf5]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-gray-300 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-2xl flex items-center justify-center text-white mr-6">
                  {IconComponent && <IconComponent className="w-10 h-10" />}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    {service.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      <span>Premium Service</span>
                    </div>
                    <span>•</span>
                    <span>{service.pricing?.starting}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {service.detailedDescription || service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {service.benefits && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our <span className="gradient-text">{service.title}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the key benefits that make our service the right choice for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-cyan-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-xl flex items-center justify-center text-white mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project's success
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-full flex items-center justify-center text-white font-bold mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-xl p-6 border border-cyan-100">
                      <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {service.pricing && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Investment & <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Transparent pricing for professional results
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {service.pricing.starting}
                  </div>
                  <p className="text-gray-600">{service.pricing.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our {service.title.toLowerCase()} services can help your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;