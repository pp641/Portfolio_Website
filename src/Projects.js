import React, { useState } from 'react';

const projects = {
   small : [
    {
      title: "Queue Visualizer",
      description: "A simple React application to visualize the operations of a queue data structure. It demonstrates enqueue, dequeue, and various queue operations with real-time visualization.",
      link : "https://react2-chi.vercel.app/",
      code : "https://github.com/pp641/React-Queue-Implementation"
    },
    {
      title: "COVID-19 Tracker",
      description: "A COVID-19 tracking application that shows statistics for all countries. Includes a search functionality to view COVID-19 stats countrywise and visualize data trends.",
      link : "https://react2-chi.vercel.app/",
      code : "https://github.com/pp641/React-Queue-Implementation"
    },
    {
      title: "English Football League Stats",
      description: "A React application that displays match details for each year of a famous English football league. Built using external APIs to fetch and present league data.",
      link : "https://english-premier-league-project.vercel.app/",
      code : "https://github.com/pp641/English-Premier-League-Project"
    },
    {
      title: "Hashing and Encryption Algorithms",
      description: "An app that showcases various hashing and encryption algorithms. Users can input text to see its encrypted form and vice versa. Includes different cipher texts and their corresponding original texts.",
      link : "https://crypto-algorithms.vercel.app/",
      code : "https://github.com/pp641/cryptoAlgorithms"
    },
  ],

  medium: [
    {   
        title: "Socket Apps", 
        description: "A set of applications built on top of P2P socket connections. This project includes multiple apps utilizing real-time communication via WebSocket connections.",
        details: [
          "A P2P file sharing system for sharing PDFs, images by creating separate groups.",
          "A collaborative text transfer system where users can share text in real time, with the option of text-to-speech conversion.",
          "A collaborative whiteboard where users can draw, erase, and reset the board with real-time progress visible to all participants."
        ],
        code: "https://github.com/pp641/FileSharing"  
    },
    {
      title: "Gfg Reader",
      description: "An application for scraping and reading Geeks for Geeks articles with additional query and sorting functionalities.",
      code: "https://github.com/pp641/gfgreader",
      link: "https://www.youtube.com/watch?v=ji47pU_pY1k",
      details: [
        "Full Stack Web Application to access 35,000+ GFG articles with query, search, and sort functionalities.",
        "Kaggle dataset of Geeks for Geeks used for article management.",
        "Web scraping implemented using cheerio npm package.",
        "User authentication via JWT with functionality to save favorite articles.",
        "Filter articles based on difficulty, author ID, and search queries."
      ]
    }
],

big: [
  {
    title: "Cricket Fantasy Website",
    description: "A cricket fantasy website that supports real-time updates and 1000 concurrent users.",
    code: "https://github.com/pp641/cricket247/",
    link: "http://cricket247online.com/login/",
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
    details: [
      "A web application where developers can post project ideas and become the project owner.",
      "Project owners can raise funding requests, and investors can invest in the ideas.",
      "Investors and project owners can chat directly through the platform.",
      "Dashboard for both project owners and investors to manage and view their projects and investments with filtering and sorting capabilities."
    ]
  }
]

};

const Projects = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <section id="projects" className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        <div className="mb-6 mx-2">
          <button
            onClick={() => toggleSection('small')}
            className="w-full text-left bg-blue-500 text-white py-3 px-4 rounded-lg shadow-lg font-semibold focus:outline-none"
          >
            Small Projects   
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
              activeSection === 'small' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {projects.small.map((project, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a href={project.link} className="text-blue-500 mt-2   inline-block">Link</a>
                  <a href={project.link} className="text-blue-500 mt-2 mx-5 inline-block">Code</a>
                </div>
              ))}
            </div>
          </div>
        </div>

<div className="mb-6 mx-2">
  <button
    onClick={() => toggleSection('medium')}
    className="w-full text-left bg-blue-500 text-white py-3 px-4 rounded-lg shadow-lg font-semibold focus:outline-none"
  >
    Medium Projects
  </button>
  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
      activeSection === 'medium' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <div className="p-4 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-6 mt-4">
      {projects.medium.map((project, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
          {project.details && (
            <ul className="text-gray-600 list-disc pl-6 mt-2">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}

         {project.link === undefined ?"" : <a href={project.link} className="text-blue-500 mt-2 px-2 inline-block">Link</a>} 
          <a href={project.code} className="text-blue-500 mt-2 mx-5 inline-block">Code</a>
        </div>
      ))}
    </div>
  </div>
</div>
<div className='mx-2'>
  <button
    onClick={() => toggleSection('big')}
    className="w-full text-left bg-blue-500 text-white py-3 px-4 rounded-lg shadow-lg font-semibold focus:outline-none"
  >
    Big Projects
  </button>
  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
      activeSection === 'big' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <div className="p-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6 mt-4">
      {projects.big.map((project, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
          {project.details && (
            <ul className="text-gray-600 list-disc list-inside mt-2">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}
          <div className="mt-4">
            {project.link && (
              <a href={project.link} className="text-blue-500 inline-block mr-4">View Project</a>
            )}
            {project.code && (
              <a href={project.code} className="text-blue-500 inline-block">Source Code</a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Projects;
