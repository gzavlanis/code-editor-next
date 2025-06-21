"use client"; // This directive marks the component as a Client Component

import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import MonacoEditor from './components/Editors/MonacoEditor'; // Used for most languages
import HtmlEditor from './components/Editors/HtmlEditor'; // Used specifically for HTML
import { usePathname } from 'next/navigation';
import { Sun, Moon, X } from 'lucide-react'; // Import Sun, Moon, and X icons

// Main App component for the code editor
function App() {
  // State for storing code for different languages
  const [languageCode, setLanguageCode] = useState({
    javascript: `console.log('Hello, JavaScript!');\n// Try writing some JavaScript here!\n\n// Add more lines to test scrolling:\nconst longArray = [\n    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100\n];\n\nfor (let i = 0; i < longArray.length; i++) {\n    console.log('Item ' + longArray[i]);\n}\n\nfunction anotherFunction() {\n    let sum = 0;\n    for (let i = 0; i < 20; i++) {\n        sum += i;\n        console.log('Current sum: ' + sum);\n    }\n    return sum;\n}\n\nanotherFunction();\n\n// Even more lines to ensure scrolling on very large monitors\nconsole.log("This is line 101");\nconsole.log("This is line 102");\nconsole.log("This is line 103");\nconsole.log("This is line 104");\nconsole.log("This is line 105");\nconsole.log("This is line 106");\nconsole.log("This is line 107");\nconsole.log("This is line 108");\nconsole.log("This is line 109");\nconsole.log("This is line 110");\nconsole.log("This is line 111");\nconsole.log("This is line 112");\nconsole.log("This is line 113");\nconsole.log("This is line 114");\nconsole.log("This is line 115");\nconsole.log("This is line 116");\nconsole.log("This is line 117");\nconsole.log("This is line 118");\nconsole.log("This is line 119");\nconsole.log("This is line 120");\nconsole.log("This is line 121");\nconsole.log("This is line 122");\nconsole.log("This is line 123");\nconsole.log("This is line 124");\nconsole.log("This is line 125");\nconsole.log("This is line 126");\nconsole.log("This is line 127");\nconsole.log("This is line 128");\nconsole.log("This is line 129");\nconsole.log("This is line 130");\nconsole.log("This is line 131");\nconsole.log("This is line 132");\nconsole.log("This is line 133");\nconsole.log("This is line 134");\nconsole.log("This is line 135");\nconsole.log("This is line 136");\nconsole.log("This is line 137");\nconsole.log("This is line 138");\nconsole.log("This is line 139");\nconsole.log("This is line 140");\nconsole.log("This is line 141");\nconsole.log("This is line 142");\nconsole.log("This is line 143");\nconsole.log("This is line 144");\nconsole.log("This is line 145");\nconsole.log("This is line 146");\nconsole.log("This is line 147");\nconsole.log("This is line 148");\nconsole.log("This is line 149");\nconsole.log("This is line 150");`,
    python: `# print('Hello, Python!')\n# Write your Python code here\n\n# Add more lines to test scrolling:\nlong_list = [\n    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100\n]\n\nfor item in long_list:\n    print(f"Item {item}")\n\ndef another_function():\n    total = 0\n    for i in range(20):\n        total += i\n        print(f"Current total: {total}")\n    return total\n\nanother_function()\n\n# Even more lines to ensure scrolling on very large monitors\nprint("This is line 101")\nprint("This is line 102")\nprint("This is line 103")\nprint("This is line 104")\nprint("This is line 105")\nprint("This is line 106")\nprint("This is line 107")\nprint("This is line 108")\nprint("This is line 109")\nprint("This is line 110")\nprint("This is line 111")\nprint("This is line 112")\nprint("This is line 113")\nprint("This is line 114")\nprint("This is line 115")\nprint("This is line 116");\nprint("This is line 117");\nprint("This is line 118");\nprint("This is line 119");\nprint("This is line 120");\nprint("This is line 121");\nprint("This is line 122");\nprint("This is line 123");\nprint("This is line 124");\nprint("This is line 125");\nprint("This is line 126");\nprint("This is line 127");\nprint("This is line 128");\nprint("This is line 129");\nprint("This is line 130");\nprint("This is line 131");\nprint("This is line 132");\nprint("This is line 133");\nprint("This is line 134");\nprint("This is line 135");\nprint("This is line 136");\nprint("This is line 137");\nprint("This is line 138");\nprint("This is line 139");\nprint("This is line 140");\nprint("This is line 141");\nprint("This is line 142");\nprint("This is line 143");\nprint("This is line 144");\nprint("This is line 145");\nprint("This is line 146");\nprint("This is line 147");\nprint("This is line 148");\nprint("This is line 149");\nprint("This is line 150");`,
    html: `<!-- Hello, HTML! -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Awesome Page</title>\n    <style>\n        body {\n            font-family: 'Inter', sans-serif;\n            background-color: #f4f7f6;\n            margin: 0;\n            padding: 20px;\n            color: #333;\n        }\n        .container {\n            max-width: 900px;\n            margin: 40px auto;\n            background-color: white;\n            padding: 30px;\n            border-radius: 12px;\n            box-shadow: 0 8px 16px rgba(0,0,0,0.1);\n            border: 1px solid #e0e0e0;\n        }\n        h1 {\n            color: #2c3e50;\n            text-align: center;\n            margin-bottom: 25px;\n            font-size: 2.5em;\n            font-weight: 700;\n        }\n        p {\n            line-height: 1.6;\n            margin-bottom: 15px;\n        }\n        .button-group {\n            text-align: center;\n            margin-top: 30px;\n        }\n        .btn {\n            display: inline-block;\n            padding: 12px 25px;\n            margin: 0 10px;\n            border-radius: 8px;\n            text-decoration: none;\n            font-weight: 600;\n            transition: all 0.3s ease;\n            cursor: pointer;\n            border: none;\n        }\n        .btn-primary {\n            background-color: #3498db;\n            color: white;\n            box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);\n        }\n        .btn-primary:hover {\n            background-color: #2980b9;\n            transform: translateY(-2px);\n            box-shadow: 0 6px 12px rgba(52, 152, 219, 0.4);\n        }\n        .footer {\n            text-align: center;\n            margin-top: 50px;\n            font-size: 0.9em;\n            color: #7f8c8d;\n        }\n    </style>\n</head>\n<body>\n    <div class="container">\n        <h1>Hello from HTML!</h1>\n        <p>This is a sample HTML page generated by your amazing code editor. You can modify this content and see how the page changes.</p>\n        <p>Feel free to experiment with different HTML tags, CSS styles, and content structures.</p>\n        <div class="button-group">\n            <button class="btn btn-primary">Learn More</button>\n            <a href="#" class="btn btn-primary">Get Started</a>\n        </div>\n    </div>\n    <footer class="footer">\n        &copy; 2024 Your Code Editor. All rights reserved.\n    </footer>\n\n    <!-- Adding many more lines to enable scrolling -->\n    <p>This is an extra line to make the content longer.</p>\n    <p>This is another extra line to make the content longer.</p>\n    <p>This is yet another extra line to make the content longer.</p>\n    <p>More content to ensure scrolling.</p>\n    <p>Line 1.</p><p>Line 2.</p><p>Line 3.</p><p>Line 4.</p><p>Line 5.</p><p>Line 6.</p><p>Line 7.</p><p>Line 8.</p><p>Line 9.</p><p>Line 10.</p>\n    <p>Line 11.</p><p>Line 12.</p><p>Line 13.</p><p>Line 14.</p><p>Line 15.</p><p>Line 16.</p><p>Line 17.</p><p>Line 18.</p><p>Line 19.</p><p>Line 20.</p>\n    <p>Line 21.</p><p>Line 22.</p><p>Line 23.</p><p>Line 24.</p><p>Line 25.</p><p>Line 26.</p><p>Line 27.</p><p>Line 28.</p><p>Line 29.</p><p>Line 30.</p>\n    <p>Line 31.</p><p>Line 32.</p><p>Line 33.</p><p>Line 34.</p><p>Line 35.</p><p>Line 36.</p><p>Line 37.</p><p>Line 38.</p><p>Line 39.</p><p>Line 40.</p>\n    <p>Line 41.</p><p>Line 42.</p><p>Line 43.</p><p>Line 44.</p><p>Line 45.</p><p>Line 46.</p><p>Line 47.</p><p>Line 48.</p><p>Line 49.</p><p>Line 50.</p>\n    <p>Line 51.</p><p>Line 52.</p><p>Line 53.</p><p>Line 54.</p><p>Line 55.</p><p>Line 56.</p><p>Line 57.</p><p>Line 58.</p><p>Line 59.</p><p>Line 60.</p>\n    <p>Line 61.</p><p>Line 62.</p><p>Line 63.</p><p>Line 64.</p><p>Line 65.</p><p>Line 66.</p><p>Line 67.</p><p>Line 68.</p><p>Line 69.</p><p>Line 70.</p>\n    <p>Line 71.</p><p>Line 72.</p><p>Line 73.</p><p>Line 74.</p><p>Line 75.</p><p>Line 76.</p><p>Line 77.</p><p>Line 78.</p><p>Line 79.</p><p>Line 80.</p>\n    <p>Line 81.</p><p>Line 82.</p><p>Line 83.</p><p>Line 84.</p><p>Line 85.</p><p>Line 86.</p><p>Line 87.</p><p>Line 88.</p><p>Line 89.</p><p>Line 90.</p>\n    <p>Line 91.</p><p>Line 92.</p><p>Line 93.</p><p>Line 94.</p><p>Line 95.</p><p>Line 96.</p><p>Line 97.</p><p>Line 98.</p><p>Line 99.</p><p>Line 100.</p>\n</body>\n</html>`,
    csharp: `// Hello, C#! \nusing System;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        Console.WriteLine("Hello, C# World!");\n    }\n}\n\n// Add more lines to test scrolling:\npublic class MyClass\n{\n    public int MyProperty { get; set; }\n\n    public void DoSomething()\n    {\n        for (int i = 0; i < 50; i++)\n        {\n            Console.WriteLine($"Doing something {i} times.");\n        }\n    }\n\n    public string GetMessage(string name)\n    {\n        return $"Hello, {name}!";\n    }\n\n    public void AnotherMethod()\n{\n        // A lot of empty lines to ensure scrolling\n        Console.WriteLine("Line 1");\n        Console.WriteLine("Line 2");\n        Console.WriteLine("Line 3");\n        Console.WriteLine("Line 4");\n        Console.WriteLine("Line 5");\n        Console.WriteLine("Line 6");\n        Console.WriteLine("Line 7");\n        Console.WriteLine("Line 8");\n        Console.WriteLine("Line 9");\n        Console.WriteLine("Line 10");\n        Console.WriteLine("Line 11");\n        Console.WriteLine("Line 12");\n        Console.WriteLine("Line 13");\n        Console.WriteLine("Line 14");\n        Console.WriteLine("Line 15");\n        Console.WriteLine("Line 16");\n        Console.WriteLine("Line 17");\n        Console.WriteLine("Line 18");\n        Console.WriteLine("Line 19");\n        Console.WriteLine("Line 20");\n        Console.WriteLine("Line 21");\n        Console.WriteLine("Line 22");\n        Console.WriteLine("Line 23");\n        Console.WriteLine("Line 24");\n        Console.WriteLine("Line 25");\n        Console.WriteLine("Line 26");\n        Console.WriteLine("Line 27");\n        Console.WriteLine("Line 28");\n        Console.WriteLine("Line 29");\n        Console.WriteLine("Line 30");\n        Console.WriteLine("Line 31");\n        Console.WriteLine("Line 32");\n        Console.WriteLine("Line 33");\n        Console.WriteLine("Line 34");\n        Console.WriteLine("Line 35");\n        Console.WriteLine("Line 36");\n        Console.WriteLine("Line 37");\n        Console.WriteLine("Line 38");\n        Console.WriteLine("Line 39");\n        Console.WriteLine("Line 40");\n        Console.WriteLine("Line 41");\n        Console.WriteLine("Line 42");\n        Console.WriteLine("Line 43");\n        Console.WriteLine("Line 44");\n        Console.WriteLine("Line 45");\n        Console.WriteLine("Line 46");\n        Console.WriteLine("Line 47");\n        Console.WriteLine("Line 48");\n        Console.WriteLine("Line 49");\n        Console.WriteLine("Line 50");\n        Console.WriteLine("Line 51");\n        Console.WriteLine("Line 52");\n        Console.WriteLine("Line 53");\n        Console.WriteLine("Line 54");\n        Console.WriteLine("Line 55");\n        Console.WriteLine("Line 56");\n        Console.WriteLine("Line 57");\n        Console.WriteLine("Line 58");\n        Console.WriteLine("Line 59");\n        Console.WriteLine("Line 60");\n        Console.WriteLine("Line 61");\n        Console.WriteLine("Line 62");\n        Console.WriteLine("Line 63");\n        Console.WriteLine("Line 64");\n        Console.WriteLine("Line 65");\n        Console.WriteLine("Line 66");\n        Console.WriteLine("Line 67");\n        Console.WriteLine("Line 68");\n        Console.WriteLine("Line 69");\n        Console.WriteLine("Line 70");\n        Console.WriteLine("Line 71");\n        Console.WriteLine("Line 72");\n        Console.WriteLine("Line 73");\n        Console.WriteLine("Line 74");\n        Console.WriteLine("Line 75");\n        Console.WriteLine("Line 76");\n        Console.WriteLine("Line 77");\n        Console.WriteLine("Line 78");\n        Console.WriteLine("Line 79");\n        Console.WriteLine("Line 80");\n        Console.WriteLine("Line 81");\n        Console.WriteLine("Line 82");\n        Console.WriteLine("Line 83");\n        Console.WriteLine("Line 84");\n        Console.WriteLine("Line 85");\n        Console.WriteLine("Line 86");\n        Console.WriteLine("Line 87");\n        Console.WriteLine("Line 88");\n        Console.WriteLine("Line 89");\n        Console.WriteLine("Line 90");\n        Console.WriteLine("Line 91");\n        Console.WriteLine("Line 92");\n        Console.WriteLine("Line 93");\n        Console.WriteLine("Line 94");\n        Console.WriteLine("Line 95");\n        Console.WriteLine("Line 96");\n        Console.WriteLine("Line 97");\n        Console.WriteLine("Line 98");\n        Console.WriteLine("Line 99");\n        Console.WriteLine("Line 100");\n    }\n}`,
    json: `{ // Hello, JSON!\n    "name": "Code Editor",\n    "version": "1.0.0",\n    "description": "A simple web-based code editor with multi-language support and theme toggling.",\n    "author": "Gemini AI",\n    "features": [\n        "Multi-language support (JavaScript, Python, HTML, C#, JSON)",\n        "Syntax highlighting (for JSON)",\n        "Line numbers (for JSON)",\n        "Autofill for brackets and quotes (for JSON)",\n        "Theme toggling (dark/light)",\n        "Basic JavaScript execution",\n        "Full-screen responsive layout"\n    ],\n    "supportedLanguages": [\n        {"name": "JavaScript", "extension": ".js", "executable": true},\n        {"name": "Python", "extension": ".py", "executable": false},\n        {"name": "HTML", "extension": ".html", "executable": false},\n        {"name": "C#", "extension": ".cs", "executable": false},\n        {"name": "JSON", "extension": ".json", "executable": false}\n    ],\n    "settings": {\n        "tabSize": 4,\n        "autoSave": true,\n        "fontSize": 14\n    },\n    "dependencies": [\n        "react",\n        "next",\n        "lucide-react",\n        "react-icons",\n        "@monaco-editor/react"\n    ],\n    "exampleUsage": {\n        "javascript": "console.log('Hello from JavaScript!');",\n        "json": "{\\"key\\": \\"value\\"}"\n    },\n    "changelog": [\n        {"version": "0.1.0", "date": "2024-01-01", "changes": "Initial release with basic editor and theme."}, \n        {"version": "0.2.0", "date": "2024-01-15", "changes": "Added sidebar navigation and multiple languages."}, \n        {"version": "0.3.0", "date": "2024-02-01", "changes": "Integrated JSON editor with syntax highlighting, line numbers, autofill, and removed run/output."}, \n        {"version": "0.4.0", "date": "2024-02-15", "changes": "Improved full-screen responsiveness and increased editor width/height on large screens."}\n    ],\n    "longContentExample": [\n        "This is a very long line to test horizontal scrolling if needed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This line continues even longer to push the boundaries of the editor.",\n        "Another line for testing purposes.",\n        "A third line to demonstrate extended content and scrolling capabilities. This line is also intentionally very long to test how the editor handles extensive text content that might overflow the visible area and require horizontal scrolling. We want to ensure that the user experience remains smooth and functional, regardless of the length or complexity of the code they are working with. The responsiveness of the editor is key to its usability across various devices and screen resolutions, guaranteeing a consistent and efficient coding environment. Therefore, continuous testing with varied input lengths is crucial for maintaining high quality.",\n        "Line 4.",\n        "Line 5.",
        "Line 6.",
        "Line 7.",
        "Line 8.",
        "Line 9.",
        "Line 10.",
        "Line 11.",
        "Line 12.",
        "Line 13.",
        "Line 14.",
        "Line 15.",
        "Line 16.",
        "Line 17.",
        "Line 18.",
        "Line 19.",
        "Line 20.",
        "Line 21.",
        "Line 22.",
        "Line 23.",
        "Line 24.",
        "Line 25.",
        "Line 26.",
        "Line 27.",
        "Line 28.",
        "Line 29.",
        "Line 30.",
        "Line 31.",
        "Line 32.",
        "Line 33.",
        "Line 34.",
        "Line 35.",
        "Line 36.",
        "Line 37.",
        "Line 38.",
        "Line 39.",
        "Line 40.",
        "Line 41.",
        "Line 42.",
        "Line 43.",
        "Line 44.",
        "Line 45.",
        "Line 46.",
        "Line 47.",
        "Line 48.",
        "Line 49.",
        "Line 50.",
        "Line 51.",
        "Line 52.",
        "Line 53.",
        "Line 54.",
        "Line 55.",
        "Line 56.",
        "Line 57.",
        "Line 58.",
        "Line 59.",
        "Line 60.",
        "Line 61.",
        "Line 62.",
        "Line 63.",
        "Line 64.",
        "Line 65.",
        "Line 66.",
        "Line 67.",
        "Line 68.",
        "Line 69.",
        "Line 70.",
        "Line 71.",
        "Line 72.",
        "Line 73.",
        "Line 74.",
        "Line 75.",
        "Line 76.",
        "Line 77.",
        "Line 78.",
        "Line 79.",
        "Line 80.",
        "Line 81.",
        "Line 82.",
        "Line 83.",
        "Line 84.",
        "Line 85.",
        "Line 86.",
        "Line 87.",
        "Line 88.",
        "Line 89.",
        "Line 90.",
        "Line 91.",
        "Line 92.",
        "Line 93.",
        "Line 94.",
        "Line 95.",
        "Line 96.",
        "Line 97.",
        "Line 98.",
        "Line 99.",
        "Line 100."
    ]
  }`,
  });
  // Initialize currentLanguage to null to show HomeScreen by default
  const [currentLanguage, setCurrentLanguage] = useState(null);
  // State to control visibility of the output panel
  const [showOutput, setShowOutput] = useState(true);

  const [output, setOutput] = useState('');
  const outputRef = useRef(null); // Ref for the output div to scroll

  // Get the current pathname. Used by Sidebar for navigation-related active states.
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

  // Define dynamic Tailwind classes based on theme
  const bgColor = theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const headerBg = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-300';
  const inputBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'; // General background for editors/textareas
  const inputText = theme === 'dark' ? 'text-gray-50' : 'text-gray-800'; // General text color for editors/textareas
  const outputBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const outputText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const headingText = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const outputHeadingText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';


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

  // Update the code in state when editor content changes
  const handleCodeChange = (newCode) => {
    setLanguageCode(prev => ({
      ...prev,
      [currentLanguage]: newCode
    }));
  };

  // Scroll to the bottom of the output when it updates
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    // Main container now takes full viewport height and hides overflow
    <div className={`flex h-screen overflow-hidden ${bgColor} ${textColor} font-inter antialiased transition-colors duration-300 relative`}>
      {/* Left Sidebar Component */}
      <Sidebar
        theme={theme}
        currentLanguage={currentLanguage} // Pass current language for active state
        onLanguageChange={setCurrentLanguage} // Pass setter for language
      />

      {/* Theme Toggle Button - moved to top right of the whole screen */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-600 text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5" /> // Moon icon for dark mode
        ) : (
          <Sun className="h-5 w-5" /> // Sun icon for light mode
        )}
      </button>

      {/* Main Content Area - now flexible height and column layout */}
      <div className="flex-grow p-4 flex flex-col h-full">
        {/* Conditional rendering: Show HomeScreen if no language selected, else show the editor */}
        {currentLanguage === null ? (
          <HomeScreen theme={theme} />
        ) : currentLanguage === 'html' ? ( // HTML editor with its own split layout
          <HtmlEditor
            code={languageCode.html}
            onCodeChange={handleCodeChange}
            theme={theme}
          />
        ) : (
          // Generic editor layout for all other languages (JS, Python, C#, JSON)
          <div className={`w-full max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-full ${cardBg} rounded-lg shadow-xl overflow-hidden flex flex-col h-full mx-auto`}>
            {/* Header with Language Title and Run/Show Output Button */}
            <div className={`${headerBg} p-4 border-b ${borderColor} flex items-center justify-between flex-shrink-0`}>
              <h1 className={`text-2xl font-bold ${headingText} text-center flex-grow`}>Simple Code Editor ({currentLanguage.toUpperCase()} Mode)</h1>
              <div className="flex items-center space-x-2"> {/* Container for buttons */}
                {currentLanguage === 'javascript' && showOutput && ( // Show Run button only for JavaScript when output is visible
                  <button
                    onClick={runCode}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                    aria-label="Run Code"
                  >
                    Run Code
                  </button>
                )}
                {/* Show 'Show Output' button for JS, Python, C#, JSON if output is hidden */}
                {(currentLanguage === 'javascript' || currentLanguage === 'python' || currentLanguage === 'csharp' || currentLanguage === 'json') && !showOutput && (
                  <button
                    onClick={() => setShowOutput(true)}
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                    aria-label="Show Output"
                  >
                    Show Output
                  </button>
                )}
              </div>
            </div>

            {/* Split Panel: Code Editor (left) and Output (right) */}
            <div className="flex flex-col lg:flex-row h-full flex-grow p-4 gap-4">
              {/* Code Editor Area (Left Pane) */}
              <div className={`flex flex-col ${showOutput && currentLanguage !== 'html' ? 'flex-1' : 'w-full'} ${inputBg} border ${borderColor} rounded-lg overflow-hidden`}>
                <MonacoEditor
                  language={currentLanguage}
                  code={languageCode[currentLanguage]}
                  onCodeChange={handleCodeChange}
                  theme={theme}
                />
              </div>

              {/* Output Area (Right Pane, conditionally rendered for non-HTML) */}
              {currentLanguage !== 'html' && showOutput ? (
                <div className={`flex flex-col flex-1 ${outputBg} border ${borderColor} rounded-lg shadow-xl overflow-hidden`}>
                  <div className={`${headerBg} p-3 border-b ${borderColor} flex-shrink-0 flex justify-between items-center`}>
                    <h2 className={`text-lg font-semibold ${outputHeadingText} text-center`}>Output:</h2>
                    <button
                      onClick={() => setShowOutput(false)}
                      className="p-1 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Close output"
                    >
                      <X className="h-4 w-4" /> {/* Lucide X icon */}
                    </button>
                  </div>
                  <pre
                    ref={outputRef}
                    className={`w-full h-full p-3 ${outputBg} ${outputText} text-sm font-mono rounded-b-md overflow-auto whitespace-pre-wrap break-words`}
                    aria-live="polite"
                  >
                    {currentLanguage === 'json' ? (
                      // Attempt to pretty-print JSON, or show error if invalid
                      (() => {
                        try {
                          return JSON.stringify(JSON.parse(languageCode.json), null, 2);
                        } catch (e) {
                          return `Invalid JSON: ${e.message}\n\n${languageCode.json}`;
                        }
                      })()
                    ) : (
                      output || 'Your code output will appear here.'
                    )}
                  </pre>
                </div>
              ) : null /* Do not render anything when output is hidden or for HTML */ }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
