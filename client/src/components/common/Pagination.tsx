import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, setPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        {/* Previous Button */}
        <li>
          <a
            href="#"
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : 0}
          >
            Previous
          </a>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((num) => (
          <li key={num}>
            <a
              href="#"
              onClick={() => setPage(num)}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === num ? 'text-blue-600 border-blue-300 bg-blue-50' : ''}`}
              aria-current={page === num ? 'page' : undefined}
            >
              {num}
            </a>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <a
            href="#"
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
            aria-disabled={page === totalPages}
            tabIndex={page === totalPages ? -1 : 0}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
