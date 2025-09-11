import React, { useState } from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const filters = [
    { id: '*', label: 'All' },
    { id: 'logo', label: 'Logo' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'website', label: 'Websites' },
    { id: 'mockup', label: 'Logo Mockup' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Glodima Digital Marketing',
      category: 'logo',
      description: 'Digital Marketing Agency Logo for Glodima',
      image: '/logo/glodima.png',
      link: '#'
    },
    {
      id: 2,
      title: 'Queen Learning Centre',
      category: 'logo',
      description: 'School Logo for Queen Learning Centre',
      image: '/logo/queen_black_bg.png',
      link: '#'
    },
    {
      id: 3,
      title: 'Young Stars Football Club',
      category: 'logo',
      description: 'Logo for Young Stars Football Club',
      image: '/logo/young_black_bg.png',
      link: '#'
    },
    {
      id: 4,
      title: 'Carrier Bag Design',
      category: 'mockup',
      description: 'Classic Female Carrier Bag',
      image: '/logo mockups/bag.png',
      link: '#'
    },
    {
      id: 5,
      title: 'Next Construction Ltd',
      category: 'logo',
      description: 'Logo for Next Construction Ltd',
      image: '/logo/next_white_bg.png',
      link: '#'
    },
    {
      id: 6,
      title: 'Branded Cap Mockup',
      category: 'mockup',
      description: 'Unisex Branded Cap Mockup',
      image: '/logo mockups/cap_black.png',
      link: '#'
    },
        {
      id: 7,
      title: 'Branded T-Shirt Mockup',
      category: 'mockup',
      description: 'Female Branded Tshirt Mockup',
      image: '/logo mockups/female_black_sleeve.png',
      link: '#'
    },
        {
      id: 8,
      title: 'Branded Hoodie Mockup',
      category: 'mockup',
      description: 'Unisex Branded Hoodie Mockup',
      image: '/logo mockups/hoodie_black.png',
      link: '#'
    },
        {
      id: 9,
      title: 'Branded Male T-shirt Mockup',
      category: 'mockup',
      description: 'Male Branded T-shirt Mockup',
      image: '/logo mockups/long_sleeve_black.png',
      link: '#'
    },
        {
      id: 10,
      title: 'Branded Mug Mockup',
      category: 'mockup',
      description: 'Universal Branded Mug Mockup',
      image: '/logo mockups/mug.png',
      link: '#'
    },
        {
      id: 11,
      title: 'Branded Sprayer Mockup',
      category: 'mockup',
      description: 'Branded Sprayer Mockup',
      image: '/logo mockups/Sprayer.png',
      link: '#'
    },
    {
      id: 12,
      title: 'AUTTA Kenya Website',
      category: 'web-design',
      description: 'Web design for AUTTA Kenya',
      image: '/web-design/autta-web-design.png',
      link: '#'
    },
    {
      id: 13,
      title: 'Tower Arts Enterprises',
      category: 'website',
      description: 'Building & Construction Company Website',
      image: '/logo/tower_arts.png',
      link: 'https://towerartsenterprises.com/'
    },
    {
      id: 14,
      title: 'Western Computers',
      category: 'website',
      description: 'Computers and Accessories Ecommerse Store',
      image: '/logo/western.png',
      link: 'https://westerncomputers.co.ke/'
    },
    {
      id: 15,
      title: 'Sunset Hotel Kisumu',
      category: 'website',
      description: 'Hotel and Accommodation',
      image: '/logo/sunset.png',
      link: 'https://sunsethotelkisumu.com/'
    }
  ];

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 animate-fade-in-up">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent projects showcasing our expertise. Contact us today to learn how we can help your business achieve digital success!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${activeFilter === filter.id ? 'bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 hover:border-cyan-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#02caf5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
                
                {/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-cyan-100 text-[#02caf5] text-sm rounded-full font-medium capitalize">
                    {item.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Our Digital Projects & Success Stories | Chidebru Techs</title>
        <meta 
          name="description" 
          content="Explore our portfolio of successful digital projects including websites for Tower Arts Enterprises, AUTTA Kenya, logo designs, web designs, and branding work. See our expertise in action." 
        />
        <meta name="keywords" content="portfolio, web design portfolio, logo design examples, website projects, Tower Arts Enterprises, AUTTA Kenya, digital marketing projects" />
        <meta property="og:title" content="Portfolio - Our Digital Projects & Success Stories" />
        <meta property="og:description" content="Explore our portfolio of successful digital projects including websites, logo designs, and branding work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chidebrutechs.com/portfolio" />
        <link rel="canonical" href="https://chidebrutechs.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Chidebru Techs Portfolio",
            "description": "Portfolio showcasing digital projects and success stories",
            "creator": {
              "@type": "Organization",
              "name": "Chidebru Techs"
            },
            "workExample": [
              {
                "@type": "WebSite",
                "name": "Tower Arts Enterprises",
                "url": "https://towerartsenterprises.com/"
              },
              {
                "@type": "CreativeWork",
                "name": "AUTTA Kenya Website Design"
              }
            ]
          })}
        </script>
      </Helmet>
      <Portfolio />
    </>
  );
};
export default PortfolioPage;