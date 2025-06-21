"use client"; // This directive marks the component as a Client Component

import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './components/HomeScreen/HomeScreen'; // Corrected import path
import { usePathname } from 'next/navigation'; // Import usePathname for conditional rendering

// Main App component for the code editor
function Home() {
  // State for storing code for different languages
  const [languageCode, setLanguageCode] = useState({
    javascript: `console.log('Hello, JavaScript!');\n// Try writing some JavaScript here!`,
    python: `# print('Hello, Python!')\n# Write your Python code here`,
    html: `<!-- Hello, HTML! -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Welcome!</h1>\n</body>\n</html>`,
    css: `/* Hello, CSS! */\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n}\n.container {\n    max-width: 800px;\n    margin: 20px auto;\n}`,
    csharp: `// Hello, C#! \nusing System;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        Console.WriteLine("Hello, C# World!");\n    }\n}`,
  });
  const [currentLanguage, setCurrentLanguage] = useState('javascript'); // State for currently selected language

  const [output, setOutput] = useState('');
  const outputRef = useRef(null); // Ref for the output div to scroll

  // Get the current pathname to determine what content to display
  const pathname = usePathname();

  // State for theme: 'dark' or 'light'
  // Initialize from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') { // Check if window is defined (for Next.js SSR compatibility)
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Effect to apply theme class to html element and save to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement; // Target the <html> element
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Function to run the user's code (only JavaScript execution is supported in browser)
  const runCode = () => {
    setOutput(''); // Clear previous output
    if (currentLanguage !== 'javascript') {
      setOutput(`Cannot execute ${currentLanguage} directly in the browser. This feature is currently only for JavaScript.`);
      return;
    }

    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;
    const originalConsoleInfo = console.info;

    let capturedOutput = '';

    // Override console methods to capture output
    console.log = (...args) => {
      capturedOutput += args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ') + '\n';
      originalConsoleLog(...args); // Also log to the browser console
    };
    console.error = (...args) => {
      capturedOutput += 'ERROR: ' + args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ') + '\n';
      originalConsoleError(...args);
    };
    console.warn = (...args) => {
      capturedOutput += 'WARN: ' + args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ') + '\n';
      originalConsoleWarn(...args);
    };
    console.info = (...args) => {
      capturedOutput += 'INFO: ' + args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ') + '\n';
      originalConsoleInfo(...args);
    };


    try {
      // Execute the code using a Function constructor for safer evaluation than direct eval()
      // Still, be cautious with untrusted code. For production, consider a more robust sandboxing solution.
      new Function(languageCode.javascript)(); // Always execute JavaScript
    } catch (error) {
      capturedOutput += `Error: ${error.message}\n`;
      originalConsoleError("Execution Error:", error);
    } finally {
      // Restore original console methods
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
      console.info = originalConsoleInfo;
      setOutput(capturedOutput);
    }
  };

  // Update the code in state when textarea content changes
  const handleCodeChange = (e) => {
    setLanguageCode(prev => ({
      ...prev,
      [currentLanguage]: e.target.value
    }));
  };

  // Scroll to the bottom of the output when it updates
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  // Determine placeholder based on current language
  const getPlaceholder = (lang) => {
    switch (lang) {
      case 'javascript': return 'Write your JavaScript code here...';
      case 'python': return 'Write your Python code here... (Execution not supported in browser)';
      case 'html': return 'Write your HTML code here... (Execution not supported in browser)';
      case 'css': return 'Write your CSS code here... (Execution not supported in browser)';
      case 'csharp': return 'Write your C# code here... (Execution not supported in browser)';
      default: return 'Select a language to start coding...';
    }
  };

  // Dynamic Tailwind classes based on theme
  const bgColor = theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const headerBg = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-300';
  const inputBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const inputText = theme === 'dark' ? 'text-gray-50' : 'text-gray-800';
  const outputBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const outputText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const headingText = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const outputHeadingText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`flex min-h-screen ${bgColor} ${textColor} font-inter antialiased transition-colors duration-300`}>
      {/* Left Sidebar Component */}
      <Sidebar
        theme={theme}
        toggleTheme={toggleTheme}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      {/* Main Content Area */}
      <div className="flex-grow p-4 flex items-center justify-center">
        {/* Conditional rendering: Show HomeScreen if on root path, else show the editor */}
        {pathname === '/' ? (
          <HomeScreen theme={theme} />
        ) : (
          <div className={`w-full max-w-4xl ${cardBg} rounded-lg shadow-xl overflow-hidden`}>
            {/* Header */}
            <div className={`${headerBg} p-4 border-b ${borderColor}`}>
              <h1 className={`text-2xl font-bold ${headingText} text-center`}>Simple Code Editor ({currentLanguage.toUpperCase()} Mode)</h1>
            </div>

            {/* Code Input Area */}
            <div className="p-4">
              <textarea
                className={`w-full h-64 p-3 ${inputBg} ${inputText} text-sm font-mono border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y`}
                value={languageCode[currentLanguage]}
                onChange={handleCodeChange}
                placeholder={getPlaceholder(currentLanguage)}
                spellCheck="false"
                aria-label={`Code input area for ${currentLanguage}`}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className={`p-4 border-t ${borderColor} flex justify-center`}>
              <button
                onClick={runCode}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                aria-label="Run Code"
                disabled={currentLanguage !== 'javascript'}
              >
                Run Code {currentLanguage !== 'javascript' && '(JS Only)'}
              </button>
            </div>

            {/* Output Area */}
            <div className={`p-4 border-t ${borderColor}`}>
              <h2 className={`text-lg font-semibold ${outputHeadingText} mb-2`}>Output:</h2>
              <pre
                ref={outputRef}
                className={`w-full h-40 p-3 ${outputBg} ${outputText} text-sm font-mono border ${borderColor} rounded-md overflow-auto whitespace-pre-wrap break-words`}
                aria-live="polite"
              >
                {output || 'Your code output will appear here.'}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
