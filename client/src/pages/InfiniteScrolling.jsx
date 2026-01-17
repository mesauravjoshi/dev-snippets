import { useEffect, useRef, useState } from "react";

const dummyData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 221, 22, 23, 24, 25, 26, 27, 28, 29, 30
]
const THRESOLD = 20;

function InfiniteScroll() {
  const [data, setData] = useState(dummyData);
  const [loading, setLoading] = useState(false);

  const laodMore = () => {
    setLoading(true);
    setTimeout(() => {
      setData((prev) => { // add mroe 10 dummy data 
        return prev.map((item, index) => {
          if (index === 9) return;
          else prev.at(-1) + (index + 1)
        })
      })
      setLoading(false);
    }, 3000)
  }

  const handleScroll = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;
    const scrollTop = e.target.scrollTop;

    const remainingScroll = scrollHeight - (scrollTop + clientHeight);

    if (remainingScroll < THRESOLD && !loading) {
      laodMore();
    }
    // console.log('scrollHeight', scrollHeight);
    // console.log('clientHeight', clientHeight);
    // console.log('scrollTop', scrollTop);
    // console.log('scrollBottom', scrollBottom);
  }

  return (
    <div onScroll={handleScroll}>
      <h2>Infinite Scroll</h2>

      <ul>
        {data.map((item) => (
          <li key={item} className='p-2 border-2 border-yellow-900 mb-4'>{item}</li>
        ))}
      </ul>

      <div >
        {loading && <p>Loading...</p>}
      </div>
    </div >
  );
}

export default InfiniteScroll;