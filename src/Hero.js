import React from "react";
import SocialLinks from "./Social_Links";
import "./index.css";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 py-10">
        <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-down">
          Hi, I'm Prajjwal Pandey
        </h2>
        <p className="mt-4 text-lg md:text-xl animate-fade-in-up">
          Offering around 4 years of experience on your table.
        </p>
        <SocialLinks />
        <section className="text-white py-10 md:py-20 flex flex-col justify-center items-center text-center w-full max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in-down">What I Can Offer</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 md:px-6">
            <div className="bg-gray-700 rounded-lg p-4 md:p-6 animate-fade-in-up shadow-lg transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
              <h3 className="text-lg md:text-xl font-semibold mb-2 transition-transform duration-300 hover:scale-110">
                🔧 Full-Stack Development
              </h3>
              <p className="text-sm md:text-base">
                Expertise in building high-end web apps from scratch and productionizing them with the latest deployment methods.
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 md:p-6 animate-fade-in-up shadow-lg transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
              <h3 className="text-lg md:text-xl font-semibold mb-2 transition-transform duration-300 hover:scale-110">
                🚀 Performance Optimization
              </h3>
              <p className="text-sm md:text-base">
                Enhancing application performance through efficient caching, code reusability, and refactoring techniques.
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 md:p-6 animate-fade-in-up shadow-lg transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
              <h3 className="text-lg md:text-xl font-semibold mb-2 transition-transform duration-300 hover:scale-110">
                🎨 UI/UX Design
              </h3>
              <p className="text-sm md:text-base">
                Crafting user-friendly and visually appealing interfaces, making your apps presentable on all screens (desktop/mobile/tablet).
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 md:p-6 animate-fade-in-up shadow-lg transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
              <h3 className="text-lg md:text-xl font-semibold mb-2 transition-transform duration-300 hover:scale-110">
                🛠️ Designing Systems
              </h3>
              <p className="text-sm md:text-base">
                Architecting efficient database schemas and implementing scalable design patterns (OOP, functional, MVC, microservice) for your apps.
              </p>
            </div>

            {/* Catchy Startup Venture Card */}
            <div className="bg-blue-600 rounded-lg p-4 md:p-6 animate-fade-in-up shadow-lg transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
              <h3 className="text-lg md:text-xl font-semibold mb-2 transition-transform duration-300 hover:scale-110 text-white">
                🌟 My Side Venture
              </h3>
              <p className="text-sm md:text-base text-white">
                I used to run a freelancing agency where I build apps for various clients as a freelancer.
              </p>
              <a
                href="https://steepnote.com/"  
                className="mt-4 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          View My Work
        </a>
      </section>
    </React.Fragment>
  );
};

export default Hero;
