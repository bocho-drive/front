import PostList from '@/components/PostList';
import SearchBar from '@/components/SearchBar';
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
