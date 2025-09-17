import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      skills: [
        { name: 'HTML5', level: 95, icon: '📄', description: 'Semantic markup & accessibility' },
        { name: 'CSS3', level: 90, icon: '🎨', description: 'Modern styling & animations' },
        { name: 'JavaScript', level: 92, icon: '⚡', description: 'ES6+ & async programming' },
        { name: 'React', level: 88, icon: '⚛️', description: 'Hooks, Context & performance' },
        { name: 'Next.js', level: 85, icon: '▲', description: 'SSR, SSG & optimization' },
        { name: 'Tailwind CSS', level: 90, icon: '💨', description: 'Utility-first styling' },
        { name: 'TypeScript', level: 80, icon: '📘', description: 'Type-safe development' },
        { name: 'Material UI', level: 85, icon: '🎯', description: 'Component libraries' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢', description: 'Server-side JavaScript' },
        { name: 'Express.js', level: 88, icon: '🚀', description: 'RESTful API development' },
        { name: 'MongoDB', level: 85, icon: '🍃', description: 'NoSQL database design' },
        { name: 'SQL', level: 82, icon: '🗄️', description: 'Relational database management' },
        { name: 'GraphQL', level: 75, icon: '📊', description: 'Query language & APIs' },
        { name: 'Redis', level: 80, icon: '🔴', description: 'Caching & session management' },
        { name: 'Ruby on Rails', level: 75, icon: '🛤️', description: 'MVC web framework' },
        {name : 'Golang' , level: 70, icon: '🐹', description: 'Concurrent programming' }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: '☁️',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      skills: [
        { name: 'Git', level: 90, icon: '📝', description: 'Version control & collaboration' },
        { name: 'Docker', level: 85, icon: '🐳', description: 'Containerization & deployment' },
        { name: 'Datadog', level: 80, icon: '📈', description: 'Monitoring & observability' },
        { name: 'AWS', level: 82, icon: '☁️', description: 'Cloud infrastructure' },
        { name: 'GCP', level: 75, icon: '🌐', description: 'Google Cloud Platform' },
        { name: 'Azure', level: 40, icon: '🎡', description: 'Container orchestration' },
        { name: 'Jest', level: 85, icon: '🧪', description: 'JavaScript testing framework' },
        { name: 'Postman', level: 88, icon: '📮', description: 'API testing & documentation' }
      ]
    },
    fundamentals: {
      title: 'Core Fundamentals',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      skills: [
        { name: 'Data Structures', level: 90, icon: '🏗️', description: 'Arrays, trees, graphs & more' },
        { name: 'Algorithms', level: 88, icon: '🔍', description: 'Sorting, searching & optimization' },
        { name: 'C++', level: 85, icon: '⚡', description: 'Low-level programming' },
        { name: 'STL', level: 82, icon: '📚', description: 'Standard Template Library' },
        { name: 'System Design', level: 80, icon: '🏛️', description: 'Scalable architecture' },
        { name: 'Design Patterns', level: 78, icon: '🎭', description: 'Reusable solutions' },
        { name: 'MVC Design', level: 85, icon: '📐', description: 'Model-View-Controller' },
        { name: 'OOPs', level: 88, icon: '🧩', description: 'Object-oriented principles' }
      ]
    }
  };

  useEffect(() => {
    setVisibleSkills([]);
    const skills = skillCategories[activeCategory].skills;
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, index]);
      }, index * 100);
    });
  }, [activeCategory]);

  const renderSkill = (skill, index) => {
    const isVisible = visibleSkills.includes(index);
    const isHovered = hoveredSkill === index;
    const category = skillCategories[activeCategory];
    
    return (
      <div
        key={index}
        className={`relative group cursor-pointer transition-all duration-500 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        onMouseEnter={() => setHoveredSkill(index)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
          isHovered ? 'scale-105 -translate-y-2' : ''
        }`}>
          {/* Background Gradient on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-5' : ''
          }`}></div>
          
          {/* Skill Icon */}
          <div className={`text-4xl mb-4 transition-all duration-300 ${
            isHovered ? 'scale-110 animate-bounce' : ''
          }`}>
            {skill.icon}
          </div>
          
          {/* Skill Name */}
          <h4 className={`text-lg font-bold mb-2 transition-all duration-300 ${
            isHovered 
              ? `text-transparent bg-gradient-to-r ${category.color} bg-clip-text` 
              : 'text-gray-800'
          }`}>
            {skill.name}
          </h4>
          
          {/* Skill Description */}
          <p className="text-sm text-gray-600 mb-4 h-10">
            {skill.description}
          </p>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100}ms`
                }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-gray-500">{skill.level}%</span>
          </div>
          
          {/* Decorative Corner */}
          <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20 transition-all duration-300 bg-gradient-to-r ${category.color} ${
            isHovered ? 'scale-150 opacity-40' : ''
          }`}></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and time-tested fundamentals
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-16 gap-4">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 group ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.title}</span>
              {activeCategory === key && (
                <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`${skillCategories[activeCategory].bgColor} rounded-3xl p-8 shadow-2xl`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => 
              renderSkill(skill, index)
            )}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "25+", label: "Technologies", icon: "🛠️" },
            { number: "4", label: "Skill Categories", icon: "📚" },
            { number: "4+", label: "Years Experience", icon: "⏱️" },
            { number: "85%", label: "Average Proficiency", icon: "🎯" }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up border border-white/20`}
              style={{ animationDelay: `${index * 200 + 2000}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h5 className="text-lg font-semibold mb-4 text-center text-gray-200">Proficiency Scale</h5>
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                <span className="text-gray-300">60-70% Beginner</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <span className="text-gray-300">70-80% Intermediate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                <span className="text-gray-300">80-90% Advanced</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300">90%+ Expert</span>
              </div>
            </div>
          </div>
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
        
        /* Custom gradient animations */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;