import SearchBar from '@/components/atoms/SearchBar';
import Sidebar from '@/components/atoms/Sidebar';
import ChallengePostList from '@/components/organisms/ChallengePostList';
import { useNavigate } from 'react-router-dom';

import * as S from '@/styles/index.style';

const AdminChallenge = () => {

  const navigate = useNavigate();
  const handleToNew = () => navigate('/admin/challenge/new');

  return (
    <S.div.Container $width={100}>
      <S.div.Row $gap={20} $width={90} $justify="center">
        <Sidebar />
        <S.div.MainContent>
          <S.div.Column $gap={20}>
            <SearchBar />
            <S.button.Button onClick={handleToNew}>작성하기</S.button.Button>
            <ChallengePostList />
          </S.div.Column>
        </S.div.MainContent>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminChallenge;
