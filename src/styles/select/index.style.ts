import styled, { css } from 'styled-components';

interface SelectProps {
    $colors?: 'primary' | 'secondary' | 'warning' | 'default';
    $outline?: boolean;
    $fullWidth?: boolean;
}

interface SizeProps {
    $size?: 'small' | 'medium' | 'large';
    $circle?: boolean;
  }

export const Select = styled.select<SelectProps & SizeProps>`
  background-color:  ${({ theme, $colors = 'default'}) => $colors && theme.colors[$colors]};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;

  ${({ $fullWidth }) => $fullWidth && `width: 100%;`}

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