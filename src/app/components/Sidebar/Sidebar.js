"use client"; // This directive marks the component as a Client Component

import React, { useState } from 'react';
import { Sun, Moon, Files, Search, GitFork, Puzzle, Settings } from 'lucide-react'; // Keep Lucide icons for general actions
import { SiJavascript, SiPython, SiHtml5, SiCss3, SiCsharp, SiJson, SiC } from 'react-icons/si'; // Import SiC for the C language icon
import SidebarIcon from './SidebarIcon.js'; // Explicitly specifying .js extension for resolution
import { useRouter, usePathname } from 'next/navigation'; // Corrected import statement

// Sidebar component
const Sidebar = ({ theme, toggleTheme, currentLanguage, onLanguageChange }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  // Dynamic Tailwind classes for the sidebar itself
  const sidebarBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200';
  const sidebarBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

  // Function to handle sidebar icon clicks for navigation (for main tabs)
  const handleNavigation = (path) => {
    router.push(path);
  };

  // Function to handle language icon clicks
  const handleLanguageClick = (lang) => {
    onLanguageChange(lang);
  };

  return (
    <div className={`w-16 ${sidebarBg} border-r ${sidebarBorder} flex flex-col items-center py-4 relative z-10 shadow-lg`}>
      {/* Top section of sidebar icons (Main Tabs) */}
      <div className="flex flex-col space-y-4 flex-grow">
        <SidebarIcon
          icon={Files}
          tooltip="Explorer"
          onClick={() => handleNavigation('/')} // Navigate to root for Files/Explorer
          isActive={pathname === '/'}
        />
        <SidebarIcon
          icon={Search}
          tooltip="Search"
          onClick={() => handleNavigation('/search')} // Navigate to /search
          isActive={pathname === '/search'}
        />
        <SidebarIcon
          icon={GitFork}
          tooltip="Source Control"
          onClick={() => handleNavigation('/source-control')} // Navigate to /source-control
          isActive={pathname === '/source-control'}
        />
        <SidebarIcon
          icon={Puzzle}
          tooltip="Extensions"
          onClick={() => handleNavigation('/extensions')} // Navigate to /extensions
          isActive={pathname === '/extensions'}
        />
      </div>

      {/* Language Selection Icons (New Section) */}
      <div className="flex flex-col space-y-4 mt-8 mb-4 border-t border-b border-gray-600 dark:border-gray-400 py-4">
        <SidebarIcon
          icon={SiJavascript} // JavaScript logo
          tooltip="JavaScript"
          onClick={() => handleLanguageClick('javascript')}
          isActive={currentLanguage === 'javascript'}
        />
        <SidebarIcon
          icon={SiPython} // Python logo
          tooltip="Python"
          onClick={() => handleLanguageClick('python')}
          isActive={currentLanguage === 'python'}
        />
        <SidebarIcon
          icon={SiHtml5} // HTML5 logo
          tooltip="HTML"
          onClick={() => handleLanguageClick('html')}
          isActive={currentLanguage === 'html'}
        />
        <SidebarIcon
          icon={SiCss3} // CSS3 logo
          tooltip="CSS"
          onClick={() => handleLanguageClick('css')}
          isActive={currentLanguage === 'css'}
        />
        <SidebarIcon
          icon={SiC} // Using SiC for a simpler 'C' icon
          tooltip="C#" // Keeping tooltip as "C#" for clarity
          onClick={() => handleLanguageClick('csharp')}
          isActive={currentLanguage === 'csharp'}
        />
        <SidebarIcon
          icon={SiJson} // JSON logo
          tooltip="JSON"
          onClick={() => handleLanguageClick('json')}
          isActive={currentLanguage === 'json'}
        />
      </div>

      {/* Bottom section of sidebar icons (e.g., Settings) */}
      <div className="flex flex-col space-y-4 mb-4">
        <SidebarIcon
          icon={Settings}
          tooltip="Settings"
          onClick={() => handleNavigation('/settings')} // Navigate to /settings
          isActive={pathname === '/settings'}
        />
      </div>

      {/* Theme Toggle Button - moved inside sidebar, bottom right */}
      <button
        onClick={toggleTheme}
        className="absolute bottom-4 right-2 p-2 rounded-full bg-gray-600 text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5" /> // Moon icon for dark mode
        ) : (
          <Sun className="h-5 w-5" /> // Sun icon for light mode
        )}
      </button>
    </div>
  );
};

export default Sidebar;
