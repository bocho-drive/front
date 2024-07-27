import styled from 'styled-components';

interface ImgProps {
  $borderRadius?: number;
}

export const Img = styled.img<ImgProps>`
  ${({ $borderRadius }) => $borderRadius && `border-radius: ${$borderRadius}px;`}

  object-fit: cover;
`;
