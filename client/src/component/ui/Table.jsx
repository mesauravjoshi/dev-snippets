import React, { useMemo } from "react";
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

export default function BasicTable() {
  const columnHelper = createColumnHelper();

  // ------------ DATA ------------
  const data = useMemo(
    () => [
      { id: 1, name: "Saurav", age: 24 },
      { id: 2, name: "Ravi", age: 22 },
      { id: 3, name: "Amit", age: 28 },
      { id: 4, name: "Kunal", age: 26 },
    ],
    []
  );

  // ------------ COLUMNS ------------
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "ID",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("age", {
        header: "Age",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  // ------------ TABLE INSTANCE ------------
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="min-h-screen bg-[#1C1C1C] px-4 py-8 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-[#F5E8D8] mb-4 text-center">
          Basic Table
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[#2A2A2A] shadow-lg">
          <table className="min-w-full border-collapse">
            <thead className="bg-[#262626]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4py-3text-lefttext-smfont-semiboldtext-[#DAA520]border-bborder-[#3A3A3A]"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#2A2A2A]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 text-sm text-[#F5E8D8]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`px-4 py-2 rounded-lg border text-sm
              ${table.getCanPreviousPage()
                ? "border-[#3A3A3A] text-[#F5E8D8] bg-[#262626]"
                : "border-[#2A2A2A] text-[#6B6B6B] bg-[#1C1C1C] cursor-not-allowed"
              }`}
          >
            Previous
          </button>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`px-4 py-2 rounded-lg border text-sm
              ${table.getCanNextPage()
                ? "border-[#3A3A3A] text-[#F5E8D8] bg-[#262626]"
                : "border-[#2A2A2A] text-[#6B6B6B] bg-[#1C1C1C] cursor-not-allowed"
              }
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
