import React, { useState, useEffect } from 'react';


const experiences = [
  {
    role: "Netmeldr",
    date: "Sept 2024 – Present",
    tenure: "12 months",
    title: "Senior Software Engineer",
    responsibilities: [
      "Worked as Founding Senior Engineer for Building the various Networking tools platform from scratch.",
      "Build the core features for Networking iot Device Netprobe which involves metrics collection, data visualization, alerting, and reporting.",
      "Build the alerting microservice in golang from scratch which invoved sending metrics from thousands of devices to users concurrently via email , web app using server side events(SSE) and webhooks.",
      "Build some core features for networking ticket management system - netwizard ",
      "Worked on Iot Device Management,Setup,Planning, Integration , Research etc. ",
      "Led the various tech tasks and mentored the Juinor Engineers for the same. Doing API/HLD/LLD documentation and design discussions.",
    ],
    location: "Noida , Hybrid",
  } 
  ,
  {
    role: "Remote Full Stack Freelance",
    date: "Feb 2024 – Sept 2024",
    tenure: "6 months",
    title: "Full Stack Developer- Contract",
    location: "Delhi , Remote",
    responsibilities: [
      "Working for the performance improvement of a cricket fantasy website which is being used by 1000 users concurrently.",
      "Reduced the data real-time loading via websockets. Optimized various redundant API calls by parallel processing. Worked on Automatic Updation of scores and fantasy market updation.",
      "Optimized live scorecard APIs by reducing the short polling time of the real-time scores of the fantasy market by replacing it with websockets.",
      "Set up the full codebase on a remote server, dockerized the application, and created CI-CD pipelines using GitHub actions and automation workflow.",
      "Improved the loading time of the frontend by caching the static assets over Nginx and CDN.",
    ],
  },
  {
    role: "Freshworks (Nasdaq based Saas Firm)",
    date: "July 2022 – Feb 2024",
    tenure: "20 months",
    title: "Software Development Engineer",
    location: "Chennai , Tamilnadu",
    responsibilities: [
      "Backend Engineer in the Platform Service squad of Freshservice (core Product of Freshworks, serving 63k+ worldwide customers).",
      "Handled 60+ real-time customer support tickets across various critical areas such as Analytics, Data Migration, Caching, Search Service, Sandbox, Dashboard, maintaining a stellar 95 percent on-time resolution rate.",
      "Worked on  ITIL Module Information Flow – Implemented Multi Associations in Ticket/Change/Problem Modules of Freshservice, ensuring data consistency of the Central Payload. Active customers of this feature include McDonald's, Indigo, Webhelp.",
      "Developed the Hard Deletion feature for Ticket Archival, reducing server load by 90% for tickets older than 6 months.",
      "Integrated Ticket Archival in Freshservice Mobile APIs and wrote over 50 RSpec automation cases, improving code coverage by 85%.",
    ],
  },
  {
    role: "MortgageKart (UK based Fintech Startup)",
    date: "Aug 2021 – June 2022",
    tenure: "11 months",
    title: "Software Development Engineer",
    location: "Pune , Maharashtra",
    responsibilities: [
      "Created various REST APIs and Unit Tested them for production-ready code , Performed code optimization, reduced redundancy, refactored code, and improved overall performance of microservices.",
      "Tech stack: JavaScript, Node.js, MongoDB, Postman, Robo3T, Datadog, Docker.",
    ],
  },
  {
    role: "ADVENIO TECHNOSYS (Healthcare Startup)",
    date: "Feb 2021 – July 2021",
    tenure: "6 months",
    title: "Software Development Engineer Intern",
    location: "Chandigarh , Remote",
    responsibilities: [
      "Worked on the HealthCare Application Telemed and built new features using React, Redux, JavaScript, CSS, Material-UI.",
      "Tech stack: React, Redux, Material-UI, Postman.",
    ],
  },
];
const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Animate cards in sequence
    experiences.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section id="experience" className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A timeline of growth, innovation, and impactful contributions across diverse technology domains
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 h-full rounded-full shadow-lg">
            <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full -left-1.5 shadow-lg animate-pulse"></div>
          </div>
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`relative flex items-center mb-16 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Timeline Node */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-300 ${
                  isHovered 
                    ? 'bg-yellow-400 scale-125' 
                    : index === 0 
                      ? 'bg-green-500' 
                      : index === 1 
                        ? 'bg-blue-500' 
                        : index === 2 
                          ? 'bg-purple-500' 
                          : 'bg-indigo-500'
                }`}>
                  {/* Pulse animation for current role */}
                  {index === 0 && (
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                  )}
                </div>
                
                {/* Experience Card */}
                <div className={`w-5/12 ${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 ease-out ${
                    isHovered 
                      ? 'shadow-2xl scale-105 bg-gradient-to-br from-white to-blue-50' 
                      : 'hover:shadow-xl'
                  }`}>
                    {/* Connection Arrow */}
                    <div className={`absolute top-8 w-0 h-0 transition-all duration-300 ${
                      isEven 
                        ? 'right-0 border-l-[20px] border-l-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent' 
                        : 'left-0 border-r-[20px] border-r-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent'
                    } ${isHovered ? 'scale-110' : ''}`}></div>
                    
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                          index === 0 
                            ? 'bg-green-100 text-green-800' 
                            : index === 1 
                              ? 'bg-blue-100 text-blue-800' 
                              : index === 2 
                                ? 'bg-purple-100 text-purple-800' 
                                : 'bg-indigo-100 text-indigo-800'
                        } ${isHovered ? 'scale-105' : ''}`}>
                          {exp.tenure}
                        </span>
                        {index === 0 && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                        isHovered 
                          ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text' 
                          : 'text-gray-800'
                      }`}>
                        {exp.role}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-gray-700 mb-1">
                        {exp.title}
                      </h4>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>📍 {exp.location}</span>
                        <span>📅 {exp.date}</span>
                      </div>
                    </div>
                    
                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {exp?.responsibilities?.map((responsibility, i) => (
                        <div
                          key={i}
                          className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${
                            isHovered 
                              ? 'bg-blue-50 transform translate-x-1' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                            index === 0 
                              ? 'bg-green-400' 
                              : index === 1 
                                ? 'bg-blue-400' 
                                : index === 2 
                                  ? 'bg-purple-400' 
                                  : 'bg-indigo-400'
                          } ${isHovered ? 'scale-150' : ''}`}></div>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20 transition-all duration-500 ${
                      index === 0 
                        ? 'bg-green-400' 
                        : index === 1 
                          ? 'bg-blue-400' 
                          : index === 2 
                            ? 'bg-purple-400' 
                            : 'bg-indigo-400'
                    } ${isHovered ? 'scale-150 opacity-30' : ''}`}></div>
                  </div>
                </div>
                
                {/* Connection Line to Next Node */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-24 w-0.5 h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-60"></div>
                )}
              </div>
            );
          })}
          
          {/* End Node */}
          <div className="relative flex justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "3+", label: "Years Experience", color: "blue" },
            { number: "4", label: "Companies", color: "green" },
            { number: "60+", label: "Support Tickets", color: "purple" },
            { number: "95%", label: "On-time Resolution", color: "indigo" }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100 + 1000}ms` }}
            >
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${
                stat.color === 'blue' 
                  ? 'from-blue-500 to-blue-600' 
                  : stat.color === 'green'
                    ? 'from-green-500 to-green-600'
                    : stat.color === 'purple'
                      ? 'from-purple-500 to-purple-600'
                      : 'from-indigo-500 to-indigo-600'
              } bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </section>
  );
};

export default Experience;