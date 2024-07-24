import SearchBar from '@/components/atoms/SearchBar';
import Sidebar from '@/components/atoms/Sidebar';
import PostList from '@/components/organisms/PostList';

import * as S from '@/styles/index.style';

const AdminPage = () => {
  return (
    <S.div.Container>
      <Sidebar />
      <S.div.MainContent>
        <SearchBar />
        <PostList />
      </S.div.MainContent>
    </S.div.Container>
  );
};

export default AdminPage;
