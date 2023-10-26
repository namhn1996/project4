import React from "react";

const toArray = (number: number) => {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push("");
  }
  return arr;
};
interface PaginationProps {
  total: number;
  pageNumber: number;
  currentPage: number;
  handleChangePage: (pageIndex: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  total,
  pageNumber,
  currentPage,
  handleChangePage,
}) => {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => currentPage > 1 && handleChangePage(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {toArray(Math.ceil(total / pageNumber)).map((e, i) => (
          <li
            className={`page-item ${currentPage === i + 1 && "active"}`}
            key={i}
          >
            <button
              className="page-link"
              onClick={() => handleChangePage(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {
              if (currentPage < Math.ceil(total / pageNumber)) {
                handleChangePage(currentPage + 1);
              }
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
