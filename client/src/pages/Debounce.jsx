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

  return (
    <div className='h-7 m-4 items-center justify-center flex flex-col'>
      <h2 className='m-4'>Debouce</h2>
      <input
        type="text"
        name='query'
        className='bg-zinc-700 text-red-200'
        value={input}
        onChange={handleChange}
      />
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