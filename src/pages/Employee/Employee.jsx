import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import AddEmployee from "./AddEmployee";
import Pagination from "../Setting/Department/Pagination";
import { useUsersQuery } from "../../redux/api/userApi";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState([]);

  const { data, isLoading } = useUsersQuery();

  const handleAddEmployee = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (perPage) => {
    setPerPage(perPage);
  };

  useEffect(() => {
    if (data) {
      // Apply pagination
      const startIndex = (currentPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      setFilteredData(data.slice(startIndex, endIndex));
    }
  }, [data, currentPage, perPage]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <svg
              role="status"
              className="inline h-8 w-8 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-purple-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        <>
          <section className="px-6 pt-6 pb-8 bg-gray-50">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-700">Employee</h1>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddEmployee}
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
                >
                  <FaPlus className="mr-2" />
                  <span>Add Employee</span>
                </button>
              </div>
            </div>

            <div className="mt-4 mb-6">
              <input
                type="text"
                placeholder="Search Employee..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
              />
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full table-auto  ">
                <thead className="text-sm font-medium text-gray-500 bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-large text-left rtl:text-right text-gray-500 border"
                    >
                      Employee name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-large text-left rtl:text-right text-gray-500 border"
                    >
                      EMPID
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-large text-left rtl:text-right text-gray-500 border"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-large text-left rtl:text-right text-gray-500 border"
                    >
                      Contact
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-large text-left rtl:text-right text-gray-500 border "
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-large text-left rtl:text-right text-gray-500 border"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-black font-medium bg-white divide-y divide-gray-200">
                  {filteredData?.map((user, index) => (
                    <tr
                      key={user.id}
                      className={index % 2 === 0 ? "" : "bg-gray-100"}
                    >
                      <td className="px-4 py-3 border">
                        {user.fname} {user.lname}
                      </td>
                      <td className="px-4 py-3 border">{user.userName}</td>
                      <td className="px-4 py-3 border">{user.email}</td>
                      <td className="px-4 py-3 border">{user.contactNo}</td>
                      <td className="px-4 py-3 border">{user.role}</td>
                      <td className="px-4 py-3 border whitespace-nowrap">
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
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex justify-end shadow-md p-3 rounded-lg">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(data.length / perPage)}
                  perPageOptions={[5, 10, 20]}
                  perPage={perPage}
                  onPageChange={handlePageChange}
                  onPerPageChange={handlePerPageChange}
                />
              </div>
            </div>
          </section>
        </>
      )}

      <AddEmployee isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Employee;
