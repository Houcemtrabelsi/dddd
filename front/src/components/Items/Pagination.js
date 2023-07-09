import React, { useState } from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 2px;
  border: none;
  background-color: ${({ active }) => (active? '#333' : '#ddd')};
  color: ${({ active }) => (active? '#fff' : '#333')};
  cursor: ${({ active }) => (active? 'default' : 'pointer')};
`;

const Pagination = ({ totalPages, activePage, onPageChange }) => {
 

  return (
    <PaginationWrapper>
      {[...Array(totalPages)].map((_, index) => (
        <PageButton
          key={index}
          active={index + 1 === activePage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;