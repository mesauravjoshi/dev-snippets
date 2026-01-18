import { useState, useEffect, useCallback } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [pageLimit, setPageLimit] = useState(25);
  const [skip, setSkip] = useState(0);

  const fetchData = useCallback(async (skip) => {
    console.log('Rendering function');
    if (skip > 25) return;
    const res = await fetch(`https://dummyjson.com/products?limit=5&skip=${skip}`, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    const data = await res.json();
    // console.log(data.products);
    setData(data.products)
  }, [])

  useEffect(() => {
    fetchData(skip);
  }, [skip])

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
                  data.length > 0 && data.map((product, index) => {
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
                if (skip === 0) return;
                // setPageLimit(prev => prev - 1)
                setSkip(prev => prev - 5)
              }}
              className={`px-4 py-2 rounded-lg border text-sm
              ${skip != 0
                  ? "border-[#3A3A3A] text-[#F5E8D8] bg-[#262626] cursor-pointer"
                  : "border-[#2A2A2A] text-[#6B6B6B] bg-[#1C1C1C] cursor-not-allowed"
                }`}
            >
              Previous
            </button>
            <button
              className='px-4 py-2 rounded-lg border text-sm border-[#3A3A3A] text-[#F5E8D8] bg-[#262626]'
              onClick={() => { setPageLimit(prev => prev + 1) }}
            >
              {/* {skip + 5} */}
              JOSHI {pageLimit}
            </button>

            <button
              onClick={() => {
                if (skip >= 20) return;
                // setPageLimit(prev => prev + 1)
                setSkip(prev => prev + 5)
              }}
              className={`px-4 py-2 rounded-lg border text-sm
              ${skip !== 20
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

    </div>
  );
};

export default Pagination;