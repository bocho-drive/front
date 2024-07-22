import styled, { css } from 'styled-components';
import { maxLineStyle, MaxLineStyleProps } from '../css.style';

const CommStyle = css`
  font-weight: bold;
  margin: 0;
`;

export const H1 = styled.h1<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 2rem;
  ${maxLineStyle}
`;
export const H2 = styled.h2<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 1.5rem;
  ${maxLineStyle}
`;
export const H3 = styled.h3<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 1.25rem;
  ${maxLineStyle}
`;
export const H4 = styled.h4<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 1rem;
  ${maxLineStyle}
`;
export const H5 = styled.h5<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 0.875rem;
  ${maxLineStyle}
`;
