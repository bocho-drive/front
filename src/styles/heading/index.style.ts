import styled, { css } from 'styled-components';
import { fontWeightStyle, FontWeightStyleProps, HighLightStyle, HighLightStyleProps, maxLineStyle, MaxLineStyleProps } from '../css.style';

const CommStyle = css`
  font-weight: bold;

  margin: 0;
`;

export const H1 = styled.h1<MaxLineStyleProps & FontWeightStyleProps & HighLightStyleProps>`
  ${CommStyle}
  font-size: 2rem;
  ${maxLineStyle}
  ${fontWeightStyle}
  ${HighLightStyle}
`;
export const H2 = styled.h2<MaxLineStyleProps & FontWeightStyleProps & HighLightStyleProps>`
  ${CommStyle}
  font-size: 1.5rem;
  ${maxLineStyle}
  ${fontWeightStyle}
  ${HighLightStyle}
`;
export const H3 = styled.h3<MaxLineStyleProps & FontWeightStyleProps & HighLightStyleProps>`
  ${CommStyle}
  font-size: 1.25rem;
  ${maxLineStyle}
  ${fontWeightStyle}
  ${HighLightStyle}
`;
export const H4 = styled.h4<MaxLineStyleProps & FontWeightStyleProps & HighLightStyleProps>`
  ${CommStyle}
  font-size: 1rem;
  ${maxLineStyle}
  ${fontWeightStyle}
  ${HighLightStyle}
`;
export const H5 = styled.h5<MaxLineStyleProps & FontWeightStyleProps & HighLightStyleProps>`
  ${CommStyle}
  font-size: 0.875rem;
  ${maxLineStyle}
  ${fontWeightStyle}
  ${HighLightStyle}
`;

export const LayoutTitle = styled(H1)`
  font-weight: 300;
`;
export const Title = styled(H2)`
  font-weight: 300;
`;
