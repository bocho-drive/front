import HeaderFooterLayout from './HeaderFooterLayout';
import * as S from '@/styles/index.style';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

interface Props {
  children: React.ReactNode;
}

const DriveLayout = ({ children }: Props) => {
  const { isLogin, userInfo } = useAuthStore((state) => ({
    isLogin: state.isLogin(),
    userInfo: state.userInfo,
  }));

  return (
    <HeaderFooterLayout>
      <S.div.Row $gap={50} $width={100}>
        <S.div.Column $width={70}>{children}</S.div.Column>

        <S.div.Column $gap={10} style={{ flex: 1 }}>
          <S.div.Card>
            <S.div.Column $gap={20}>
              {isLogin && (
                <S.div.Column $align="center" $gap={10}>
                  <S.h.H4>👋 안녕하세요, {userInfo?.nickname}님</S.h.H4>
                  <S.small.Small>오늘도 안전운전하세요.</S.small.Small>
                </S.div.Column>
              )}

              <S.div.Column $gap={10}>
                <S.a.Link to="/challenge" $outline $align="left">
                  <S.h.H4>🏆 챌린지</S.h.H4>
                </S.a.Link>
                <S.a.Link to="/matching" $outline $align="left">
                  <S.h.H4>🚘 운전연수</S.h.H4>
                </S.a.Link>
                <S.a.Link to="/tip" $outline $align="left">
                  <S.h.H4>📌 운전팁</S.h.H4>
                </S.a.Link>
                <S.a.Link to="/video" $outline $align="left">
                  <S.h.H4>🎥 운전영상</S.h.H4>
                </S.a.Link>
              </S.div.Column>
            </S.div.Column>
          </S.div.Card>
        </S.div.Column>
      </S.div.Row>
    </HeaderFooterLayout>
  );
};

export default DriveLayout;
