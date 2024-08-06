import MyChallengeVerifyCardList from '@/@features/My/components/MyChallengeCardList';
import MyCommentCardList from '@/@features/My/components/MyCommentCardList';
import MyCommunityCardList from '@/@features/My/components/MyCommunityCardList';
import ProfileModal from '@/components/organisms/ProfileModal';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import { useModal } from '@/components/templates/Modal/useModal';
import Tab from '@/components/templates/Tab/Tab';
import * as S from '@/styles/index.style';

const MyPage = () => {
  const handleOpen = useModal((state) => state.handleOpen);
  return (
    <HeaderFooterLayout>
      <S.div.Column $width={50} $gap={100}>
        <S.div.Column $align="center" $gap={20}>
          <S.h.H1>회원이름</S.h.H1>
          <S.button.Button $colors="primary" $outline $size="large" onClick={() => handleOpen(1, 'profile')}>
            <S.h.H5>편집</S.h.H5>
          </S.button.Button>
        </S.div.Column>

        <Tab
          tabHeaders={['내가 쓴 글', '내가 쓴 댓글', '내 챌린지']}
          tabBodys={[
            <ErrorSuspenseLayout>
              <MyCommunityCardList />
            </ErrorSuspenseLayout>,
            <ErrorSuspenseLayout>
              <MyCommentCardList />
            </ErrorSuspenseLayout>,
            <ErrorSuspenseLayout>
              <MyChallengeVerifyCardList />
            </ErrorSuspenseLayout>,
          ]}
        />
      </S.div.Column>

      <ProfileModal />
    </HeaderFooterLayout>
  );
};

export default MyPage;
