import { useMemo, useState } from 'react';

const Throt = () => {
  const [input, setInput] = useState('');

  const throtling = (func, wait) => {
    let timerID = null;
    return (...args) => {
      if (timerID) return;
      timerID = setTimeout(() => {
        timerID = null;
        func(...args);
      }, wait);
    };
  };

  const callApi = (e) => {
    console.log('Calling api query', e.target.value);
  };

  const throtCallApi = useMemo(() => throtling(callApi, 2000), []);

  const handleChange = (e) => {
    setInput(e.target.value);
    throtCallApi(e);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C1C] px-4">
      <div className="w-full max-w-md bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-[#F5E8D8] mb-4 text-center">
          Throttling Demo
        </h2>

        <p className="text-sm text-[#DAA520] mb-5 text-center">
          API call triggers once every 2 seconds
        </p>

        <input
          type="text"
          name="query"
          value={input}
          onChange={handleChange}
          placeholder="Type to test throttling..."
          className=" w-full px-4 py-2.5 rounded-lg bg-[#262626] text-[#F5E8D8] placeholder:text-[#A8A29E] border border-[#3A3A3A] focus:outline-none focus:ring-2 focus:ring-[#FF6F61] focus:border-[#FF6F61] transition duration-200"
        />
      </div>
    </div>
  );
};

export default Throt;
