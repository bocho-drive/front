import { CommunityRes } from '@/@features/Community/type';
import * as S from '@/styles/index.style';

interface Props {
  data: CommunityRes;
}

const CommunityCard = ({ data }: Props) => {
  return (
    <S.div.Card>
      <S.div.Column $gap={20}>
        <S.h.H5>{data.author}</S.h.H5>
        <S.h.H2>{data.title}</S.h.H2>
        <S.div.Row $gap={10} $between>
          <S.div.Row $gap={10} $align="center">
            <S.p.P>조회 {data.viewCount}</S.p.P>
            <S.p.P>추천 {data.likeCount}</S.p.P>
          </S.div.Row>
        </S.div.Row>
      </S.div.Column>
    </S.div.Card>
  );
};

export default CommunityCard;
