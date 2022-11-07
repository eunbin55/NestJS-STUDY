import React from "react";

export const Pagenation = ({ total, limit, currentPage, setCurrentPage }) => {
  const numPages = Math.ceil(total / limit);
  console.log(numPages);
  return (
    <div>
      <nav>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              aria-current={currentPage === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === numPages}
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};
