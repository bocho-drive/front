import * as S from '@/styles/index.style';

interface Props {
  imgSrc?: string;
}

const MatchingRowCard = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/300x200' } = props; // 기본값으로 JSONPlaceholder
  return (
    <S.div.Row $gap={15} $between $width={100} $align="center">
      <S.div.Column $gap={10}>
        <S.div.Row $gap={10} $align="center">
          <S.div.Avatar />
          <S.h.H2>운전 메이트 이름</S.h.H2>
        </S.div.Row>
        <S.p.P $maxLines={1}>운전 메이트 소개</S.p.P>
        <S.div.Row $gap={10}>
          <S.span.Badge>운전 메이트 나이</S.span.Badge>
          <S.span.Badge>운전 메이트 성별</S.span.Badge>
        </S.div.Row>
      </S.div.Column>
      <img src={imgSrc} />
    </S.div.Row>
  );
};

export default MatchingRowCard;
