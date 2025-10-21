import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, getRecentBlogPosts } from '../data/blogData';

const BlogPostDetail = () => {
  const { blogSlug } = useParams<{ blogSlug: string }>();
  
  const post = blogSlug ? getBlogPostBySlug(blogSlug) : undefined;
  const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== blogSlug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = post.title;

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
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white">{post.title}</span>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  to="/blog"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#02caf5] to-[#ce0aff] text-white font-semibold rounded-lg hover:from-[#0299c7] hover:to-[#a308cc] transition-all transform hover:scale-105"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back to Blog
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Info */}
                <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl p-6 border border-cyan-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#02caf5] to-[#ce0aff] rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-600">Content Writer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Expert in digital marketing and content strategy, helping businesses grow their online presence.
                  </p>
                </div>

                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Articles</h3>
                    <div className="space-y-4">
                      {recentPosts.map((recentPost) => (
                        <Link
                          key={recentPost.id}
                          to={`/blog/${recentPost.slug}`}
                          className="block group"
                        >
                          <div className="flex space-x-3">
                            <img
                              src={recentPost.imageUrl}
                              alt={recentPost.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#02caf5] transition-colors line-clamp-2">
                                {recentPost.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {formatDate(recentPost.date)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-br from-gray-900 via-cyan-900 to-purple-900 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Need Help?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready to implement these strategies for your business? Let's discuss your project.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;