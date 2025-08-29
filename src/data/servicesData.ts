import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  detailedDescription?: string;
  benefits?: string[];
  process?: string[];
  pricing?: {
    starting: string;
    description: string;
  };
}

export const services: Service[] = [
  {
    id: 1,
    slug: "branding-and-logo-design",
    icon: "Award",
    title: "Branding and Logo Design",
    description: "Our branding experts work with you to create a strong, memorable brand identity that resonates with your target audience. From crafting impactful logos to developing cohesive brand guidelines, we ensure your brand stands out in the marketplace.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    detailedDescription: "Your brand is more than just a logo – it's the complete visual and emotional experience your customers have with your business. Our comprehensive branding services help you create a cohesive, memorable identity that sets you apart from competitors and builds lasting customer relationships.",
    benefits: [
      "Increased brand recognition and recall",
      "Professional, cohesive visual identity",
      "Stronger emotional connection with customers",
      "Competitive advantage in the marketplace",
      "Clear brand messaging and positioning"
    ],
    process: [
      "Discovery and brand strategy session",
      "Concept development and initial designs",
      "Refinement based on your feedback",
      "Final logo and brand guideline delivery",
      "Brand implementation support"
    ],
    pricing: {
      starting: "From $500",
      description: "Complete branding package including logo, color palette, typography, and brand guidelines"
    }
  },
  {
    id: 2,
    slug: "web-design",
    icon: "ShoppingBag",
    title: "Web Design",
    description: "Our web design services focus on creating visually stunning, user-friendly websites that reflect your brand's personality. We prioritize responsive design, ensuring your site looks great on all devices.",
    features: ["Responsive Design", "UI/UX Design", "Prototyping", "Visual Design"],
    detailedDescription: "Great web design is the foundation of successful online presence. We create beautiful, functional websites that not only look amazing but also provide exceptional user experiences that convert visitors into customers.",
    benefits: [
      "Mobile-first responsive design",
      "Improved user engagement and conversion rates",
      "Professional, modern aesthetic",
      "Optimized for search engines",
      "Fast loading times and performance"
    ],
    process: [
      "Requirements gathering and wireframing",
      "Visual design and mockup creation",
      "Interactive prototype development",
      "Design refinement and approval",
      "Final design handoff for development"
    ],
    pricing: {
      starting: "From $800",
      description: "Complete web design package including wireframes, mockups, and responsive layouts"
    }
  },
  {
    id: 3,
    slug: "web-development",
    icon: "BarChart",
    title: "Web Development",
    description: "We offer custom web development services tailored to your business requirements. Our team of skilled developers uses the latest technologies to build robust, scalable, and secure websites.",
    features: ["Custom Development", "CMS Integration", "E-commerce", "API Development"],
    detailedDescription: "Transform your web designs into fully functional, high-performance websites. Our development team specializes in creating custom solutions that are secure, scalable, and optimized for your specific business needs.",
    benefits: [
      "Custom functionality tailored to your needs",
      "Secure, scalable architecture",
      "SEO-optimized code structure",
      "Content management system integration",
      "Ongoing maintenance and support"
    ],
    process: [
      "Technical requirements analysis",
      "Architecture planning and setup",
      "Development and testing phases",
      "Quality assurance and optimization",
      "Launch and post-launch support"
    ],
    pricing: {
      starting: "From $1,200",
      description: "Custom web development with modern frameworks and best practices"
    }
  },
  {
    id: 4,
    slug: "content-writing",
    icon: "BookOpen",
    title: "Content Writing",
    description: "Compelling content is key to engaging your audience and boosting your online presence. Our professional content writers create high-quality, SEO-optimized content for websites, blogs, and marketing campaigns.",
    features: ["SEO Content", "Blog Writing", "Copy Writing", "Content Strategy"],
    detailedDescription: "Quality content is the cornerstone of digital marketing success. Our expert writers create engaging, SEO-optimized content that not only ranks well in search engines but also connects with your audience and drives conversions.",
    benefits: [
      "Improved search engine rankings",
      "Higher audience engagement",
      "Increased website traffic",
      "Better conversion rates",
      "Consistent brand voice and messaging"
    ],
    process: [
      "Content strategy development",
      "Keyword research and planning",
      "Content creation and optimization",
      "Review and revision cycles",
      "Publishing and performance monitoring"
    ],
    pricing: {
      starting: "From $300",
      description: "Professional content writing services with SEO optimization"
    }
  },
  {
    id: 5,
    slug: "digital-marketing",
    icon: "Megaphone",
    title: "Digital Marketing",
    description: "Increase your brand visibility and drive traffic to your website with our comprehensive digital marketing services including SEO, social media marketing, and PPC advertising.",
    features: ["SEO Optimization", "Social Media", "PPC Advertising", "Email Marketing"],
    detailedDescription: "Reach your target audience effectively with our data-driven digital marketing strategies. We help you build a strong online presence, engage with customers across multiple channels, and achieve measurable business growth.",
    benefits: [
      "Increased online visibility and reach",
      "Higher quality leads and conversions",
      "Better return on marketing investment",
      "Comprehensive analytics and reporting",
      "Multi-channel marketing approach"
    ],
    process: [
      "Marketing audit and strategy development",
      "Campaign setup and optimization",
      "Content creation and scheduling",
      "Performance monitoring and analysis",
      "Continuous optimization and reporting"
    ],
    pricing: {
      starting: "From $600/month",
      description: "Comprehensive digital marketing campaigns with ongoing optimization"
    }
  },
  {
    id: 6,
    slug: "custom-software-development",
    icon: "Binary",
    title: "Custom Software Development",
    description: "Get bespoke software solutions designed to meet your unique business needs. Our custom software development services include application development, system integration, and software maintenance.",
    features: ["Custom Applications", "System Integration", "API Development", "Software Maintenance"],
    detailedDescription: "Every business has unique challenges that require tailored solutions. Our custom software development services help you streamline operations, improve efficiency, and gain competitive advantages through purpose-built applications.",
    benefits: [
      "Solutions tailored to your specific needs",
      "Improved operational efficiency",
      "Competitive advantage through innovation",
      "Scalable architecture for future growth",
      "Ongoing support and maintenance"
    ],
    process: [
      "Requirements analysis and planning",
      "System architecture and design",
      "Development and testing phases",
      "User acceptance testing",
      "Deployment and ongoing support"
    ],
    pricing: {
      starting: "From $2,500",
      description: "Custom software solutions with full development lifecycle support"
    }
  },
  {
    id: 7,
    slug: "e-commerce-solutions",
    icon: "CreditCard",
    title: "E-Commerce Solutions",
    description: "Transform your business with our e-commerce solutions. We design and develop user-friendly online stores, integrate secure payment gateways, and implement effective e-commerce strategies.",
    features: ["Online Stores", "Payment Integration", "Inventory Management", "Shopping Cart"],
    detailedDescription: "Launch your online store with confidence. Our e-commerce solutions provide everything you need to sell online successfully, from beautiful storefronts to secure payment processing and inventory management.",
    benefits: [
      "Professional online store presence",
      "Secure payment processing",
      "Automated inventory management",
      "Mobile-optimized shopping experience",
      "Analytics and sales reporting"
    ],
    process: [
      "E-commerce strategy and planning",
      "Store design and development",
      "Payment gateway integration",
      "Testing and quality assurance",
      "Launch and ongoing optimization"
    ],
    pricing: {
      starting: "From $1,800",
      description: "Complete e-commerce solution with payment integration and management tools"
    }
  },
  {
    id: 8,
    slug: "mobile-app-development",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Stay ahead of the competition with our mobile app development services. We create intuitive, high-performance mobile apps for both iOS and Android platforms, tailored to meet your business objectives.",
    features: ["iOS Development", "Android Development", "Cross-platform", "App Store Optimization"],
    detailedDescription: "Reach your customers wherever they are with custom mobile applications. We develop native and cross-platform apps that provide exceptional user experiences and help you connect with your audience on their preferred devices.",
    benefits: [
      "Direct customer engagement channel",
      "Increased brand loyalty and retention",
      "Push notification capabilities",
      "Offline functionality options",
      "App store presence and discoverability"
    ],
    process: [
      "App concept and feature planning",
      "UI/UX design and prototyping",
      "Development and testing",
      "App store submission and approval",
      "Launch support and maintenance"
    ],
    pricing: {
      starting: "From $3,500",
      description: "Native or cross-platform mobile app development with app store deployment"
    }
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};