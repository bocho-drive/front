import styled from 'styled-components';

interface HrProps {
  $height?: number;
}

export const Hr = styled.hr<HrProps>`
  height: ${({ $height }) => $height || 1}px;
  width: 100%;
  background-color: #e0e0e0;
  flex: 1;
`;
