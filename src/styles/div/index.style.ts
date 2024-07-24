export * from './row.style';
export * from './container.style';
export * from './column.style';
export * from './gap.style';
export * from './card.style';
export * from './avatar.style';
export * from './modal.style';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const SearchBarContainer = styled.div`
  margin-bottom: 20px;
`;

export const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px;
  border-right: 1px solid #ccc;
`;
