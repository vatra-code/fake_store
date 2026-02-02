import React from 'react';

import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const MAX_VISIBLE_PAGES = 5;
const PAGES_AT_EDGE = 4;
const START_EDGE_THRESHOLD = PAGES_AT_EDGE - 1;
const END_EDGE_OFFSET = 2;
const PAGES_EACH_SIDE_IN_MIDDLE = 1;

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
  onNext,
  onPrevious,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= MAX_VISIBLE_PAGES) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= START_EDGE_THRESHOLD) {
        for (let i = 1; i <= PAGES_AT_EDGE; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - END_EDGE_OFFSET) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - END_EDGE_OFFSET; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - PAGES_EACH_SIDE_IN_MIDDLE; i <= currentPage + PAGES_EACH_SIDE_IN_MIDDLE; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={onPrevious}
        disabled={!hasPreviousPage}
        aria-label="Previous page"
      >
        Previous
      </button>

      <div className={styles.pageNumbers}>
        {getPageNumbers().map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              className={`${styles.pageButton} ${isActive ? styles.active : ''}`}
              onClick={() => onPageChange(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        className={styles.button}
        onClick={onNext}
        disabled={!hasNextPage}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

