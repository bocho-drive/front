import SearchBar from '@/components/atoms/SearchBar';
import Sidebar from '@/components/atoms/Sidebar';
import GeneralPostList from '@/components/organisms/GeneralPostList';

import * as S from '@/styles/index.style';

const AdminGeneral = () => {
  return (
    <S.div.Container $width={100}>
      <S.div.Row $gap={20} $width={90} $justify="center">
        <Sidebar />
        <S.div.MainContent>
          <S.div.Column $gap={20}>
            <SearchBar />
            <GeneralPostList />
          </S.div.Column>
        </S.div.MainContent>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminGeneral;
