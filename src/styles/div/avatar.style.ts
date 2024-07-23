import styled, { css } from 'styled-components';

interface AvatarProps {
  $size?: 'small' | 'medium' | 'large';
}

export const Avatar = styled.div<AvatarProps>`
  border-radius: 50%;
  background-color: lightgray;

  ${({ $size = 'small' }) => {
    switch ($size) {
      case 'small':
        return smallStyle;
      case 'medium':
        return mediumStyle;
      case 'large':
        return largeStyle;
    }
  }}
`;

const smallStyle = css`
  width: 40px;
  height: 40px;
`;

const mediumStyle = css`
  width: 80px;
  height: 80px;
`;

const largeStyle = css`
  width: 150px;
  height: 150px;
`;
