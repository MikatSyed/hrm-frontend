import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "./Pagination";
import AddDepartment from "./AddDepartment";

const Department = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDepartment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="px-6 pt-6 pb-8 bg-gray-50">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-700">Department</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAddDepartment}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              <FaPlus className="mr-2" />
              <span>Add Department</span>
            </button>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <input
            type="text"
            placeholder="Search department..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
          />
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="text-sm font-medium text-gray-500 bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 px-4 text-sm font-large text-left rtl:text-right text-gray-500"
                >
                  Department name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-large text-left rtl:text-right text-gray-500 "
                >
                  CreatedAt
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-large text-left rtl:text-right text-gray-500 "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">
                  Network Engineering
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  Dec 4, 2023 10:45 PM
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <button className="inline-flex items-center justify-center px-2 py-1 mr-2 text-white transition bg-purple-600 rounded-md hover:bg-purple-500">
                    <FaEdit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button className="inline-flex items-center justify-center px-2 py-1 text-white transition bg-red-600 rounded-md hover:bg-red-500">
                    <FaTrash className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex justify-end shadow-md p-3 rounded-lg">
            <Pagination />
          </div>
        </div>
      </section>
      <AddDepartment isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Department;
