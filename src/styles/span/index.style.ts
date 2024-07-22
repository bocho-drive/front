import styled from 'styled-components';

interface BadgeProps {
  $color?: 'primary' | 'secondary' | 'warning';
}

export const Badge = styled.span<BadgeProps>`
  width: fit-content;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;

  background-color: ${({ theme, $color }) => theme.colors[$color || 'primary']};
`;
