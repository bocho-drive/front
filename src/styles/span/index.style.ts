import styled, { css } from 'styled-components';

export * from './badge.style';

export const Span = styled.span`
  line-height: 1.5;
`;

export const ErrorSpan = styled.span`
  ${({ theme }) =>
    css`
      color: ${theme.colors.warning};
    `};

  font-size: 0.8rem;
  margin-left: 5px;
`;
