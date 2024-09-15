  import React from 'react';
  import { FaHtml5, FaCss3Alt, FaJs, FaReact,  FaNodeJs, FaDocker, FaAws, FaDatabase, FaGitAlt } from 'react-icons/fa';
  import { SiNextdotjs, SiTypescript, SiRedis, SiPostman , SiJest ,SiRuby , SiRubyonrails , SiKubernetes, SiGooglecloud, SiTailwindcss, SiMongodb, SiGraphql, SiRedux, SiJquery, SiCplusplus, SiDatadog } from 'react-icons/si';
  import { GiBrain } from 'react-icons/gi'; 
  import { MdHome, MdFavorite   } from 'react-icons/md';

  const Skills = () => {
    const frontendSkills = [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      {name: 'Material UI' , icon : <MdHome/>}
    ];

    const backendDevelopmentSkills = [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <FaNodeJs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      {name  : 'Redis' , icon : <SiRedis/>},
      {name : 'Ruby' , icon : <SiRuby/>},
      {name : 'Ruby on Rails' , icon : <SiRubyonrails/>},

    ];

    const devOpsAndCloudSkills = [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Datadog', icon: <SiDatadog /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'GCP' , icon : <SiGooglecloud/>},
      {name : 'Kubernetes' , icon : <SiKubernetes/>},
      {name : 'Jest' , icon : <SiJest/>},
      {name : 'PostMan' , icon : <SiPostman/>}
    ];

    const coreFundamentalsSkills = [
      { name: 'Data Structures and Algorithms', icon: <GiBrain /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'STL', icon: <SiCplusplus /> },
      { name: 'System Design', icon: <GiBrain /> },
      { name: 'Software Design Patterns', icon: <GiBrain /> },
      { name: 'MVC Design', icon: <GiBrain /> },
      { name: 'OOPs', icon: <GiBrain /> }
    ];

    const renderSkill = (skill, index) => (
      <li
        key={index}
        className="bg-gray-700 px-6 mx-4 py-6 rounded-lg text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center "
      >
        <span className="text-1xl font-bold">{skill.name}</span>
        <div className="text-6xl ">{skill.icon}</div>
      </li>
    );

    return (
      <section id="skills" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Skills</h3>

          <div className="mb-12">
            <h4 className="text-3xl font-semibold text-center mb-8">Frontend</h4>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
              {frontendSkills.map((skill, index) => renderSkill(skill, index))}
            </ul>
          </div>

          <div className="mb-12">
            <h4 className="text-3xl font-semibold text-center mb-8">Backend </h4>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
              {backendDevelopmentSkills.map((skill, index) => renderSkill(skill, index))}
            </ul>
          </div>

          <div className="mb-12">
            <h4 className="text-3xl font-semibold text-center mb-8">DevOps /Cloud / Tools / Testing </h4>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
              {devOpsAndCloudSkills.map((skill, index) => renderSkill(skill, index))}
            </ul>
          </div>

          <div>
            <h4 className="text-3xl font-semibold text-center mb-8">Core Fundamentals</h4>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
              {coreFundamentalsSkills.map((skill, index) => renderSkill(skill, index))}
            </ul>
          </div>
        </div>
      </section>
    );
  };

  export default Skills;
