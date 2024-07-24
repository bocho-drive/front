import * as S from '@/styles/index.style';

const CommunityCard = () => {
  return (
    <S.div.Card>
      <S.div.Column $gap={20}>
        <S.h.H2>제목</S.h.H2>
        <S.p.P $maxLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, justo a aliquet lacinia, velit nunc tincidunt nunc, vitae efficitur nunc nunc at nunc. Sed auctor, mauris id aliquam
          tincidunt, nunc nunc aliquam nunc, vitae efficitur nunc nunc at nunc.
        </S.p.P>
        <S.div.Row $gap={10} $between>
          <S.div.Row $gap={10} $align="center">
            <S.div.Avatar />
            <S.p.P>작성자</S.p.P>
            <S.p.P>2021.08.09</S.p.P>
          </S.div.Row>

          <S.div.Row $gap={10} $align="center">
            <S.p.P>댓글 1</S.p.P>
            <S.p.P>추천 10</S.p.P>
            <S.p.P>조회 100</S.p.P>
          </S.div.Row>
        </S.div.Row>
      </S.div.Column>
    </S.div.Card>
  );
};

export default CommunityCard;
