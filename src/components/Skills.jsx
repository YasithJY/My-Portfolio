// src/components/Skills.js
import React from 'react';
import { 
  FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaDatabase, FaGitAlt, FaWindows, FaMicrosoft, FaJs, FaServer, FaCuttlefish, FaAndroid, FaLeaf 
} from 'react-icons/fa';

// Define technical skills with icons
const technicalSkills = [
  { category: "Programming", skills: [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <FaCuttlefish /> }, // C and C++ don't have specific icons in Font Awesome; using FaCuttlefish as a close alternative
    { name: "C++", icon: <FaCuttlefish /> },
    { name: "Android Studio", icon: <FaAndroid /> }
  ]},
  { category: "Web Development", skills: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> }
  ]},
  { category: "Backend Development", skills: [
    { name: "PHP", icon: <FaPhp /> }
  ]},
  { category: "Server Management", skills: [
    { name: "VPS", icon: <FaServer /> }
  ]},
  { category: "Database Management", skills: [
    { name: "SQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <FaLeaf /> } // FaLeaf is a suitable alternative for MongoDB's leaf logo
  ]},
  { category: "Version Control", skills: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGitAlt /> }
  ]},
  { category: "Operating Systems", skills: [
    { name: "Windows", icon: <FaWindows /> }
  ]},
  { category: "Microsoft Office Suite", skills: [
    { name: "Microsoft 365", icon: <FaMicrosoft /> }
  ]}
];

// Define soft and other skills
const softOtherSkills = [
  { category: "Management Skills", skills: ["Time Management", "Negotiation", "Critical Thinking"] },
  { category: "Communication Skills", skills: ["Leadership", "Team Management"] },
  { category: "Gaming & Game Development", skills: [] },
  { category: "Computer Hardware and Software", skills: ["Installation", "Troubleshooting", "Maintenance"] },
  { category: "Photography & Videography", skills: ["Skilled in capturing and editing visual content"] }
];

function Skills() {
  return (
    <section id="skills" className="container mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Skills</h2>
      <div className="flex justify-center flex-wrap gap-12">
        {/* Technical Skills Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Technical Skills</h3>
          <ul className="text-left text-gray-700">
            {technicalSkills.map((category, index) => (
              <li key={index} className="mb-2">
                <h4 className="font-semibold">{category.category}</h4>
                <ul className="ml-4">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft & Other Skills Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Soft & Other Skills</h3>
          <ul className="text-left text-gray-700">
            {softOtherSkills.map((category, index) => (
              <li key={index} className="mb-2">
                <h4 className="font-semibold">{category.category}</h4>
                <ul className="ml-4">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
