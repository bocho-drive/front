import * as S from '@/styles/index.style';

const SimpleComment = () => {
  return (
    <S.div.Row $gap={10} $align="center">
      <S.div.Avatar />
      <S.p.P $maxLines={1}>댓글</S.p.P>
    </S.div.Row>
  );
};

export default SimpleComment;
