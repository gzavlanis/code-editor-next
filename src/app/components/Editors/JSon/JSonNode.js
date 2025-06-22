"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react'; // Icons for expand/collapse

const JsonNode = ({ keyName, value, depth, theme }) => {
  const [isExpanded, setIsExpanded] = useState(true); // Start expanded for top level, then can be collapsed

  // Determine colors based on theme for different JSON elements
  const keyColor = theme === 'dark' ? 'text-blue-300' : 'text-blue-700';
  const stringColor = theme === 'dark' ? 'text-green-300' : 'text-green-700';
  const numberColor = theme === 'dark' ? 'text-purple-300' : 'text-purple-700';
  const booleanColor = theme === 'dark' ? 'text-orange-300' : 'text-orange-700';
  const nullColor = theme === 'dark' ? 'text-red-300' : 'text-red-700';
  const bracketColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const iconColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const baseTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-800';

  const indentStyle = { marginLeft: `${depth * 15}px` }; // Indentation for nesting

  // Function to get the type of the value
  const getValueType = (val) => {
    if (val === null) return 'null';
    if (Array.isArray(val)) return 'array';
    return typeof val;
  };

  const type = getValueType(value);

  // Render content based on type
  const renderValue = () => {
    switch (type) {
      case 'object':
        const objectKeys = Object.keys(value);
        const objectCount = objectKeys.length;
        return (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center text-left ${iconColor} focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-sm`}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 mr-1 flex-shrink-0" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-1 flex-shrink-0" />
              )}
              <span className={`${bracketColor}`}>
                {'{'}
                <span className={`${baseTextColor}`}>
                  {isExpanded ? '' : `... ${objectCount} items`}
                </span>
                {'}'}
              </span>
            </button>
            {isExpanded && (
              <div className="ml-4">
                {objectKeys.map((key) => (
                  <JsonNode
                    key={key}
                    keyName={key}
                    value={value[key]}
                    depth={depth + 1}
                    theme={theme}
                  />
                ))}
              </div>
            )}
          </>
        );
      case 'array':
        const arrayCount = value.length;
        return (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center text-left ${iconColor} focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-sm`}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 mr-1 flex-shrink-0" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-1 flex-shrink-0" />
              )}
              <span className={`${bracketColor}`}>
                {'['}
                <span className={`${baseTextColor}`}>
                  {isExpanded ? '' : `... ${arrayCount} items`}
                </span>
                {']'}
              </span>
            </button>
            {isExpanded && (
              <div className="ml-4">
                {value.map((item, index) => (
                  <JsonNode
                    key={index} // Use index as key for array items
                    keyName={index} // Display index as key for array items
                    value={item}
                    depth={depth + 1}
                    theme={theme}
                  />
                ))}
              </div>
            )}
          </>
        );
      case 'string':
        return <span className={stringColor}>&quot;{value}&quot;</span>;
      case 'number':
        return <span className={numberColor}>{value}</span>;
      case 'boolean':
        return <span className={booleanColor}>{String(value)}</span>;
      case 'null':
        return <span className={nullColor}>null</span>;
      case 'undefined':
        return <span className={nullColor}>undefined</span>; // JSON.parse won't yield 'undefined', but good for robustness
      default:
        return <span className={baseTextColor}>{String(value)}</span>;
    }
  };

  return (
    <div style={indentStyle} className="flex items-start">
      {keyName !== null && (
        <span className={`${keyColor} flex-shrink-0`}>
          &quot;{keyName}&quot;:{' '}
        </span>
      )}
      <div className="flex-grow min-w-0"> {/* Allow content to take remaining space, prevent overflow */}
        {renderValue()}
      </div>
    </div>
  );
};

export default JsonNode;
