import styled from 'styled-components';

interface ContainerProps {
  $width?: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $width }) => $width || 100}%;
`;
