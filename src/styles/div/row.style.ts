import styled from 'styled-components';

interface RowProps {
  $gap?: number;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ $gap }) => $gap && `gap: ${$gap}px;`}
`;
