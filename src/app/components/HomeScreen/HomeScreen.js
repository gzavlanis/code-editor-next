"use client";

import React from 'react';
import { CodeSquare } from 'lucide-react'; // Importing a suitable icon for coding

const HomeScreen = ({ theme }) => {
  // Dynamic classes for home screen elements based on the current theme
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const iconColor = theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
  const titleColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';

  return (
    // The home screen content will take up the full height and width of its parent container
    <div className={`flex flex-col items-center justify-center h-full w-full p-8 ${textColor}`}>
      {/* Big coding icon */}
      <CodeSquare className={`w-40 h-40 mb-6 ${iconColor}`} />

      {/* Title for the application */}
      <h2 className={`text-5xl font-extrabold mb-4 text-center ${titleColor}`}>
        Welcome to your Code Editor
      </h2>

      {/* Small descriptive text */}
      <p className="text-lg text-center max-w-2xl">
        Start writing, editing, and running code in a professional environment.
        Select a language from the sidebar to begin!
      </p>
    </div>
  );
};

export default HomeScreen;
