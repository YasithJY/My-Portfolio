// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4">Feel free to reach out via email or social media.</p>
      <div className="mt-4">
        <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a>
      </div>
    </section>
  );
}

export default Contact;
