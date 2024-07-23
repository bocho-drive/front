import styled, { css } from 'styled-components';

interface TabProps {
  $active: boolean;
}

export const TabButton = styled.button<TabProps>`
  background-color: transparent;
  width: 100%;
  padding: 5px 10px;

  border: none;
  border-bottom: 3px solid transparent;

  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    css`
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    `}
`;
