import React, { useState, useEffect } from 'react';

const SocialLinks = () => {
  const socialPlatforms = [
    { name: 'GitHub', icon: '🐙', url: '#', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:text-blue-300' },
    { name: 'Email', icon: '📧', url: '#', color: 'hover:text-red-400' }
  ];

  return (
    <div className="flex space-x-6 mt-8">
      {socialPlatforms.map((platform, index) => (
        <a
          key={platform.name}
          href={platform.url}
          className={`text-3xl transition-all duration-300 transform hover:scale-125 ${platform.color} opacity-0 animate-fade-in-up`}
          style={{ animationDelay: `${index * 200 + 1000}ms` }}
          title={platform.name}
        >
          {platform.icon}
        </a>
      ))}
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['Full-Stack Developer', 'Problem Solver', 'Code Architect', 'Tech Enthusiast'];
  
  useEffect(() => {
    // Mouse move effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    // Typing animation
    const currentWord = words[currentWordIndex];
    let index = 0;
    
    const typeWord = () => {
      if (index <= currentWord.length) {
        setTypedText(currentWord.slice(0, index));
        index++;
        setTimeout(typeWord, 100);
      } else {
        setTimeout(() => {
          // Clear and move to next word
          let clearIndex = currentWord.length;
          const clearWord = () => {
            if (clearIndex >= 0) {
              setTypedText(currentWord.slice(0, clearIndex));
              clearIndex--;
              setTimeout(clearWord, 50);
            } else {
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
          };
          clearWord();
        }, 2000);
      }
    };
    
    typeWord();
  }, [currentWordIndex]);

  const services = [
    {
      title: 'Full-Stack Development',
      icon: '🔧',
      description: 'Expertise in building high-end web apps from scratch and productionizing them with the latest deployment methods.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      title: 'Performance Optimization',
      icon: '🚀',
      description: 'Enhancing application performance through efficient caching, code reusability, and refactoring techniques.',
      gradient: 'from-green-500 to-emerald-500',
      delay: 200
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Crafting user-friendly and visually appealing interfaces, making your apps presentable on all screens.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 400
    },
    {
      title: 'System Architecture',
      icon: '🛠️',
      description: 'Architecting efficient database schemas and implementing scalable design patterns for robust applications.',
      gradient: 'from-orange-500 to-red-500',
      delay: 600
    }
  ];

  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 py-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          ></div>
        ))}
        
        {/* Mouse Follow Gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Introduction */}
        <div className="mb-16">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-down">
              Prajjwal Pandey
            </h1>
            <div className="h-12 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-semibold text-gray-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '500ms' }}>
            Transforming ideas into powerful digital solutions with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
              4+ years of experience
            </span>{' '}
            in modern web technologies
          </p>

        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent opacity-0 animate-fade-in-down" style={{ animationDelay: '800ms' }}>
            What I Bring to the Table
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${service.delay + 1200}ms` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`text-5xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce`}>
                    {service.icon}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300 blur-sm`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-6 items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '2000ms' }}>
          <button
            onClick={handleViewWork}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>Explore My Work</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <a
            href="/prajjwal_latest_resume_sept.pdf"
            download
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center space-x-3">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '2500ms' }}>
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Gradient text animation */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
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
        
        /* Backdrop blur support */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
      `}</style>
    </section>
  );
};

export default Hero;