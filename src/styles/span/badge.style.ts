import styled, { css } from 'styled-components';

interface BadgeProps {
  $color?: 'primary' | 'secondary' | 'warning';
  $size?: 'small' | 'medium' | 'large';
}

export const Badge = styled.span<BadgeProps>`
  width: fit-content;
  display: inline-block;

  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;

  background-color: ${({ theme, $color }) => theme.colors[$color || 'primary']};
  ${({ $size = 'medium' }) => {
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
  font-size: 0.8rem;
`;
const mediumStyle = css`
  font-size: 1rem;
`;
const largeStyle = css`
  font-size: 1.2rem;
`;
