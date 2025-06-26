"use client"; // This directive marks the component as a Client Component

import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";

const MonacoEditor = ({ language, code, onCodeChange, theme, onEditorMounted }) => {
  const editorRef = useRef(null);
  const [editorReady, setEditorReady] = useState(false);

  // Set up the editor instance once it's mounted
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    if (onEditorMounted) {
      onEditorMounted(editor); // Pass the editor instance back to the parent
    }
    setEditorReady(true); // Mark editor as ready

    // Custom theme for dark mode if desired, or use built-in 'vs-dark'
    // Monaco themes are separate from overall app theme, but we can try to match
    monaco.editor.defineTheme("my-dark-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#1a202c", // bg-gray-900 from Tailwind
        "editor.lineHighlightBackground": "#2d3748", // bg-gray-800 from Tailwind
        "editorLineNumber.foreground": "#718096", // text-gray-500 from Tailwind
        "editorCursor.foreground": "#a0aec0",
      },
    });

    // Apply the theme immediately or when it changes
    monaco.editor.setTheme(theme === "dark" ? "my-dark-theme" : "vs-light");
  }

  // Update Monaco theme when the prop changes
  useEffect(() => {
    if (editorReady && editorRef.current) {
      const monaco = window.monaco; // Access monaco global object
      if (monaco) {
        monaco.editor.setTheme(theme === "dark" ? "my-dark-theme" : "vs-light");
      }
    }
  }, [theme, editorReady]);

  // Handle code changes from the editor
  const handleEditorChange = (value, event) => {
    onCodeChange(value);
  }

  // Map our language names to Monaco's language IDs
  const monacoLanguageMap = {
    javascript: "javascript",
    python: "python",
    html: "html",
    css: "css",
    csharp: "csharp",
    json: "json",
  };

  const monacoLanguage = monacoLanguageMap[language] || "plaintext";

  return (
    <div className="w-full h-full">
      {" "}
      {/* Monaco editor needs a defined height */}
      <Editor
        height="100%" // Editor should fill the height of its parent div
        language={monacoLanguage}
        value={code}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false }, // Disable minimap to save space
          lineNumbers: "on",
          scrollBeyondLastLine: true,
          automaticLayout: true, // Crucial for responsiveness inside flex containers
          readOnly: false, // Allow editing
          wordWrap: 'off',
          // Other options you might want to consider:
          wordWrap: 'on',
          fontSize: 14, // Can be set here or via CSS if needed
        }}
        theme={theme === "dark" ? "my-dark-theme" : "vs-light"} // Initial theme
      />
    </div>
  );
};

export default MonacoEditor;
