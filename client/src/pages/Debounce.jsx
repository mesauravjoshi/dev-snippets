import { useState, useMemo, useEffect } from 'react';
import useDebounce from '../hook/useDebounce';

const Debounce = () => {
  const [input, setInput] = useState("");

  const callApi = (e) => {
    console.log("Calling api query", e.target.value);
  };

  const debouncedCallApi = useDebounce(callApi, 500);

  const handleChange = (e) => {
    setInput(e.target.value);
    debouncedCallApi(e);
  };

  // const debounce = (func, wait) => {
  //   let timeId
  //   return (...args) => {
  //     clearInterval(timeId)
  //     timeId = setTimeout(() => {
  //       func(...args)
  //     }, [wait])
  //   }
  // }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C1C] px-4">
      <div className="w-full max-w-md bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-[#F5E8D8] mb-4 text-center">
          Debounce Demo
        </h2>

        <p className="text-sm text-[#DAA520] mb-5 text-center">
          API call triggers after 2 seconds of inactivity
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

export default Debounce;

// React.useEffect(() => {
//   const getData = setTimeout(() => {
//     console.log('input:', input);
//   }, 400);

//   return () => clearInterval(getData)
// }, [input])