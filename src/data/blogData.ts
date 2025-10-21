export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "digital-transformation-guide-2024",
    title: "The Complete Guide to Digital Transformation in 2024",
    author: "Deusdarius Chimoyi",
    date: "2024-01-15",
    category: "Digital Strategy",
    imageUrl: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    excerpt: "Discover how businesses are leveraging digital transformation to stay competitive in today's rapidly evolving marketplace. Learn the key strategies and technologies driving success.",
    content: `
      <p>Digital transformation has become more than just a buzzword—it's a necessity for businesses looking to thrive in today's competitive landscape. As we move through 2024, the pace of technological change continues to accelerate, making it crucial for organizations to adapt and evolve.</p>

      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.</p>

      <h2>Key Areas of Focus</h2>
      <h3>1. Customer Experience</h3>
      <p>Modern customers expect seamless, personalized experiences across all touchpoints. This means investing in user-friendly websites, mobile apps, and omnichannel communication strategies.</p>

      <h3>2. Operational Efficiency</h3>
      <p>Automation and AI-powered tools can streamline processes, reduce costs, and improve accuracy. From chatbots handling customer inquiries to automated inventory management, the possibilities are endless.</p>

      <h3>3. Data-Driven Decision Making</h3>
      <p>Organizations that leverage data analytics gain valuable insights into customer behavior, market trends, and operational performance, enabling more informed strategic decisions.</p>

      <h2>Getting Started</h2>
      <p>Begin your digital transformation journey by assessing your current digital maturity, identifying key pain points, and developing a comprehensive strategy that aligns with your business objectives.</p>

      <p>At Chidebru Techs, we help businesses navigate their digital transformation journey with tailored solutions that drive real results. Contact us today to learn how we can help your organization thrive in the digital age.</p>
    `,
    readTime: "8 min read",
    tags: ["Digital Transformation", "Business Strategy", "Technology", "Innovation"]
  },
  {
    id: 2,
    slug: "web-design-trends-2024",
    title: "Top Web Design Trends Shaping 2024",
    author: "Martin Mutukoh",
    date: "2024-01-10",
    category: "Web Design",
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    excerpt: "Explore the latest web design trends that are defining user experiences in 2024. From minimalist aesthetics to interactive elements, discover what's driving modern web design.",
    content: `
      <p>Web design continues to evolve at a rapid pace, with new trends emerging that prioritize user experience, accessibility, and visual appeal. As we progress through 2024, several key trends are shaping how we approach web design.</p>

      <h2>1. Minimalist Design with Bold Typography</h2>
      <p>Clean, uncluttered layouts paired with striking typography are dominating the web design landscape. This approach improves readability and creates a more focused user experience.</p>

      <h2>2. Dark Mode and Color Schemes</h2>
      <p>Dark mode isn't just a trend—it's becoming a standard expectation. It reduces eye strain, saves battery life on mobile devices, and creates a modern, sophisticated aesthetic.</p>

      <h2>3. Micro-Interactions and Animations</h2>
      <p>Subtle animations and micro-interactions enhance user engagement without overwhelming the experience. These elements provide feedback, guide users, and add personality to websites.</p>

      <h2>4. Mobile-First Responsive Design</h2>
      <p>With mobile traffic continuing to dominate, designing for mobile devices first ensures optimal performance across all screen sizes and devices.</p>

      <h2>5. Accessibility-Focused Design</h2>
      <p>Inclusive design practices are becoming standard, ensuring websites are accessible to users with disabilities. This includes proper color contrast, keyboard navigation, and screen reader compatibility.</p>

      <h2>Implementation Tips</h2>
      <p>When implementing these trends, remember that functionality should never be sacrificed for aesthetics. The best designs seamlessly blend visual appeal with usability.</p>

      <p>Our team at Chidebru Techs stays ahead of design trends to create websites that not only look stunning but also deliver exceptional user experiences. Let us help you create a website that stands out in 2024.</p>
    `,
    readTime: "6 min read",
    tags: ["Web Design", "UI/UX", "Trends", "User Experience"]
  },
  {
    id: 3,
    slug: "seo-strategies-small-business",
    title: "Essential SEO Strategies for Small Businesses",
    author: "Paul Makerere",
    date: "2024-01-05",
    category: "Digital Marketing",
    imageUrl: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg",
    excerpt: "Learn practical SEO strategies that small businesses can implement to improve their online visibility and attract more customers. Discover actionable tips that deliver results.",
    content: `
      <p>Search Engine Optimization (SEO) is crucial for small businesses looking to compete in the digital marketplace. With the right strategies, even small businesses can achieve significant visibility in search results and attract more customers.</p>

      <h2>Understanding SEO Basics</h2>
      <p>SEO involves optimizing your website and content to rank higher in search engine results pages (SERPs). This includes both on-page optimization (content, keywords, meta tags) and off-page factors (backlinks, social signals).</p>

      <h2>Keyword Research and Strategy</h2>
      <h3>Local Keywords</h3>
      <p>For small businesses, local SEO is often the most important. Focus on keywords that include your location, such as "web design services Kisumu" or "digital marketing agency Kenya."</p>

      <h3>Long-Tail Keywords</h3>
      <p>Target specific, longer phrases that your potential customers might search for. These often have less competition and higher conversion rates.</p>

      <h2>On-Page Optimization</h2>
      <h3>Title Tags and Meta Descriptions</h3>
      <p>Craft compelling title tags and meta descriptions that include your target keywords and encourage clicks from search results.</p>

      <h3>Content Quality</h3>
      <p>Create valuable, informative content that addresses your customers' questions and needs. Regular blog posts, service pages, and resource guides all contribute to better rankings.</p>

      <h2>Local SEO Essentials</h2>
      <ul>
        <li>Claim and optimize your Google My Business listing</li>
        <li>Ensure consistent NAP (Name, Address, Phone) information across all platforms</li>
        <li>Encourage customer reviews and respond to them promptly</li>
        <li>Create location-specific content and landing pages</li>
      </ul>

      <h2>Technical SEO</h2>
      <p>Ensure your website loads quickly, is mobile-friendly, and has a clear site structure. These technical factors significantly impact your search rankings.</p>

      <h2>Measuring Success</h2>
      <p>Use tools like Google Analytics and Google Search Console to track your SEO performance. Monitor metrics such as organic traffic, keyword rankings, and conversion rates.</p>

      <p>At Chidebru Techs, we specialize in helping small businesses improve their online visibility through effective SEO strategies. Our comprehensive approach ensures sustainable growth in search rankings and organic traffic.</p>
    `,
    readTime: "10 min read",
    tags: ["SEO", "Digital Marketing", "Small Business", "Local SEO"]
  },
  {
    id: 4,
    slug: "mobile-app-development-trends",
    title: "Mobile App Development: What's Next in 2024",
    author: "Shemaiah Ngala",
    date: "2023-12-28",
    category: "Mobile Development",
    imageUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    excerpt: "Explore the latest trends in mobile app development, from AI integration to cross-platform solutions. Discover what technologies are shaping the future of mobile apps.",
    content: `
      <p>Mobile app development continues to evolve rapidly, with new technologies and frameworks emerging to meet changing user expectations and business needs. As we look ahead to 2024, several key trends are shaping the mobile development landscape.</p>

      <h2>AI and Machine Learning Integration</h2>
      <p>Artificial Intelligence is becoming increasingly integrated into mobile apps, enabling features like personalized recommendations, predictive text, voice recognition, and automated customer support.</p>

      <h2>Cross-Platform Development</h2>
      <h3>React Native and Flutter</h3>
      <p>Cross-platform frameworks continue to gain popularity, allowing developers to create apps for both iOS and Android using a single codebase. This approach reduces development time and costs while maintaining native performance.</p>

      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs bridge the gap between web and mobile apps, offering app-like experiences through web browsers. They provide offline functionality, push notifications, and can be installed on devices without app stores.</p>

      <h2>5G Technology Impact</h2>
      <p>The widespread adoption of 5G networks is enabling new possibilities for mobile apps, including enhanced AR/VR experiences, real-time gaming, and IoT integration.</p>

      <h2>Enhanced Security Features</h2>
      <p>With increasing concerns about data privacy, mobile apps are incorporating advanced security measures such as biometric authentication, end-to-end encryption, and secure payment gateways.</p>

      <h2>Internet of Things (IoT) Integration</h2>
      <p>Mobile apps are increasingly serving as control centers for IoT devices, from smart home systems to wearable technology and industrial equipment.</p>

      <h2>Augmented Reality (AR) and Virtual Reality (VR)</h2>
      <p>AR and VR technologies are becoming more accessible, enabling immersive experiences in gaming, education, retail, and healthcare applications.</p>

      <h2>Choosing the Right Approach</h2>
      <p>When planning a mobile app project, consider factors such as target audience, budget, timeline, and required features. The choice between native, cross-platform, or PWA development depends on your specific needs and goals.</p>

      <p>Our mobile development team at Chidebru Techs stays current with the latest technologies and best practices to deliver cutting-edge mobile solutions that meet your business objectives and user expectations.</p>
    `,
    readTime: "7 min read",
    tags: ["Mobile Development", "App Development", "Technology", "Innovation"]
  },
  {
    id: 5,
    slug: "cybersecurity-best-practices-business",
    title: "Cybersecurity Best Practices Every Business Should Follow",
    author: "Grahams Keith",
    date: "2023-12-20",
    category: "Cybersecurity",
    imageUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    excerpt: "Protect your business from cyber threats with these essential cybersecurity practices. Learn how to safeguard your data, systems, and reputation in an increasingly digital world.",
    content: `
      <p>Cybersecurity threats are evolving constantly, making it crucial for businesses of all sizes to implement robust security measures. A single security breach can result in significant financial losses, damaged reputation, and legal consequences.</p>

      <h2>Understanding Common Threats</h2>
      <h3>Phishing Attacks</h3>
      <p>Cybercriminals use deceptive emails, messages, or websites to trick users into revealing sensitive information or installing malware.</p>

      <h3>Ransomware</h3>
      <p>Malicious software that encrypts business data and demands payment for its release. These attacks can completely shut down business operations.</p>

      <h3>Data Breaches</h3>
      <p>Unauthorized access to sensitive business or customer data, often resulting from weak passwords, unpatched software, or insider threats.</p>

      <h2>Essential Security Measures</h2>
      <h3>1. Strong Password Policies</h3>
      <ul>
        <li>Require complex passwords with a minimum of 12 characters</li>
        <li>Implement multi-factor authentication (MFA) for all accounts</li>
        <li>Use password managers to generate and store unique passwords</li>
        <li>Regular password updates and avoid password reuse</li>
      </ul>

      <h3>2. Regular Software Updates</h3>
      <p>Keep all software, operating systems, and applications up to date with the latest security patches. Enable automatic updates where possible.</p>

      <h3>3. Employee Training</h3>
      <p>Conduct regular cybersecurity awareness training to help employees identify and respond to potential threats. Human error is often the weakest link in security.</p>

      <h3>4. Data Backup and Recovery</h3>
      <p>Implement a comprehensive backup strategy with regular, automated backups stored in multiple locations. Test recovery procedures regularly.</p>

      <h3>5. Network Security</h3>
      <ul>
        <li>Use firewalls to monitor and control network traffic</li>
        <li>Implement VPNs for remote access</li>
        <li>Segment networks to limit potential damage from breaches</li>
        <li>Monitor network activity for suspicious behavior</li>
      </ul>

      <h2>Incident Response Planning</h2>
      <p>Develop and regularly update an incident response plan that outlines steps to take in case of a security breach. This should include communication protocols, containment procedures, and recovery steps.</p>

      <h2>Compliance and Regulations</h2>
      <p>Ensure your business complies with relevant data protection regulations such as GDPR, CCPA, or industry-specific requirements. Non-compliance can result in significant fines and legal issues.</p>

      <h2>Regular Security Assessments</h2>
      <p>Conduct regular security audits and vulnerability assessments to identify and address potential weaknesses in your systems and processes.</p>

      <p>At Chidebru Techs, our cybersecurity experts help businesses implement comprehensive security strategies tailored to their specific needs and risk profiles. Don't wait for a security incident to take action—protect your business today.</p>
    `,
    readTime: "9 min read",
    tags: ["Cybersecurity", "Business Security", "Data Protection", "Risk Management"]
  },
  {
    id: 6,
    slug: "content-marketing-strategy-guide",
    title: "Building an Effective Content Marketing Strategy",
    author: "Paul Makerere",
    date: "2023-12-15",
    category: "Content Marketing",
    imageUrl: "https://images.pexels.com/photos/7818111/pexels-photo-7818111.jpeg",
    excerpt: "Learn how to create and implement a content marketing strategy that engages your audience and drives business results. Discover the key elements of successful content marketing.",
    content: `
      <p>Content marketing has become one of the most effective ways to attract, engage, and retain customers. A well-executed content marketing strategy can establish your brand as an industry authority while driving meaningful business results.</p>

      <h2>Understanding Your Audience</h2>
      <p>Before creating any content, you must understand your target audience. Develop detailed buyer personas that include demographics, pain points, preferences, and content consumption habits.</p>

      <h3>Research Methods</h3>
      <ul>
        <li>Customer surveys and interviews</li>
        <li>Social media analytics</li>
        <li>Website analytics and user behavior data</li>
        <li>Competitor analysis</li>
      </ul>

      <h2>Content Types and Formats</h2>
      <h3>Blog Posts and Articles</h3>
      <p>Educational and informative content that addresses your audience's questions and challenges. Blog posts are excellent for SEO and establishing thought leadership.</p>

      <h3>Visual Content</h3>
      <p>Infographics, images, and videos are highly engaging and shareable. Visual content often performs better on social media platforms.</p>

      <h3>Interactive Content</h3>
      <p>Quizzes, polls, calculators, and interactive tools can increase engagement and provide valuable data about your audience.</p>

      <h2>Content Planning and Calendar</h2>
      <p>Develop a content calendar that outlines what content will be published when and where. This ensures consistency and helps align content with business objectives and seasonal trends.</p>

      <h3>Content Pillars</h3>
      <p>Organize your content around 3-5 main themes or pillars that align with your business goals and audience interests. This creates a cohesive content strategy.</p>

      <h2>SEO and Content Optimization</h2>
      <h3>Keyword Research</h3>
      <p>Identify relevant keywords and topics that your audience is searching for. Use tools like Google Keyword Planner, SEMrush, or Ahrefs for research.</p>

      <h3>On-Page Optimization</h3>
      <ul>
        <li>Optimize titles, headings, and meta descriptions</li>
        <li>Use keywords naturally throughout the content</li>
        <li>Include internal and external links</li>
        <li>Optimize images with alt text</li>
      </ul>

      <h2>Distribution and Promotion</h2>
      <p>Creating great content is only half the battle. You need a solid distribution strategy to ensure your content reaches your target audience.</p>

      <h3>Distribution Channels</h3>
      <ul>
        <li>Your website and blog</li>
        <li>Social media platforms</li>
        <li>Email newsletters</li>
        <li>Industry publications and guest posting</li>
        <li>Paid advertising and promotion</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track key metrics to measure the effectiveness of your content marketing efforts:</p>
      <ul>
        <li>Website traffic and engagement metrics</li>
        <li>Social media engagement and shares</li>
        <li>Lead generation and conversion rates</li>
        <li>Brand awareness and sentiment</li>
        <li>Return on investment (ROI)</li>
      </ul>

      <h2>Content Repurposing</h2>
      <p>Maximize the value of your content by repurposing it across different formats and channels. A single blog post can become a video, infographic, podcast episode, and social media posts.</p>

      <p>Our content marketing team at Chidebru Techs helps businesses develop and execute comprehensive content strategies that drive engagement, build authority, and generate leads. Let us help you tell your brand's story effectively.</p>
    `,
    readTime: "11 min read",
    tags: ["Content Marketing", "Digital Marketing", "SEO", "Brand Strategy"]
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentBlogPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getAllCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};