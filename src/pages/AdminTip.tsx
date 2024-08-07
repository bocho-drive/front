import SearchBar from '@/components/atoms/SearchBar';
import Sidebar from '@/components/atoms/Sidebar';
import TipPostList from '@/components/organisms/TipPostList';

import * as S from '@/styles/index.style';

const AdminTip = () => {
  return (
    <S.div.Container $width={100}>
      <S.div.Row $width={90} $justify="center">
        <Sidebar />
        <S.div.MainContent>
          <S.div.Column $gap={20}>
            <SearchBar />
            <TipPostList />
          </S.div.Column>
        </S.div.MainContent>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminTip;
