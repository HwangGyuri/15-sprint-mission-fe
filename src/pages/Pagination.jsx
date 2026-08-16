import styles from './Pagination.module.css';
import arrowLeft from '@/assets/img/ic_arrow_left.svg';
import arrowRight from '@/assets/img/ic_arrow_right.svg';

function Pagination({ page, totalPages, onPageChange }) {
  const visibleCount = Math.min(5, totalPages);

  const maxStartPage = Math.max(totalPages - visibleCount + 1, 1);

  const startPage = Math.min(Math.max(page, 1), maxStartPage);

  const pageNumbers = Array.from(
    { length: visibleCount },
    (_, index) => startPage + index,
  );

  const handlePrevious = () => {
    if (page === 1) {
      return;
    }

    onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page === totalPages) {
      return;
    }

    onPageChange(page + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.pageButton}
        disabled={page === 1}
        onClick={handlePrevious}
        aria-label="이전 페이지"
      >
        <img src={arrowLeft} alt="왼쪽 화살표" />
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          className={`${styles.pageButton} ${pageNumber === page ? styles.active : ''}`}
          onClick={() => onPageChange(pageNumber)}
          aria-label={`${pageNumber}페이지`}
          aria-current={pageNumber === page ? 'page' : undefined}
        >
          {pageNumber}
        </button>
      ))}

      <button
        type="button"
        className={styles.pageButton}
        disabled={page === totalPages}
        onClick={handleNext}
        aria-label="다음 페이지"
      >
        <img src={arrowRight} alt="오른쪽 화살표" />
      </button>
    </div>
  );
}

export default Pagination;
