import styled from 'styled-components';

interface FixedModalProps {
  $width?: number;
  $height?: number;
}

export const FixedModal = styled.div<FixedModalProps>`
  ${({ $width }) => $width && `width: ${$width}px;`}
  ${({ $height }) => $height && `height: ${$height}px;`}

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  border-radius: 10px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

interface RelativeModalProps {
  $top?: number;
  $left?: number;
  $right?: number;
  $bottom?: number;
}
export const RelativeModal = styled.div<RelativeModalProps>`
  position: fixed;
  z-index: 999;
  ${({ $top }) => $top !== 0 && `top: ${$top}px;`}
  ${({ $left }) => $left !== 0 && `left: ${$left}px;`}
  ${({ $right }) => $right !== 0 && `right: ${$right}px;`}
  ${({ $bottom }) => $bottom !== 0 && `bottom: ${$bottom}px;`}
`;
