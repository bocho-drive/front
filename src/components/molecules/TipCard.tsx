import * as S from '@/styles/index.style';

interface Props {
  imgSrc?: string;
}

const TipCard = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/200x100' } = props;
  return (
    <S.div.Row $gap={20}>
      <img src={imgSrc} />
      <S.div.Column $gap={20} $width={100}>
        <S.h.h2 $maxLines={2}>팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.팁 제목입니다.</S.h.h2>
        <S.div.Row style={{ justifyContent: 'space-between' }}>
          <span>2021.09.01</span>
          <S.span.Badge>5mins read</S.span.Badge>
        </S.div.Row>
      </S.div.Column>
    </S.div.Row>
  );
};

export default TipCard;
