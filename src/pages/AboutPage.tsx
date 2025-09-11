import React from 'react';
import { Target, Eye, Lightbulb, TrendingUp, Twitter, Facebook, Instagram, Linkedin} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vision",
      description: "To become the leading provider of integrated tech solutions, empowering businesses globally."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Mission",
      description: "To simplify the digital journey for businesses by offering comprehensive, innovative, and secure tech solutions."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Tagline",
      description: "Empowering Your Digital Success"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Slogan",
      description: "Your One-Stop Digital Solution"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Chidebru Techs</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Chidebru Techs is your reliable partner, committed to helping your business thrive in the digital landscape. We are dedicated to solving the problem of fragmented tech services for businesses by offering a seamless, all-in-one solution.
                </p>
                <p>
                  Our team of skilled professionals excels in crafting compelling content that engages your audience and implementing effective digital marketing strategies to elevate your business visibility.
                </p>
                <p>
                  Let us handle your tech needs, so you can focus on what you do best which is to grow your business.
                </p>
              </div>
            </div>

            {/* Trusted By Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted By:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {[
    'Tower Arts Enterprises', 'Sunset Hotel Kisumu', 'Western Computers', 'Usawa Quest', 
    'City of Hope Worship Center', 'GRise System Solutions', 'ManageMate', 'AffordHostel'
  ].map((client, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <span className="text-sm font-medium text-gray-700">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-cyan-100 hover:border-cyan-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#02caf5] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Deusdarius Chimoyi",
      role: "Founder & CEO",
      bio: "Deusdarius is the visionary behind Chidebru Techs, with over 5 years of experience in the tech industry. His passion for solving complex business problems with innovative technology solutions drives the company's mission and growth.",
      image: "/deusdaruis.jpeg",
      social: {
        twitter: "https://x.com/chidebru",
        facebook: "https://www.facebook.com/darius.oluoch",
        linkedin: "https://www.linkedin.com/in/deusdarius-chimoyi-1394a01b0/"
      }
    },
    {
      name: "CPA Kevin Ouma",
      role: "Chief Operations Officer (COO)",
      bio: "Kevin ensures the smooth operation of Chidebru Techs, overseeing day-to-day activities and coordinating between departments. His expertise in operational management and strategic planning is instrumental in delivering high-quality services to our clients.",
      image: "/kevin.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Martin Mutukoh",
      role: "Chief Technology Officer (CTO)",
      bio: "Martin leads our tech team, bringing over a decade of experience in software development and IT infrastructure. His deep understanding of emerging technologies ensures we stay ahead of the curve and deliver cutting-edge solutions to our clients.",
      image: "/martin.jpg",
      social: {
        twitter: "#",
        facebook: "https://www.facebook.com/mtukoh/",
        linkedin: "#"
      }
    },
    {
      name: "Shemaiah Ngala",
      role: "Lead Web Developer",
      bio: "Shemaiah heads our web development team, specializing in creating custom, scalable, and secure websites. His expertise in various programming languages and frameworks ensures our clients receive top-notch web solutions.",
      image: "/shemaiah.jpg",
      social: {
        twitter: "https://x.com/NgalahShemaiah",
        linkedin: "http://www.linkedin.com/in/shemaiah-ngala"
      }
    },
    {
      name: "Paul Makerere",
      role: "Digital Marketing Director",
      bio: "Paul spearheads our digital marketing efforts, devising strategies that boost online visibility and drive traffic. With a background in SEO, social media marketing, and PPC advertising, He ensures our clients achieve their marketing goals.",
      image: "/paul.jpg",
      social: {
        facebook: "https://www.facebook.com/pawlshaldon.otinoe"
      }
    },
    {
      name: "Alex Esesere",
      role: "Content Strategist",
      bio: "Alex leads our content team, creating engaging and SEO-optimized content that attracts and retains audiences. His skills in content writing and marketing help businesses communicate their message effectively.",
      image: "alex.jpeg",
      social: {
        twitter: "https://x.com/alex-ogonyo",
        linkedin: "https://www.linkedin.com/in/alex-esesere/"
      }
    }
  ];

  interface SocialIconProps {
    platform: 'twitter' | 'facebook' | 'instagram' | 'linkedin';
    url: string;
  }

  const SocialIcon = ({ platform, url }: SocialIconProps) => {
    const iconProps = { className: "w-5 h-5" };
    
    switch (platform) {
      case 'twitter':
        return <Twitter {...iconProps} />;
      case 'facebook':
        return <Facebook {...iconProps} />;
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="py-20 bg-white animate-fade-in-up">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the experts who make it all happen
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 hover:border-cyan-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      url && url !== "#" && (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all"
                        >
                          <SocialIcon platform={platform as 'twitter' | 'facebook' | 'instagram' | 'linkedin'} url={url} />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#02caf5] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#02caf5] font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Chidebru Techs - Expert Digital Solutions Team | Our Story & Mission</title>
        <meta 
          name="description" 
          content="Learn about Chidebru Techs - your reliable partner for digital success. Meet our expert team of 15+ professionals led by Deusdarius Chimoyi. Trusted by 9+ clients including Sunset Hotel, Tower Arts, Western Computers..." 
        />
        <meta name="keywords" content="about chidebru techs, digital agency team, web development company, Deusdarius Chimoyi, Martin Mutukoh, Kisumu Kenya" />
        <meta property="og:title" content="About Chidebru Techs - Expert Digital Solutions Team" />
        <meta property="og:description" content="Learn about Chidebru Techs - your reliable partner for digital success. Meet our expert team of 15+ professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chidebrutechs.com/about" />
        <link rel="canonical" href="https://chidebrutechs.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Chidebru Techs",
              "founder": {
                "@type": "Person",
                "name": "Deusdarius Chimoyi",
                "jobTitle": "Founder & CEO"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "CPA Kevin Ouma",
                  "jobTitle": "Chief Operations Officer (COO)"
                },
                {
                  "@type": "Person",
                  "name": "Martin Mutukoh",
                  "jobTitle": "Chief Technology Officer (CTO)"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <About />
      <Team />
    </>
  );
};

export default AboutPage;
