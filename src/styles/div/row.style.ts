import styled from 'styled-components';

interface RowProps {
  $gap?: number;
  $wrap?: boolean;
  $between?: boolean;
  $align?: 'center' | 'flex-start' | 'flex-end';
  $justify?: 'center' | 'flex-start' | 'flex-end';
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;

  ${({ $gap }) => $gap && `gap: ${$gap}px;`}
  ${({ $wrap }) => $wrap && `flex-wrap: wrap;`}
  ${({ $between }) => $between && `justify-content: space-between;`}
  ${({ $justify }) => $justify && `justify-content: ${$justify};`}
  ${({ $align }) => $align && `align-items: ${$align};`}
`;

interface GridProps {
  $repeat: number;
}
export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ $repeat = 1 }: GridProps) => $repeat}, 1fr);
  gap: 20px;
`;
