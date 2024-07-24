import * as S from '@/styles/index.style';
import { Link } from 'react-router-dom';

interface Props {
  imgSrc?: string;
  id: number;
}

const MatchingCard = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/300x200', id } = props; // 기본값으로 JSONPlaceholder
  return (
    <S.div.Card>
      <Link to={`/matching/${id}`}>
        <S.div.Column $gap={15}>
          <img src={imgSrc} />

          <S.div.Column $gap={10}>
            <S.h.H2>운전 메이트 이름</S.h.H2>
            <S.p.P $maxLines={1}>운전 메이트 소개</S.p.P>
            <S.div.Row $gap={10}>
              <S.span.Badge>운전 메이트 나이</S.span.Badge>
              <S.span.Badge>운전 메이트 성별</S.span.Badge>
            </S.div.Row>
          </S.div.Column>
        </S.div.Column>
      </Link>
    </S.div.Card>
  );
};

export default MatchingCard;
