import * as S from '@/styles/index.style';

interface Props {
  imgSrc?: string;
}

const ChallengeCard = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/150' } = props; // 기본값으로 JSONPlaceholder 이미지 URL 설정

  return (
    <S.div.Card>
      <S.div.Row $gap={10}>
        <img src={imgSrc} />
        <S.div.Column $gap={10}>
          <S.h.H2>챌린지 이름</S.h.H2>
          <S.p.P>챌린지 설명</S.p.P>
          <S.div.Row $gap={10}>
            <S.span.Badge>챌린지 기간</S.span.Badge>
            <S.span.Badge>챌린지 기간</S.span.Badge>
          </S.div.Row>
          <span>104명 도전완료</span>
        </S.div.Column>
      </S.div.Row>
    </S.div.Card>
  );
};

export default ChallengeCard;
