import { Category, CommunityRes } from '@/@features/Community/type';
import * as S from '@/styles/index.style';
import { ReactNode } from 'react';

interface Props {
  data: CommunityRes;
  topComponent?: React.ReactNode;
  bottomComponent?: React.ReactNode;
}

const CommunityCard = ({ data, topComponent, bottomComponent }: Props) => {
  return (
    <S.div.Card>
      <S.div.Column $gap={20}>
        {topComponent}
        <S.h.H2>{data.title}</S.h.H2>
        {/* <S.small.Small>작성자 : {data.author}</S.small.Small> */}
        <S.div.Row $gap={10} $between>
          <S.div.Row $gap={10} $align="center">
            <S.p.P>조회 {data.viewCount.toLocaleString('ko-KR')}</S.p.P>
            <S.p.P>추천 {data.likeCount.toLocaleString('ko-KR')}</S.p.P>
          </S.div.Row>
        </S.div.Row>
        {bottomComponent}
      </S.div.Column>
    </S.div.Card>
  );
};

export default CommunityCard;

export const CommunityCategoryBadge = ({ category }: { category: Category }): ReactNode => {
  let text = '';
  switch (category) {
    case 'GENERAL':
      text = '일반';
      break;
    case 'VOTE':
      text = '투표';
      break;
    case 'TIP':
      text = '팁';
      break;
    case 'CHALLENGE_VERIFY':
      text = '챌린지 인증';
      break;
  }
  return <S.span.Badge $color="primary">{text}</S.span.Badge>;
};
