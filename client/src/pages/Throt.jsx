import { useMemo, useState } from 'react';

const Throt = () => {
  const [input, setInput] = useState('');

  const throtling = (func, wait) => {
    let timerID = null
    return (...args) => {
      if (timerID) return;
      timerID = setTimeout(() => {
        timerID = null
        func(...args)
      }, wait);
    }
  }
  // const debounce = (func, wait) => {
  //   let timeId
  //   return (...args) => {
  //     clearInterval(timeId)
  //     timeId = setTimeout(() => {
  //       func(...args)
  //     }, [wait])
  //   }
  // }

  const callApi = (e) => {
    console.log('Calling api query', e.target.value);
  }

  const throtCallApi = useMemo(() => throtling(callApi, 2000), [])

  const handleChange = (e) => {
    setInput(e.target.value);
    throtCallApi(e);
  }

  return (
    <div className='h-7 m-4 items-center justify-center flex flex-col'>
      <h2 className='m-4'>Throtling</h2>
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

export default Throt;