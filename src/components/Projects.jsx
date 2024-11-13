// src/components/Projects.js
import React from 'react';

const projects = [
  { name: "Project 1", description: "Description of project 1", link: "#" },
  { name: "Project 2", description: "Description of project 2", link: "#" },
];

function Projects() {
  return (
    <section id="projects" className="container mx-auto py-20 text-center bg-gray-100">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
