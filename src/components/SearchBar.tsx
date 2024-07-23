import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="글 제목 or 내용 검색창" />
    </SearchBarContainer>
  );
};

export default SearchBar;
