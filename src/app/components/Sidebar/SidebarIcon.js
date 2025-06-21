"use client"; // Added this directive

import React, { useState } from 'react';

// SidebarIcon component for reusability and tooltips
const SidebarIcon = ({ icon: Icon, tooltip, onClick, isActive }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Dynamic classes for sidebar icons based on theme and active state
  // Tailwind's dark mode utility classes handle the dark theme variations
  const iconColor = "text-gray-400 dark:text-gray-300";
  const hoverBg = "hover:bg-gray-600 dark:hover:bg-gray-700";
  const activeBg = isActive ? "bg-blue-600 text-white" : "";

  return (
    <div className="relative group flex items-center justify-center p-2">
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-200 ${iconColor} ${hoverBg} ${activeBg} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        aria-label={tooltip}
      >
        {Icon && <Icon className="h-6 w-6" />}
      </button>
      {showTooltip && (
        // Tooltip styling, also adapting to dark mode
        <div className="absolute left-full ml-3 px-3 py-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 text-sm rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default SidebarIcon;
