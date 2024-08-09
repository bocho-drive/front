import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';
import { TextButtonProps, TextButtonStyle } from '../button/text.style';

interface LinkProps {}

export const Link = styled(_Link)<TextButtonProps & LinkProps>`
  ${TextButtonStyle};

  text-decoration: none;
  color: inherit;
`;
