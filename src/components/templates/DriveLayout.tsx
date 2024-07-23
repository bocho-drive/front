import HeaderFooterLayout from './HeaderFooterLayout';
import * as S from '@/styles/index.style';

interface Props {
  children: React.ReactNode;
}

const DriveLayout = ({ children }: Props) => {
  return (
    <HeaderFooterLayout>
      <S.div.Row $gap={50} $width={100}>
        <S.div.Column $width={70}>{children}</S.div.Column>

        <S.div.Column $width={25} $gap={10} style={{ position: 'fixed', right: '5%' }}>
          <S.div.Card>
            <S.div.Column $gap={20}>
              <S.div.Row $align="center" $gap={10}>
                <S.div.Avatar />
                <S.h.H4>운전자</S.h.H4>
              </S.div.Row>

              <S.div.Card>
                <S.h.H4>🏆 도전 중인 챌린지</S.h.H4>
              </S.div.Card>
            </S.div.Column>
          </S.div.Card>
        </S.div.Column>
      </S.div.Row>
    </HeaderFooterLayout>
  );
};

export default DriveLayout;
