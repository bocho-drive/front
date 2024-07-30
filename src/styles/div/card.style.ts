import styled from 'styled-components';
import { CardStyle } from '../css.style';

interface CardProps {
  $padding?: number;
}

export const Card = styled.div<CardProps>`
  ${({ $padding = 16 }) => $padding && `padding: ${$padding}px;`}

  cursor: pointer;

  ${CardStyle}
`;
