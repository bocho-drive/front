import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';
import { TextButtonProps, TextButtonStyle } from '../button/text.style';

export const Link = styled(_Link)<TextButtonProps>`
  ${TextButtonStyle};

  text-decoration: none;
  color: inherit;
  padding: 15px;
`;
