"use client";

import React, { useState, useEffect, useRef } from "react";
import MonacoEditor from "./MonacoEditor"; // Reusing the Monaco Editor for HTML input

const HtmlEditor = ({ code, onCodeChange, theme, onEditorMounted }) => {
  const iframeRef = useRef(null); // Ref for the iframe to manipulate its content

  // Effect to update the iframe content whenever the code prop changes
  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const document = iframe.contentDocument;
      if (document) {
        // Write the HTML code directly into the iframe's document
        // This ensures the CSS and JS within the HTML are also rendered
        document.open();
        document.write(code);
        document.close();
      }
    }
  }, [code]); // Re-run this effect whenever the 'code' prop changes

  // Dynamic Tailwind classes for theming the editor and preview panels
  const panelBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const panelBorder = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const headerBg = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  const headingText = theme === "dark" ? "text-gray-100" : "text-gray-800";

  return (
    <div className="flex flex-col lg:flex-row h-full w-full gap-4 p-4">
      {/* Code Editor Panel (Left side on large screens, Top on small screens) */}
      <div className={`flex flex-col flex-1 ${panelBg} border ${panelBorder} rounded-lg shadow-xl overflow-hidden`}>
        <div className={`${headerBg} p-3 border-b ${panelBorder} flex-shrink-0`}>
          <h2 className={`text-lg font-semibold ${headingText} text-center`}>HTML Code</h2>
        </div>
        <div className="flex-grow overflow-hidden">
          <MonacoEditor
            language="html" // Specifically set language to HTML for Monaco
            code={code}
            onCodeChange={onCodeChange}
            theme={theme}
            onEditorMounted={onEditorMounted}
          />
        </div>
      </div>

      {/* Live Preview Panel (Right side on large screens, Bottom on small screens) */}
      <div className={`flex flex-col flex-1 ${panelBg} border ${panelBorder} rounded-lg shadow-xl overflow-hidden`}>
        <div className={`${headerBg} p-3 border-b ${panelBorder} flex-shrink-0`}>
          <h2 className={`text-lg font-semibold ${headingText} text-center`}>Live Preview</h2>
        </div>
        <div className="flex-grow p-2">
          {/* Iframe to render the HTML code */}
          <iframe
            ref={iframeRef}
            title="HTML Live Preview"
            className="w-full h-full bg-white rounded-md" // Ensure white background inside iframe for consistent rendering
            style={{ border: "none" }} // Remove default iframe border
            sandbox="allow-scripts allow-same-origin" // Basic sandboxing for security
          />
        </div>
      </div>
    </div>
  );
};

export default HtmlEditor;
