import * as S from '@/styles/index.style';

const Comment = () => {
  return (
    <S.div.Row $gap={20} $align="flex-start">
      <S.div.Avatar />
      <S.div.Column $gap={10} style={{ flex: 1 }}>
        <S.div.Row $gap={10}>
          <S.p.P>작성자</S.p.P>
          <S.span.Span>2024년 7월 20일 오후 2:20</S.span.Span>
        </S.div.Row>
        <S.div.Card>
          <S.p.P>
            lorem ipsum dolor sit amet, consectetur adipilorem ipsum dolor sit amet, consectetur adipilorem ipsum dolor sit amet, consectetur adipilorem ipsum dolor sit amet, consectetur adipi
          </S.p.P>
        </S.div.Card>
      </S.div.Column>
    </S.div.Row>
  );
};

export default Comment;
