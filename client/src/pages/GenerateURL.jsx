import React, { useState } from "react";
import axios from 'axios';

const GenerateURL = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setCopied(false);
    console.log(url);
    // return
    try {
      const response = await axios.post("http://localhost:8000/url", { url });
      console.log(response);
      const data = response.data.id
      const shortUrl = 'http://localhost:8000/url/' + data
      setShortUrl(shortUrl);
    } catch (error) {
      console.error("Error generating short URL:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to- from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-semibold text-white mb-6 text-center">
          🔗 URL Shortener
        </h1>

        <label className="block text-gray-300 mb-2 text-sm font-medium">
          Enter your long URL
        </label>
        <input
          type="url"
          placeholder="https://example.com/your-long-url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full mt-5 bg-pink-600 hover:bg-pink-700 transition-colors text-white font-semibold py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate Short URL"}
        </button>

        {shortUrl && (
          <div className="mt-6 p-4 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-between">
            <p className="text-pink-400 truncate text-sm">{shortUrl}</p>
            <button
              onClick={handleCopy}
              className="text-gray-300 hover:text-white text-lg transition"
            >
              {copied ? "✅" : "📋"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateURL;
