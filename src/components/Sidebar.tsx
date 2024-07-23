import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px;
  border-right: 1px solid #ccc;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <h2>게시판 1</h2>
      <h2>게시판 2</h2>
    </SidebarContainer>
  );
};

export default Sidebar;
