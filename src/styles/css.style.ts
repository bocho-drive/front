import { css } from 'styled-components';

export interface MaxLineStyleProps {
  $maxLines?: number;
}
export const maxLineStyle = css<MaxLineStyleProps>`
  ${({ $maxLines }) =>
    $maxLines &&
    `
          display: -webkit-box;
          -webkit-line-clamp: ${$maxLines};
          -webkit-box-orient: vertical;
          overflow: hidden;
      `}
`;
