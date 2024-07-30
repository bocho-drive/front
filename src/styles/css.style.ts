import { css } from 'styled-components';

export interface MaxLineStyleProps {
  $maxLines?: number;
}
export const maxLineStyle = css<MaxLineStyleProps>`
  ${({ $maxLines }) =>
    $maxLines &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${$maxLines};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;

export interface FontWeightStyleProps {
  $fontWeight?: number;
}
export const fontWeightStyle = css<FontWeightStyleProps>`
  ${({ $fontWeight }) =>
    $fontWeight &&
    css`
      font-weight: ${$fontWeight};
    `}
`;

export interface HighLightStyleProps {
  $highlight?: number;
}

export const HighLightStyle = css<HighLightStyleProps>`
  ${({ theme, $highlight }) =>
    $highlight &&
    css`
      box-shadow: inset 0 -${$highlight}px ${theme.colors.primary};
    `}
`;

export const CardStyle = css`
  border: 1px solid lightgray;
  border-radius: 8px;
`;
