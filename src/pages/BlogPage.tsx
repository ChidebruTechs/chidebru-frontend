import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, Search } from 'lucide-react';
import { blogPosts, getAllCategories } from '../data/blogData';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...getAllCategories()];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#02caf5]/20 to-[#ce0aff]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[#ce0aff]/20 to-[#02caf5]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-[#02caf5] to-[#ce0aff] bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay updated with the latest insights, trends, and best practices in digital technology, 
              web development, and business growth strategies.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02caf5] focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#02caf5] focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-900 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search terms or category filter.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-gray-600">
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-cyan-300"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#02caf5] transition-colors line-clamp-2">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 bg-cyan-50 text-[#02caf5] text-xs rounded-full border border-cyan-100"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-[#02caf5] font-semibold hover:text-[#0299c7] transition-colors group-hover:underline"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights and updates delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02caf5] focus:border-transparent"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;