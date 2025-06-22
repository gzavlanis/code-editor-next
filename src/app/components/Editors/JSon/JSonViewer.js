"use client";

import React from 'react';
import JsonNode from './JSonNode'; // Import the recursive JsonNode component

const JsonViewer = ({ jsonString, theme }) => {
  let parsedJson;
  let parseError = null;

  try {
    parsedJson = JSON.parse(jsonString);
  } catch (e) {
    parseError = `Invalid JSON: ${e.message}`;
  }

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const errorColor = theme === 'dark' ? 'text-red-400' : 'text-red-700';

  return (
    <div className={`json-viewer font-mono text-sm pb-5 ${textColor}`}>
      {parseError ? (
        <pre className={`${errorColor} whitespace-pre-wrap`}>
          {parseError}
          <br />
          <br />
          {jsonString} {/* Show the original invalid JSON below the error */}
        </pre>
      ) : (
        <JsonNode keyName={null} value={parsedJson} depth={0} theme={theme} />
      )}
    </div>
  );
};

export default JsonViewer;
