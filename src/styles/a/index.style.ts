import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';
import { TextButtonStyle } from '../button/text.style';

export const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;
  text-align: center;

  ${TextButtonStyle}
`;
