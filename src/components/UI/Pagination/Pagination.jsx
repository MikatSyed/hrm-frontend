import React from "react";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  perPageOptions = [5, 10, 20],
  perPage = 5,
  onPageChange,
  onPerPageChange,
}) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const handlePerPageChange = (e) => {
    const value = parseInt(e.target.value);
    onPerPageChange(value);
  };

  return (
    <div className="flex justify-between items-center shadow-md p-3 rounded-lg">
      <div>
        <button
          className={`px-3 py-1 mr-2 text-white bg-purple-600 hover:bg-purple-500 rounded-md ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-3 py-1 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-3 py-1 ml-2 bg-purple-600  text-white hover:bg-purple-500 rounded-md ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div>
        <span className="text-gray-700 ml-2">Per Page:</span>
        <select
          className="px-2 py-1 ml-2 bg-gray-200 rounded-md"
          value={perPage}
          onChange={handlePerPageChange}
        >
          {perPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
