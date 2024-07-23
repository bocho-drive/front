import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import PostList from './PostList';

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const AdminPage: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <SearchBar />
        <PostList />
      </MainContent>
    </Container>
  );
};

export default AdminPage;
