import * as S from '@/styles/index.style';
import { Link } from 'react-router-dom';

interface Props {
  imgSrc?: string;
  id: number;
}

const TipCard = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/300x200', id } = props;
  return (
    <S.div.Card>
      <Link to={`/tip/${id}`}>
        <S.div.Row $gap={20}>
          <img src={imgSrc} />
          <S.div.Column $gap={20} $width={100} $justify="space-between">
            <S.h.H2 $maxLines={2}>팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.</S.h.H2>
            <S.div.Row $align="center" $between>
              <S.p.P>2021.09.01</S.p.P>
            </S.div.Row>
          </S.div.Column>
        </S.div.Row>
      </Link>
    </S.div.Card>
  );
};

export default TipCard;
