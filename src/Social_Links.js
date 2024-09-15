import { FaLinkedin, FaGithub, FaTwitter, FaStackOverflow, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
  return (
    <div className="mt-8 space-x-6 flex">
      <div className="relative group">
        <a
          href="https://www.linkedin.com/in/prajjwal-pandey-518a22172/"
          aria-label="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaLinkedin size={32} />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-auto px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          LinkedIn
        </span>
      </div>

      <div className="relative group">
        <a
          href="https://github.com/pp641"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400"
        >
          <FaGithub size={32} />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-auto px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Github
        </span>
      </div>

      <div className="relative group">
        <a
          href="https://leetcode.com/u/prajjwalpandey641/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-400"
        >
          <SiLeetcode size={32} />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-auto px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Leetcode
        </span>
      </div>

      <div className="relative group">
        <a
          href="https://stackoverflow.com/users/13804009/prajjwal-pandey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-400"
        >
          <FaStackOverflow size={32} />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-auto px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          StackOverFlow
        </span>
      </div>

      <div className="relative group">
        <a
          href="https://x.com/Itzpp2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          <FaTwitter size={32} />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-auto px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Twitter
        </span>
      </div>

      <div className="relative group">
        <a
          href="mailto:example@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaEnvelope size={32} />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-auto px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          prajjwalpandey641@gmail.com
        </span>
      </div>
    </div>
  );
};

export default SocialLinks;
