import styled, { css } from 'styled-components';

interface TabProps {
  $direction: 'left' | 'right' | 'bottom' | 'top';
  $active: boolean;
}

export const TabButton = styled.button<TabProps>`
  background-color: transparent;
  width: 100%;
  padding: 5px 10px;

  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ $direction }) => $direction === 'left' && `border-left: 3px solid transparent;`}
  ${({ $direction }) => $direction === 'right' && `border-right: 3px solid transparent;`}
  ${({ $direction }) => $direction === 'top' && `border-top: 3px solid transparent;`}
  ${({ $direction }) => $direction === 'bottom' && `border-bottom: 3px solid transparent;`}

  

  ${({ $active, $direction, theme }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      ${$direction === 'left' && `border-left: 3px solid ${theme.colors.primary};`}
      ${$direction === 'right' && `border-right: 3px solid ${theme.colors.primary};`}
      ${$direction === 'bottom' && `border-bottom: 3px solid ${theme.colors.primary};`}
      ${$direction === 'top' && `border-top: 3px solid ${theme.colors.primary};`}
    `}
`;
