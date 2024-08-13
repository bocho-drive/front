import MyChallengeVerifyCardList from '@/@features/My/components/MyChallengeCardList';
import MyCommentCardList from '@/@features/My/components/MyCommentCardList';
import MyCommunityCardList from '@/@features/My/components/MyCommunityCardList';
import { useMyProfileQuery } from '@/@features/My/useMyQuery';
import ProfileModal from '@/components/organisms/ProfileModal';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import LoadingLayout from '@/components/templates/LoadingLayout';
import Tab from '@/components/templates/Tab/Tab';
import * as S from '@/styles/index.style';

const MyPage = () => {
  const { data, isLoading } = useMyProfileQuery();

  return (
    <HeaderFooterLayout>
      <S.div.Column $width={50} $gap={100}>
        <LoadingLayout loading={isLoading}>
          {data && (
            <S.div.Card>
              <S.div.Column $align="center" $gap={20}>
                <S.h.H3>👋 안녕하세요, {data.nickname} 님</S.h.H3>
                <S.small.Small>
                  <S.span.Badge>
                    {data.userRole === 'USER' && '일반 사용자'}
                    {data.userRole === 'ADMIN' && '관리자'}
                    {data.userRole === 'TEACHER' && '선생님'}
                  </S.span.Badge>
                </S.small.Small>
              </S.div.Column>
            </S.div.Card>
          )}
        </LoadingLayout>

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
