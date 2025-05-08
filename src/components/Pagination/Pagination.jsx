import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const effectiveTotalPages = Math.max(1, totalPages);

    return (
        <div className="pagination-container">
            <button
                className="pagination-btn prev"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            <span className="page-indicator">
        Page {currentPage} of {effectiveTotalPages}
      </span>

            <button
                className="pagination-btn next"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === effectiveTotalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;