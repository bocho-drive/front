import styled from 'styled-components';

interface RowProps {
  $gap?: number;
  $wrap?: boolean;
  $between?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ $gap }) => $gap && `gap: ${$gap}px;`}
  ${({ $wrap }) => $wrap && `flex-wrap: wrap;`}
  ${({ $between }) => $between && `justify-content: space-between;`}
`;

interface GridProps {
  $repeat: number;
}
export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ $repeat = 1 }: GridProps) => $repeat}, 1fr);
  gap: 20px;
`;
