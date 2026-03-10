import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language = "javascript", title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-700 bg-[#0f172a]">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#020617] border-b border-gray-700">
        <span className="text-sm text-gray-300 font-semibold">
          {title || language}
        </span>

        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={'javascript'}
        style={oneDark}
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "16px",
          background: "transparent",
          fontSize: "14px",
        }}
        codeTagProps={{
          style: {
            background: "transparent",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;