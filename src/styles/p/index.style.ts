import styled from 'styled-components';
import { maxLineStyle } from '../css.style';

interface PProps {
  $maxLines?: number;
}

export const P = styled.p<PProps>`
  font-size: 16px;
  line-height: 1.5;
  margin: 0;

  ${maxLineStyle}
`;
