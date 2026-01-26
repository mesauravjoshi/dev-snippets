import { useEffect, useRef, useState } from "react";

const dummyData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 221, 22, 23, 24, 25, 26, 27, 28, 29, 30
]
const THRESOLD = 20;

function InfiniteScroll() {
  const [data, setData] = useState(dummyData);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    // Call API and update state 
    setTimeout(() => {
      setData((prev) => {
        const lastItem = prev.at(-1);
        const newItems = Array.from({ length: 10 }, (_, i) => lastItem + i + 1);
        return [...prev, ...newItems];
      });

      setLoading(false);
    }, 1000);
  };

  const handleScroll = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;
    const scrollTop = e.target.scrollTop;

    const remainingScroll = scrollHeight - (scrollTop + clientHeight);

    if (remainingScroll < THRESOLD && !loading) {
      loadMore();
    }
    // console.log('scrollHeight', scrollHeight);
    // console.log('clientHeight', clientHeight);
    // console.log('scrollTop', scrollTop);
    // console.log('scrollBottom', scrollBottom);
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl shadow-lg">
        <h2 className="text-center text-lg font-semibold text-[#F5E8D8] py-4 border-b border-[#2A2A2A]">
          Infinite Scroll
        </h2>

        <div
          onScroll={handleScroll}
          className="
            max-h-[60vh]
            
            overflow-y-auto
            px-4
            py-4
          "
        >
          <ul className="space-y-3">
            {data.map((item) => (
              <li
                key={item}
                className="
                  p-3
                  rounded-lg
                  bg-[#262626]
                  border
                  border-[#3A3A3A]
                  text-[#F5E8D8]
                  text-sm
                "
              >
                Item #{item}
              </li>
            ))}
          </ul>

          {loading && (
            <p className="text-center text-sm text-[#DAA520] mt-4">
              Loading more items…
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfiniteScroll;