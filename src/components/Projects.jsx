// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    { name: "Project 1", description: "A brief description of project 1.", link: "#" },
    { name: "Project 2", description: "A brief description of project 2.", link: "#" },
  ];

  return (
    <section id="projects" className="container mx-auto py-20 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
