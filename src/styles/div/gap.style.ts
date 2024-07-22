import styled from 'styled-components';

interface GapProps {
  $width?: number;
  $height?: number;
}

export const Gap = styled.div<GapProps>`
  width: ${({ $width = 0 }) => `${$width}px`};
  height: ${({ $height = 0 }) => `${$height}px`};
`;
