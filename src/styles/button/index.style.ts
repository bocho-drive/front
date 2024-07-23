import styled, { css } from 'styled-components';

interface ButtonProps {
  $size?: 'small' | 'medium' | 'large';
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  ${({ $size = 'medium' }) => {
    switch ($size) {
      case 'small':
        return smallStyle;
      case 'medium':
        return mediumStyle;
      case 'large':
        return largeStyle;
      default:
        return mediumStyle;
    }
  }}
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
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
