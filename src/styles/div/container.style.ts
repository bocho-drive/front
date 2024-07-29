import styled from 'styled-components';

interface ContainerProps {
  $width?: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $width }) => $width || 100}%;

  max-width: 1440px;
  margin: 0 auto;
`;

export const AbsCenterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
