import styled, { css } from 'styled-components';

export const TextButtonStyle = css<TextButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  ${({ $padding = 10 }) => $padding && `padding: ${$padding}px;`}

  &:hover {
    background-color: #f0f0f0;
  }

  ${({ $outline, theme }) =>
    $outline &&
    css`
      background-color: transparent;
      border: 2px solid ${theme.colors.default};
      border-radius: 10px;
    `}

  ${({ $align = 'center' }) => $align && `text-align: ${$align};`}
`;

export interface TextButtonProps {
  $outline?: boolean;
  $align?: 'left' | 'center' | 'right';
  $padding?: number;
}

export const TextButton = styled.button<TextButtonProps>`
  ${TextButtonStyle}
`;
