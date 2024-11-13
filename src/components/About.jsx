// src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="container mx-auto py-20 text-center bg-gray-100">
      <h2 className="text-4xl font-bold text-blue-600 animate-fadeIn">About Me</h2>
      <p className="text-lg mt-4 text-gray-700 animate-slideIn">
        Information Technology Interactive Media undergraduate at SLIIT University, working towards a
        Bachelor of Science (Hons) with a focus on UI/UX design and digital media. Passionate about
        crafting user-centered experiences that blend creativity with technology, and driven by problem
        solving and continuous learning. Eager to build a career creating intuitive, engaging digital
        interfaces.
      </p>
      <div className="mt-8 animate-bounce">
        <img src="path/to/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 animate-pulse">
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default About;
