import React, { useState, useEffect } from 'react';

const SocialLinks = () => {
  const socialPlatforms = [
    { 
      name: 'GitHub', 
      icon: '🐙', 
      url: 'https://github.com/pp641', 
      color: 'hover:bg-gray-700',
      description: 'View my repositories'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://linkedin.com/in/prajjwal-pandey', 
      color: 'hover:bg-blue-600',
      description: 'Connect professionally'
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: 'https://twitter.com/itzpp2', 
      color: 'hover:bg-blue-400',
      description: 'Follow my updates'
    },
    { 
      name: 'Instagram', 
      icon: '📸', 
      url: 'https://instagram.com/_pp641_', 
      color: 'hover:bg-pink-500',
      description: 'See my journey'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {socialPlatforms.map((platform, index) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${platform.color} opacity-0 animate-fade-in-up`}
          style={{ animationDelay: `${index * 150 + 1000}ms` }}
        >
          <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
            {platform.icon}
          </div>
          <h4 className="font-bold text-white mb-1">{platform.name}</h4>
          <p className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300">
            {platform.description}
          </p>
          
          {/* Decorative corner */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      ))}
    </div>
  );
};

const Contact = () => {
  const [visibleElements, setVisibleElements] = useState([]);
  const [hoveredMethod, setHoveredMethod] = useState(null);

  useEffect(() => {
    // Animate elements in sequence
    const elements = ['header', 'description', 'methods', 'social', 'cta'];
    elements.forEach((element, index) => {
      setTimeout(() => {
        setVisibleElements(prev => [...prev, element]);
      }, index * 300);
    });
  }, []);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'prajjwalpandey641@gmail.com',
      action: 'mailto:prajjwal.pandey@example.com',
      description: 'Best way to reach me',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 7007882894',
      action: 'tel:+919876543210',
      description: 'For urgent matters',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Delhi, India',
      action: '#',
      description: 'Open to remote work',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💼',
      title: 'Availability',
      value: 'Open to Opportunities',
      action: '#',
      description: 'Ready for new challenges',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const quickActions = [
    {
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation',
      icon: '📞',
      action: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'View Portfolio',
      description: 'Explore my complete work',
      icon: '🎨',
      action: '#projects',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Download Resume',
      description: 'Get my latest CV',
      icon: '📄',
      action: '/prajjwal_latest_resume_sept.pdf',
      gradient: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${
          visibleElements.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <div className={`transition-all duration-800 delay-200 ${
            visibleElements.includes('description') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your ideas into powerful digital solutions? I'm here to help you build something extraordinary.
            </p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-800 delay-400 ${
          visibleElements.includes('methods') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              onMouseEnter={() => setHoveredMethod(index)}
              onMouseLeave={() => setHoveredMethod(null)}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`text-5xl mb-4 transition-all duration-300 ${
                  hoveredMethod === index ? 'scale-110 animate-bounce' : ''
                }`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-white font-medium mb-2">{method.value}</p>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {method.description}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r ${method.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm`}></div>
            </a>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-800 delay-600 ${
          visibleElements.includes('methods') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.action}
              target={action.action.startsWith('#') ? '_self' : '_blank'}
              rel={action.action.startsWith('#') ? '' : 'noopener noreferrer'}
              className={`group relative bg-gradient-to-r ${action.gradient} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
            >
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                <p className="text-white/80 text-sm">{action.description}</p>
              </div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Social Media Section */}
        <div className={`mb-16 transition-all duration-800 delay-800 ${
          visibleElements.includes('social') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Follow My Journey
          </h3>
          <SocialLinks />
        </div>

        {/* Main CTA */}
        <div className={`text-center mb-12 transition-all duration-800 delay-1000 ${
          visibleElements.includes('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:prajjwal.pandey@example.com"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Send Email</span>
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="/prajjwal_latest_resume_sept.pdf"
                download
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-full animate-pulse">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-green-300 font-semibold">Available for part time and freelance opportunities</span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a full-stack developer, need consultation on your project, 
            or just want to say hello - I'd love to hear from you. Let's build something incredible together! 🚀
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
        
        /* Backdrop blur support */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Contact;