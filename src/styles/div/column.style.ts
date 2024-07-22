import styled from 'styled-components';

interface ColumnProps {
  $gap?: number;
  $width?: number;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;

  ${({ $width }) => $width && `width: ${$width}%;`}
  ${({ $gap = 0 }) => $gap && `gap: ${$gap}px;`}
`;
