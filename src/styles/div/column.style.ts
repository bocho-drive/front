import styled from 'styled-components';

interface ColumnProps {
  $gap?: number;
  $width?: number;
  $align?: 'center' | 'flex-start' | 'flex-end';
  $justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  $padding?: number;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;

  ${({ $align }) => $align && `align-items: ${$align};`}
  ${({ $justify }) => $justify && `justify-content: ${$justify};`}
  ${({ $width = 100 }) => $width && `width: ${$width}%;`}
  ${({ $gap = 0 }) => $gap && `gap: ${$gap}px;`}
  ${({ $padding = 0 }) => $padding && `padding: ${$padding}px;`}
`;
