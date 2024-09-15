import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaStackOverflow,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Projects from "./Projects";
import SocialLinks from "./Social_Links";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-bold">Hi, I'm Prajjwal Pandey</h2>
        <p className="mt-4 text-xl">
        Elevating software performance, aligning dev and ops, and crafting user-friendly sites.
        </p>
        <SocialLinks/>
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
