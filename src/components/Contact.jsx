// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-700">Feel free to reach out via email or connect on social media.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-2xl text-gray-800 hover:text-blue-500"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-2xl text-gray-800 hover:text-blue-500"></i>
        </a>
        <a href="mailto:youremail@example.com">
          <i className="fas fa-envelope text-2xl text-gray-800 hover:text-blue-500"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
