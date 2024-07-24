import SearchBar from '@/components/atoms/SearchBar';
import PostList from '@/components/organisms/PostList';

import * as S from '@/styles/index.style';

const AdminPage = () => {
  return (
    <S.div.Container>
      <S.div.MainContent>
        <SearchBar />
        <PostList />
      </S.div.MainContent>
    </S.div.Container>
  );
};

export default AdminPage;
