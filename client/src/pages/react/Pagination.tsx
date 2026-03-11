import { useState, useEffect, useCallback } from "react";
const limit = 10
const totaPages = 20
const Pagination = () => {
  // const Pagination = ({limit, totaPages}) => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = useCallback(async (skip) => {
    // console.log('Rendering function');
    if (skip > (limit * totaPages)) return;
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    const data = await res.json();
    // console.log(data.products);
    setData(data.products)
  }, [])
  // console.log(skip === (limit * (totaPages - 1)));
  // console.log(totaPages - 1);
  // console.log('skip', skip);
  // console.log('limit', limit);
  // console.log('totaPages', totaPages);
  // console.log('current page', pageNumber);

  useEffect(() => {
    fetchData(skip);
  }, [skip, fetchData])

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-[#F5E8D8] py-4 border-b border-[#2A2A2A]">
        Pagination
      </h2>

      <div className="min-h-screen bg-[#1C1C1C] px-4 py-8 flex justify-center">
        <div className="w-full max-w-4xl">

          <div className="overflow-x-auto rounded-xl border border-[#2A2A2A] shadow-lg">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#262626]">
                <tr>
                  <th className="px-4py-3text-lefttext-smfont-semiboldtext-[#DAA520]border-bborder-[#3A3A3A]">
                    S. no
                  </th>
                  <th className="px-4py-3text-lefttext-smfont-semiboldtext-[#DAA520]border-bborder-[#3A3A3A]">
                    Title
                  </th>
                  <th className="px-4py-3text-lefttext-smfont-semiboldtext-[#DAA520]border-bborder-[#3A3A3A]">
                    Category
                  </th>
                  <th className="px-4py-3text-lefttext-smfont-semiboldtext-[#DAA520]border-bborder-[#3A3A3A]">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                  data.length > 0 && data.map((product) => {
                    return (
                      <tr className="border-b border-[#2A2A2A]" key={product.id}>
                        <td className="px-4 py-3 text-sm text-[#F5E8D8]" >
                          {product.id}
                        </td>
                        <td className="px-4 py-3 text-sm text-[#F5E8D8]" >
                          {product.title}
                        </td>
                        <td className="px-4 py-3 text-sm text-[#F5E8D8]">
                          {product.category}
                        </td>
                        <td className="px-4 py-3 text-sm text-[#F5E8D8]">
                          {product.price}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => {
                // if (skip === 0) return;
                setSkip(prev => prev - limit)
                setPageNumber(prev => prev - 1)
              }}
              disabled={skip === 0}
              className={`px-4 py-2 rounded-lg border text-sm
              ${skip != 0
                  ? "border-[#3A3A3A] text-[#F5E8D8] bg-[#262626] cursor-pointer"
                  : "border-[#2A2A2A] text-[#6B6B6B] bg-[#1C1C1C] cursor-not-allowed"
                }`}
            >
              Previous
            </button>

            {
              Array.from({ length: totaPages }, (v, i) => i).map((num, index) => {
                return (
                  < button
                    key={index}
                    className={`px-4 py-2 rounded-lg border text-sm border-[#3A3A3A] bg-[#262626] cursor-pointer ${pageNumber === num + 1 ? 'text-[#0cec10] px-5 py-3' : 'text-[#F5E8D8]'} `}
                    onClick={() => {
                      setSkip((num) * limit)
                      setPageNumber(num + 1)
                    }}
                  >
                    {num + 1}
                  </button>
                )
              })
            }

            <button
              onClick={() => {
                // if (skip >= 20) return;
                setSkip(prev => prev + limit)
                setPageNumber(prev => prev + 1)
              }}
              disabled={skip === (limit * (totaPages - 1))}
              className={`px-4 py-2 rounded-lg border text-sm
              ${skip != (limit * (totaPages - 1))
                  ? "border-[#3A3A3A] text-[#F5E8D8] bg-[#262626] cursor-pointer"
                  : "border-[#2A2A2A] text-[#6B6B6B] bg-[#1C1C1C] cursor-not-allowed"
                }
            `}
            >
              Next
            </button>
          </div>

        </div>
      </div>

    </div >
  );
};

export default Pagination;


// import { useEffect, useState } from "react";

// const limit = 10;

// const Pagination = () => {
//   const [data, setData] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const skip = (pageNumber - 1) * limit;

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
//         );
//         const result = await res.json();

//         setData(result.products);
//         setTotalPages(Math.ceil(result.total / limit));
//       } catch (err) {
//         console.error("Failed to fetch data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [pageNumber, skip]);

//   return (
//     <div>
//       {loading ? (
//         <p className="text-center text-white">Loading...</p>
//       ) : (
//         <table>{/* your table here */}</table>
//       )}

//       <div className="flex gap-2 justify-center mt-6">
//         <button
//           disabled={pageNumber === 1}
//           onClick={() => setPageNumber(p => p - 1)}
//         >
//           Previous
//         </button>

//         {Array.from({ length: totalPages }).map((_, i) => (
//           <button
//             key={i}
//             className={pageNumber === i + 1 ? "text-green-500" : ""}
//             onClick={() => setPageNumber(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           disabled={pageNumber === totalPages}
//           onClick={() => setPageNumber(p => p + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination;

