import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

export const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;

  background-color: transparent;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;
