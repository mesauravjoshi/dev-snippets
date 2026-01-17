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
    <div className="p-6 max-w-3xl mx-auto bg-white">
      <div className="overflow-x-auto border rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left font-semibold text-gray-700"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-gray-800">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* -------- Pagination Controls -------- */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={`px-4 py-2 rounded-lg border ${
            table.getCanPreviousPage()
              ? "bg-white hover:bg-gray-100"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Previous
        </button>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={`px-4 py-2 rounded-lg border ${
            table.getCanNextPage()
              ? "bg-white hover:bg-gray-100"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
