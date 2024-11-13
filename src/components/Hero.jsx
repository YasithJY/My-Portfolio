// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold animate-bounce">Hi, I'm Yasith_JY</h1>
      <p className="text-2xl mt-4 italic">Undergraduate at SLIIT | Information Technology Interactive Media</p>
      <a href="#projects" className="mt-6 text-blue-300 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110">See My Work</a>
    </section>
  );
}

export default Hero;
