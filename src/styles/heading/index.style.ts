import styled, { css } from 'styled-components';
import { maxLineStyle, MaxLineStyleProps } from '../css.style';

const CommStyle = css`
  font-weight: bold;
  margin: 0;
`;

export const h1 = styled.h1<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 2rem;
  ${maxLineStyle}
`;
export const h2 = styled.h2<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 1.5rem;
  ${maxLineStyle}
`;
export const h3 = styled.h3<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 1.25rem;
  ${maxLineStyle}
`;
export const h4 = styled.h4<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 1rem;
  ${maxLineStyle}
`;
export const h5 = styled.h5<MaxLineStyleProps>`
  ${CommStyle}
  font-size: 0.875rem;
  ${maxLineStyle}
`;
