import React, { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Prajjwal Pandey</h1>
        
        <div className="lg:hidden">
          <button
            onClick={toggleNav}
            className="text-white focus:outline-none"
          >
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        <nav className="hidden lg:flex lg:space-x-4">
          <a href="#projects" className="hover:text-gray-400 py-2 lg:py-0">Projects</a>
          <a href="#skills" className="hover:text-gray-400 py-2 lg:py-0">Skills</a>
          <a href="#contact" className="hover:text-gray-400 py-2 lg:py-0">Contact</a>
          <a
              href="/prajjwal_latest_resume_sept.pdf"
              download
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <FaDownload size={16} />
              <span>Download Resume</span>
            </a>
        </nav>        
        <div className={`fixed top-0 right-0 w-3/4 md:w-1/2 lg:hidden bg-gray-600 text-white p-4 transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-y-0' : '-translate-y-full'} shadow-lg`}>
          <button
            onClick={toggleNav}
            className="text-white mb-4"
          >
            <FaTimes size={24} />
          </button>
          <nav className="space-y-4">
            <a href="#projects" className="block hover:text-gray-400">Projects</a>
            <a href="#skills" className="block hover:text-gray-400">Skills</a>
            <a href="#contact" className="block hover:text-gray-400">Contact</a>
            <a
              href="/prajjwal_latest_resume_sept.pdf"
              download
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <FaDownload size={16} />
              <span>Download Resume</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
