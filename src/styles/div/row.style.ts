import styled, { css } from 'styled-components';

interface RowProps {
  $gap?: number;
  $wrap?: boolean;
  $between?: boolean;
  $align?: 'center' | 'flex-start' | 'flex-end';
  $justify?: 'center' | 'flex-start' | 'flex-end';
  $width?: number;
  $overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
}

interface ItemProps {
  $itemMinWidth?: number;
  $itemMaxWidth?: number;
}

const itemStyle = css<ItemProps>`
  & > * {
    ${({ $itemMinWidth }) => $itemMinWidth && `min-width: ${$itemMinWidth}px;`}
    ${({ $itemMaxWidth }) => $itemMaxWidth && `max-width: ${$itemMaxWidth}px;`}
  }
`;

export const Row = styled.div<RowProps & ItemProps>`
  display: flex;
  flex-direction: row;

  ${({ $gap }) => $gap && `gap: ${$gap}px;`}
  ${({ $wrap }) => $wrap && `flex-wrap: wrap;`}
    ${({ $between }) => $between && `justify-content: space-between;`}
    ${({ $justify }) => $justify && `justify-content: ${$justify};`}
    ${({ $align }) => $align && `align-items: ${$align};`}
    ${({ $width }) => $width && `width: ${$width}%;`}
    ${({ $overflow }) => $overflow && `overflow: ${$overflow};`}
    
  ${itemStyle}
`;

interface GridProps {
  $repeat: number;
}
export const Grid = styled.div<GridProps & ItemProps>`
  display: grid;
  grid-template-columns: repeat(${({ $repeat = 1 }: GridProps) => $repeat}, 1fr);
  gap: 20px;

  ${itemStyle}

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
