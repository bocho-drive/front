import { useAuthModal } from '@/@features/Auth/components/AuthModal/useAuthModal';
import { useAuth } from '@/@features/Auth/useAuth';
import { ChallengeCardList } from '@/@features/Challenge/components/ChallengeCardList';
import { CommunityCardList } from '@/@features/Community/components/CommunityCardList';
import { MatchingCardList } from '@/@features/Matching/components/MatchingCardList';
import { VideoCardList } from '@/@features/Video/components/VideoCardList';
import ImagePlaceholder from '@/components/atoms/ImagePlaceholder';
import CommunityCommentCardList from '@/components/organisms/CommunityCommentCardList';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import MoreLayout from '@/components/templates/MoreLayout';
import * as S from '@/styles/index.style';

const GIFS = [
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXdxd290NmNtejNzb3QzbjN5Zms4MXVtbHZodXpndjRwanJybWRxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mlqXcoNp0zpiyFRztL/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hhYmd6bTNpOHNpcGpodjJ6YzNoYzJvcDd0ang3M2EyNWh2eGk5dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/p6zElcl27INBS/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTNtNjBiOWswb3kwZnBlaG0xNXB1MTNxamx1bnRvbDVkZXQ1OW56bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwIPm1P7rhYLuxy/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTg5MzRuZ2d6bGF3NHAyeDc2d2FrNWEwNDBibWlvYjl6N2U0bGpseCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orifaMdlOibgrefMA/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdThrdmVvOGkwaDlhd20wNmtwazhrZ3JxcjAzamdxcThrOTM0NTQwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriePLpKWy6XVdONi/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExankyNmdzNzd4bjJua2owdmJ0NDFmOG1rYmphY2M1MGQ5c2l6NjBpZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JdUP4pxKCWRVAQg/giphy.gif',
] as const;

const LandingPage = () => {
  const randomGif = GIFS[Math.floor(Math.random() * GIFS.length)];

  const isAuth = useAuth((state) => state.isAuth);
  const handleOpenAuthModal = useAuthModal((state) => state.handleOpen);

  return (
    <HeaderFooterLayout>
      <S.div.Column $gap={100}>
        <S.div.Row $gap={20}>
          <S.div.Column $gap={20}>
            <S.h.H2 $fontWeight={300} $highlight={10} style={{ lineHeight: 1.5 }}>
              운전을 잘하고 싶은
              <br />
              사람들을 위한 커뮤니티
            </S.h.H2>

            <S.div.Row $wrap $gap={20}>
              <S.a.Link $outline $align="left" to="/community">
                💬 커뮤니티
              </S.a.Link>
              <S.a.Link $outline $align="left" to="/challenge">
                🏆 운전 챌린지
              </S.a.Link>
              <S.a.Link $outline $align="left" to="/matching">
                🚘 운전 메이트
              </S.a.Link>
            </S.div.Row>

            {!isAuth && (
              <S.button.TextButton $outline $align="left" style={{ width: 'fit-content' }} onClick={handleOpenAuthModal}>
                🛞 로그인하고 시작하기
              </S.button.TextButton>
            )}
          </S.div.Column>
          <ImagePlaceholder>
            <S.img.Img src={randomGif} width={500} height={300} alt="hero-image" $borderRadius={20} />
          </ImagePlaceholder>
        </S.div.Row>

        <S.div.Column $gap={20}>
          <S.h.LayoutTitle>커뮤니티에서 만나요 💬</S.h.LayoutTitle>
          <ErrorSuspenseLayout>
            <MoreLayout to="/community">
              <CommunityCommentCardList />
            </MoreLayout>
          </ErrorSuspenseLayout>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.LayoutTitle>운전고수가 되기 위해 도전해봐요 🏆</S.h.LayoutTitle>
          <ErrorSuspenseLayout>
            <MoreLayout to="/challenge">
              <S.div.Grid $repeat={3}>
                <ChallengeCardList />
              </S.div.Grid>
            </MoreLayout>
          </ErrorSuspenseLayout>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.LayoutTitle>운전 메이트를 찾아봐요 🚘</S.h.LayoutTitle>
          <ErrorSuspenseLayout>
            <MoreLayout to="/matching">
              <S.div.Grid $repeat={3}>
                <MatchingCardList />
              </S.div.Grid>
            </MoreLayout>
          </ErrorSuspenseLayout>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.LayoutTitle>인증된 팁을 공유드려요 📌</S.h.LayoutTitle>
          <ErrorSuspenseLayout>
            <MoreLayout to="/tip">
              <S.div.Grid $repeat={3}>
                <CommunityCardList category="TIP" />
              </S.div.Grid>
            </MoreLayout>
          </ErrorSuspenseLayout>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.LayoutTitle>영상으로 운전을 배워봐요 🎥</S.h.LayoutTitle>
          <ErrorSuspenseLayout>
            <MoreLayout to="/video">
              <S.div.Grid $repeat={6}>
                <VideoCardList />
              </S.div.Grid>
            </MoreLayout>
          </ErrorSuspenseLayout>
        </S.div.Column>
      </S.div.Column>
    </HeaderFooterLayout>
  );
};

export default LandingPage;
