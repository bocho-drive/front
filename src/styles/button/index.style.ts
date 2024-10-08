export * from './avatar.style';
export * from './text.style';
export * from './tab.style';

import styled, { css } from 'styled-components';

interface ButtonProps {
  $size?: 'small' | 'medium' | 'large';
  $colors?: 'primary' | 'secondary' | 'warning';
  $outline?: boolean;
  $padding?: number;
  $height?: number;
  $fullWidth?: boolean;
}
interface SizeProps {
  $size?: 'small' | 'medium' | 'large';
  $circle?: boolean;
}

export const Button = styled.button<ButtonProps & SizeProps>`
  ${({ $colors, theme }) =>
    $colors &&
    css`
      background-color: ${theme.colors[$colors]};
      color: #fff;
    `}
  /* background-color: ${({ theme, $colors }) => $colors && theme.colors[$colors]}; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  min-width: fit-content;

  ${({ $height }) => $height && `height: ${$height}px;`}
  ${({ $padding = 10 }) => $padding && `padding: ${$padding}px;`}
  ${({ $fullWidth }) => $fullWidth && `width: 100%;`}

  ${({ $circle }) =>
    $circle &&
    css`
      border-radius: 50%;
    `}

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

  ${({ $outline, $colors = 'primary' }) =>
    $outline &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors[$colors]};
      color: ${({ theme }) => theme.colors[$colors]};
    `}
`;

export const IconButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const smallStyle = css<SizeProps>`
  ${({ $circle }) =>
    $circle &&
    css`
      width: 30px;
      height: 30px;
    `}
  font-size: 0.8rem;
  padding: 5px 10px;
`;

const mediumStyle = css<SizeProps>`
  ${({ $circle }) =>
    $circle &&
    css`
      width: 40px;
      height: 40px;
    `}
  font-size: 1rem;
  padding: 10px 20px;
`;

const largeStyle = css<SizeProps>`
  ${({ $circle }) =>
    $circle &&
    css`
      width: 50px;
      height: 50px;
    `}
  font-size: 1.2rem;
  padding: 15px 30px;
`;

export const PageButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#F0F0F0' : '#ffffff')};
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
