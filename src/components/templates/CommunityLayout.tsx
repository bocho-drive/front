import * as S from '@/styles/index.style';
import HeaderFooterLayout from './HeaderFooterLayout';
import { ReactNode } from 'react';

interface CommunityProps {
  main: ReactNode;
}

const CommunityLayout = ({ main }: CommunityProps) => {
  return (
    <HeaderFooterLayout>
      <S.div.Column $width={80}>
        <S.div.Row $gap={50} $align="flex-start">
          <S.div.Column $width={70}>{main}</S.div.Column>

          <S.div.Column $width={30} $gap={10}>
            <S.button.Button>글쓰기</S.button.Button>
            <S.button.Button>최신 게시글</S.button.Button>
            <S.button.Button>인기 게시글</S.button.Button>
            <S.button.Button>투표 게시글</S.button.Button>
          </S.div.Column>
        </S.div.Row>
      </S.div.Column>
    </HeaderFooterLayout>
  );
};

export default CommunityLayout;
