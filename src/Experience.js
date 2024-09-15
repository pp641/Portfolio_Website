import React from 'react';

const experiences = [
  {
    role: "Remote Full Stack Freelance",
    date: "Feb 2024 – Present",
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
      "Delivered the Epic: ITIL Module Information Flow – Implemented Multi Associations in Ticket/Change/Problem Modules of Freshservice, ensuring data consistency of the Central Payload. Active customers of this feature include McDonald’s, Indigo, Webhelp.",
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
      "Worked on the backend of Fintech Application MortgageKart using Node.js, MongoDB.",
      "Created various REST APIs and Unit Tested them for production-ready code.",
      "Performed code optimization, reduced redundancy, refactored code, and improved overall performance of microservices.",
      "Integrated logger functionality using Datadog in all microservices.",
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
      "Built features for Progressive Web Apps using IndexedDB storage.",
      "Tech stack: React, Redux, Material-UI, Postman.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="grid lg:grid-cols-2 gap-8 px-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {exp.role} <span className="text-gray-500">({exp.tenure})</span>
              </h3>
              <p className="text-gray-600 mb-2">{exp.date}</p>
              <h4 className="text-xl font-medium mb-2">{exp.title}</h4>
              <p className="text-gray-500 mb-4">{exp.location}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
