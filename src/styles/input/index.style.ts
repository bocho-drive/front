import styled, { css } from 'styled-components';

interface InputProps {
  $size?: 'small' | 'medium' | 'large';
}

export const Input = styled.input<InputProps>`
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  outline: none;

  ${({ $size = 'small' }) => {
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

const smallStyle = css`
  height: 30px;
  font-size: 14px;
`;
const mediumStyle = css`
  height: 40px;
  font-size: 16px;
`;
const largeStyle = css`
  height: 50px;
  font-size: 18px;
`;
