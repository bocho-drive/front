import styled, { css } from 'styled-components';

export const TextButtonStyle = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TextButton = styled.button`
  ${TextButtonStyle}
`;
