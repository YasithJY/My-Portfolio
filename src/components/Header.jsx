// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full shadow-md z-10">
      <nav className="container mx-auto flex justify-center space-x-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
