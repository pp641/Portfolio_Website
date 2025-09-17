import React, { useState, useEffect } from 'react';

const projects = {
  small: {
    title: "Learning & Exploration",
    icon: "🎯",
    color: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    projects: [
      {
        title: "Queue Visualizer",
        description: "A simple React application to visualize the operations of a queue data structure. It demonstrates enqueue, dequeue, and various queue operations with real-time visualization.",
        link: "https://react2-chi.vercel.app/",
        code: "https://github.com/pp641/React-Queue-Implementation",
        tech: ["React", "CSS3", "Data Structures"],
        complexity: "Beginner"
      },
      {
        title: "COVID-19 Tracker",
        description: "A COVID-19 tracking application that shows statistics for all countries. Includes a search functionality to view COVID-19 stats countrywise and visualize data trends.",
        link: "https://react2-chi.vercel.app/",
        code: "https://github.com/pp641/React-Queue-Implementation",
        tech: ["React", "APIs", "Data Visualization"],
        complexity: "Beginner"
      },
      {
        title: "English Football League Stats",
        description: "A React application that displays match details for each year of a famous English football league. Built using external APIs to fetch and present league data.",
        link: "https://english-premier-league-project.vercel.app/",
        code: "https://github.com/pp641/English-Premier-League-Project",
        tech: ["React", "REST APIs", "Sports Data"],
        complexity: "Intermediate"
      },
      {
        title: "Hashing and Encryption Algorithms",
        description: "An app that showcases various hashing and encryption algorithms. Users can input text to see its encrypted form and vice versa. Includes different cipher texts and their corresponding original texts.",
        link: "https://crypto-algorithms.vercel.app/",
        code: "https://github.com/pp641/cryptoAlgorithms",
        tech: ["Cryptography", "Algorithms", "Security"],
        complexity: "Intermediate"
      }
    ]
  },
  medium: {
    title: "Advanced Applications",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    projects: [
      {
        title: "Socket Apps",
        description: "A set of applications built on top of P2P socket connections. This project includes multiple apps utilizing real-time communication via WebSocket connections.",
        code: "https://github.com/pp641/FileSharing",
        tech: ["WebSockets", "P2P", "Real-time", "File Sharing"],
        complexity: "Advanced",
        details: [
          "A P2P file sharing system for sharing PDFs, images by creating separate groups.",
          "A collaborative text transfer system where users can share text in real time, with the option of text-to-speech conversion.",
          "A collaborative whiteboard where users can draw, erase, and reset the board with real-time progress visible to all participants."
        ]
      },
      {
        title: "GFG Reader",
        description: "An application for scraping and reading Geeks for Geeks articles with additional query and sorting functionalities.",
        code: "https://github.com/pp641/gfgreader",
        link: "https://www.youtube.com/watch?v=ji47pU_pY1k",
        tech: ["Web Scraping", "Full Stack", "JWT", "Database"],
        complexity: "Advanced",
        details: [
          "Full Stack Web Application to access 35,000+ GFG articles with query, search, and sort functionalities.",
          "Kaggle dataset of Geeks for Geeks used for article management.",
          "Web scraping implemented using cheerio npm package.",
          "User authentication via JWT with functionality to save favorite articles.",
          "Filter articles based on difficulty, author ID, and search queries."
        ]
      }
    ]
  },
  big: {
    title: "Production Systems",
    icon: "🚀",
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    projects: [
      {
        title: "Cricket Fantasy Website",
        description: "A cricket fantasy website that supports real-time updates and 1000 concurrent users.",
        code: "https://github.com/pp641/cricket247/",
        link: "http://cricket247online.com/login/",
        tech: ["WebSockets", "Docker", "CI/CD", "Performance", "Nginx"],
        complexity: "Production",
        details: [
          "Working on performance improvement to support 1000 users concurrently.",
          "Reduced data loading via WebSockets and optimized redundant API calls using parallel processing.",
          "Implemented automatic score updates and fantasy market adjustments.",
          "Optimized live scorecard APIs by reducing short polling time and replacing it with WebSocket connections for real-time scores.",
          "Set up the full codebase on a remote server, Dockerized the application, and created CI/CD pipelines using GitHub Actions with automated workflows.",
          "Improved frontend loading time by caching static assets over Nginx and a CDN for faster performance."
        ]
      },
      {
        title: "Investor Connect",
        description: "An application for developers to showcase their ideas and connect with investors.",
        code: "https://github.com/pp641/Crowdfunding",
        tech: ["Full Stack", "Real-time Chat", "Dashboard", "Investment"],
        complexity: "Production",
        details: [
          "A web application where developers can post project ideas and become the project owner.",
          "Project owners can raise funding requests, and investors can invest in the ideas.",
          "Investors and project owners can chat directly through the platform.",
          "Dashboard for both project owners and investors to manage and view their projects and investments with filtering and sorting capabilities."
        ]
      }
    ]
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('small');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    setVisibleProjects([]);
    const categoryProjects = projects[activeCategory].projects;
    categoryProjects.forEach((_, index) => {
      setTimeout(() => {
        setVisibleProjects(prev => [...prev, index]);
      }, index * 150);
    });
  }, [activeCategory]);

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Production': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderProject = (project, index) => {
    const isVisible = visibleProjects.includes(index);
    const isExpanded = expandedProject === `${activeCategory}-${index}`;
    const category = projects[activeCategory];

    return (
      <div
        key={index}
        className={`relative group transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-gray-200">
          {/* Project Header */}
          <div className={`relative p-6 bg-gradient-to-r ${category.color} text-white`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getComplexityColor(project.complexity)} bg-white`}>
                  {project.complexity}
                </span>
              </div>
              <p className="text-white/90 leading-relaxed">{project.description}</p>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Tech Stack */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white shadow-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details (Expandable) */}
            {project.details && (
              <div className="mb-4">
                <button
                  onClick={() => setExpandedProject(isExpanded ? null : `${activeCategory}-${index}`)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-3"
                >
                  <span className="font-medium">Project Details</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gradient-to-b from-blue-500 to-purple-500">
                    <ul className="space-y-2">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${category.color} flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-sm font-medium border"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-green-500/5 to-blue-500/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning from learning experiments to production-ready applications
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(projects).map(([key, category]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center space-x-3 group overflow-hidden ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:scale-105 hover:shadow-xl'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <div className="flex flex-col items-start">
                  <span className="text-lg">{category.title}</span>
                  <span className="text-xs opacity-75">
                    {category.projects.length} project{category.projects.length !== 1 ? 's' : ''}
                  </span>
                </div>
                {isActive && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects[activeCategory].projects.map((project, index) => 
            renderProject(project, index)
          )}
        </div>

        {/* Category Summary */}
        <div className="mt-16 text-center">
          <div className={`inline-block px-8 py-4 bg-gradient-to-r ${projects[activeCategory].bgGradient} rounded-2xl border border-gray-200 shadow-lg`}>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-3xl">{projects[activeCategory].icon}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{projects[activeCategory].title}</h3>
                <p className="text-gray-600">
                  {projects[activeCategory].projects.length} innovative solution{projects[activeCategory].projects.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: `${Object.values(projects).reduce((acc, cat) => acc + cat.projects.length, 0)}`, label: 'Total Projects', icon: '📊' },
            { number: '3', label: 'Categories', icon: '📁' },
            { number: '1000+', label: 'Concurrent Users', icon: '👥' },
            { number: '4+', label: 'Years Building', icon: '⏱️' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100 + 2000}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Enhanced hover effects */
        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }
        
        /* Custom gradient borders */
        .border-gradient {
          border-image: linear-gradient(45deg, #3b82f6, #8b5cf6) 1;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Projects;