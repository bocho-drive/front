import * as S from '@/styles/index.style';

const SimpleComment = () => {
  return (
    <S.div.Row $gap={5}>
      <S.div.Avatar />
      <S.div.Column>
        <S.h.H4>이름</S.h.H4>
        <S.p.P $maxLines={1}>댓글</S.p.P>
      </S.div.Column>
    </S.div.Row>
  );
};

export default SimpleComment;
