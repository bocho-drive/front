import * as S from '@/styles/index.style';
import LineText from './LineText';

const Sidebar = () => {
  return (
    <S.div.SidebarContainer>
      <S.div.Column $gap={20} $align="center">
        <img src="/icon.png" alt="logo" width="70" />
        <S.h.H2>보초운전</S.h.H2>

        <LineText />

        <h2>게시판 1</h2>
        <h2>게시판 2</h2>
      </S.div.Column>
    </S.div.SidebarContainer>
  );
};

export default Sidebar;
