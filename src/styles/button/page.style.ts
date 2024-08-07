import styled from 'styled-components';

export const PageButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#F0F0F0' : '#ffffff')};
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
