import styled from 'styled-components';

interface PProps {
  $maxLines?: number;
}

export const P = styled.p<PProps>`
  font-size: 16px;
  line-height: 1.5;
  margin: 0;

  ${({ $maxLines }) =>
    $maxLines &&
    `
        display: -webkit-box;
        -webkit-line-clamp: ${$maxLines};
        -webkit-box-orient: vertical;
        overflow: hidden;
    `}
`;
