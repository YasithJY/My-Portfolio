// src/components/Background.js
import React from 'react';

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden bg-gray-900">
      <ul className="relative w-full h-full list-none m-0 p-0">
        {/* Each li represents a floating circle with Tailwind classes for initial styling */}
        {Array.from({ length: 10 }).map((_, index) => (
          <li
            key={index}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: `${20 + index * 10}px`,
              height: `${20 + index * 10}px`,
              left: `${10 + index * 10}%`,
              bottom: '-150px',
              animation: `animateCircle ${20 + index * 5}s linear infinite`,
            }}
          ></li>
        ))}
      </ul>

      {/* Inline CSS for custom keyframe animation */}
      <style>
        {`
          @keyframes animateCircle {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Background;
