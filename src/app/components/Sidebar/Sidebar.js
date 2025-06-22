"use client"; // This directive marks the component as a Client Component

import React from "react";
import { Home, Search, GitFork, Puzzle } from "lucide-react"; // Keep Lucide icons for general actions
import { SiJavascript, SiPython, SiHtml5, SiJson, SiC } from "react-icons/si"; // Import SiC for the C language icon
import SidebarIcon from "./SidebarIcon.js"; // Explicitly specifying .js extension for resolution
import { useRouter, usePathname } from "next/navigation"; // Corrected import statement

// Sidebar component
const Sidebar = ({ theme, currentLanguage, onLanguageChange, onSearchClick }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Dynamic Tailwind classes for the sidebar itself
  const sidebarBg = theme === "dark" ? "bg-gray-900" : "bg-gray-200";
  const sidebarBorder = theme === "dark" ? "border-gray-700" : "border-gray-300";

  // Function to handle sidebar icon clicks for navigation (for main tabs)
  const handleNavigation = (path) => {
    if (path === "/") {
      onLanguageChange(null);
    } else {
      onLanguageChange(null);
    }
    router.push(path);
  };

  // Function to handle language icon clicks
  const handleLanguageClick = (lang) => {
    onLanguageChange(lang);
    router.push("/");
  };

  return (
    <div className={`w-12 ${sidebarBg} border-r ${sidebarBorder} flex flex-col items-center py-4 relative z-10 shadow-lg`}>
      {" "}
      {/* Changed width to w-12 */}
      {/* Top section of sidebar icons (Main Tabs) */}
      <div className="flex flex-col space-y-2 flex-grow">
        {" "}
        {/* Changed space-y-3 to space-y-2 */}
        <SidebarIcon icon={Home} tooltip="Home" onClick={() => handleNavigation("/")} isActive={pathname === "/" && currentLanguage === null} />
        <SidebarIcon icon={Search} tooltip="Search" onClick={onSearchClick} isActive={false} />
      </div>
      {/* Language Selection Icons (New Section) */}
      <div className="flex flex-col space-y-2 mt-8 mb-4 px-1">
        {" "}
        {/* Changed space-y-3 to space-y-2 */}
        <SidebarIcon
          icon={SiJavascript}
          tooltip="JavaScript"
          onClick={() => handleLanguageClick("javascript")}
          isActive={currentLanguage === "javascript"}
        />
        <SidebarIcon icon={SiPython} tooltip="Python" onClick={() => handleLanguageClick("python")} isActive={currentLanguage === "python"} />
        <SidebarIcon icon={SiHtml5} tooltip="HTML" onClick={() => handleLanguageClick("html")} isActive={currentLanguage === "html"} />
        <SidebarIcon icon={SiC} tooltip="C#" onClick={() => handleLanguageClick("csharp")} isActive={currentLanguage === "csharp"} />
        <SidebarIcon icon={SiJson} tooltip="JSON" onClick={() => handleLanguageClick("json")} isActive={currentLanguage === "json"} />
      </div>
    </div>
  );
};

export default Sidebar;
