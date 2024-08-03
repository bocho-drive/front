import ProfileModal from '@/components/organisms/ProfileModal';
import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import { useModal } from '@/components/templates/Modal/useModal';
// import Tab from '@/components/templates/Tab/Tab';
import * as S from '@/styles/index.style';

const MyPage = () => {
  const handleOpen = useModal((state) => state.handleOpen);
  return (
    <HeaderFooterLayout>
      <S.div.Column $width={50} $gap={100}>
        <S.div.Column $align="center" $gap={20}>
          <S.div.Avatar $size="large" />
          <S.h.H1>회원이름</S.h.H1>
          <S.button.Button $colors="primary" $outline $size="large" onClick={() => handleOpen(1, 'profile')}>
            <S.h.H5>편집</S.h.H5>
          </S.button.Button>
        </S.div.Column>

        {/* <Tab /> */}
      </S.div.Column>

      <ProfileModal />
    </HeaderFooterLayout>
  );
};

export default MyPage;
