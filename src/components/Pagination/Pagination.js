import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const Paginate = styled(ReactPaginate)`
  list-style: none;
  margin: 0 auto;
  
  li {
    display: inline-block;

    a {
      background-color: #ddd;
      padding: 9px 15px;
      cursor: pointer;
      transition: .3s;
      
      &:hover {
        background-color: #eee;
      }
    }
    
    &:not(:last-child) {
      margin: 0 10px 10px 0;
    }
  }
  
  .active {
    background-color: #000;
    color: #ffffff;
  }
`

const Pagination = ({ currentPage, setPage, totalPages }) => {
    return (
        <Paginate
            nextLabel=">"
            onPageChange={setPage}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={totalPages}
            forcePage={currentPage}
            previousLabel="<"
            breakLabel="..."
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    )
}

export { Pagination }