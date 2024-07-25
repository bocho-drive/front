import styled from 'styled-components';

interface CardProps {
  $padding?: number;
}

export const Card = styled.div<CardProps>`
  ${({ $padding = 16 }) => $padding && `padding: ${$padding}px;`}
  border: 1px solid lightgray;
  border-radius: 8px;

  cursor: pointer;
`;
