import * as S from '@/styles/index.style';
import HeaderFooterLayout from './HeaderFooterLayout';
import { ReactNode } from 'react';

interface CommunityProps {
  children: ReactNode;
}

const CommunityLayout = ({ children }: CommunityProps) => {
  return (
    <HeaderFooterLayout>
      <S.div.Row $gap={50} $width={100}>
        <S.div.Column $width={80}>{children}</S.div.Column>

        <S.div.Column $width={20} $gap={10}>
          <S.button.Button>글쓰기</S.button.Button>
          <S.button.Button>최신 게시글</S.button.Button>
          <S.button.Button>인기 게시글</S.button.Button>
          <S.button.Button>투표 게시글</S.button.Button>
        </S.div.Column>
      </S.div.Row>
    </HeaderFooterLayout>
  );
};

export default CommunityLayout;
