import { useState, useMemo } from "react";
const MiniPostman = () => {
  const [url, setUrl] = useState("");
  const [params, setParams] = useState([{ key: "", value: "" }]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  // Build query string
  const queryString = useMemo(() => {
    const validParams = params.filter(p => p.key && p.value);
    if (!validParams.length) return "";

    const query = validParams
      .map(p => `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`)
      .join("&");

    return `?${query}`;
  }, [params]);

  const finalUrl = url + queryString;

  const handleAddParam = () => {
    setParams(prev => [...prev, { key: "", value: "" }]);
  };

  const handleRemoveParam = (index) => {
    setParams(prev => prev.filter((_, i) => i !== index));
  };

  const handleParamChange = (index, field, value) => {
    setParams(prev =>
      prev.map((p, i) =>
        i === index ? { ...p, [field]: value } : p
      )
    );
  };

  const sendRequest = async () => {
    if (!url.trim()) {
      setError("URL is required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResponse(null);

      const start = Date.now();
      const res = await fetch(finalUrl);
      const data = await res.json();
      const time = Date.now() - start;

      setResponse({
        status: res.status,
        time,
        data,
      });
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Mini Postman</h2>

      {/* URL Input */}
      <input
        type="text"
        placeholder="Enter API URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
        className='text-sm p-1 border-2 border-gray-500'
      />

      {/* Query Params */}
      <h4>Query Params</h4>
      {params.map((param, index) => (
        <div key={index} style={{ marginBottom: 5 }} className='flex gap-4'>
          <input
            placeholder="key"
            value={param.key}
            onChange={(e) =>
              handleParamChange(index, "key", e.target.value)
            }
            className='text-sm p-1 border-2 border-gray-500'
          />
          <input
            placeholder="value"
            value={param.value}
            onChange={(e) =>
              handleParamChange(index, "value", e.target.value)
            }
            className='text-sm p-1 border-2 border-gray-500'
          />
          <button onClick={() => handleRemoveParam(index)}>X</button>
        </div>
      ))}

      <button onClick={handleAddParam}
        className="bg-[#FF6F61] text-gray-800 font-bold py-1 px-3 rounded"
      >
        Add Param</button>

      <br /><br />

      {/* Send Button */}
      <button onClick={sendRequest} disabled={loading}>
        {loading ? "Sending..." : "Send Request"}
      </button>

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Response */}
      {response && (
        <div style={{ marginTop: 20 }}>
          <p>Status: {response.status}</p>
          <p>Time: {response.time} ms</p>
          <pre>{JSON.stringify(response.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MiniPostman;
