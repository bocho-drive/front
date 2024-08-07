import SearchBar from '@/components/atoms/SearchBar';
import Sidebar from '@/components/atoms/Sidebar';
import ChallengePostList from '@/components/organisms/ChallengePostList';

import * as S from '@/styles/index.style';

const AdminChallenge = () => {
  return (
    <S.div.Container $width={100}>
      <S.div.Row $width={90} $justify="center">
        <Sidebar />
        <S.div.MainContent>
          <S.div.Column $gap={20}>
            <SearchBar />
            <ChallengePostList />
          </S.div.Column>
        </S.div.MainContent>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminChallenge;
