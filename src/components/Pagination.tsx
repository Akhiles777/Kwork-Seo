'use client';

import "@/styles/pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  
  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const windowSize = 3;
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, start + windowSize - 1);
    const realStart = Math.max(1, end - windowSize + 1);

    if (realStart > 1) pages.push("...");
    for (let i = realStart; i <= end; i++) {
      pages.push(i);
    }
    if (end < totalPages) pages.push("...");

    return pages;
  };

  const pages = getPages();

  return (
    <div className="pagination-container">
      <button
        className="circle-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ←
      </button>

      {pages.map((p, index) => (
        <button
          key={index}
          disabled={p === "..."}
          onClick={() => typeof p === "number" && onPageChange(p)}
          className={`circle-btn ${p === currentPage ? "active" : ""} ${p === "..." ? "dots" : ""}`}
        >
          {p}
        </button>
      ))}

      <button
        className="circle-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
