import * as S from '@/styles/index.style';

const PostDetail = () => {
  return (
    <S.div.Column $gap={20}>
      <S.h.H1>제목</S.h.H1>
      <S.div.Row $gap={10} $align="center">
        <S.div.Avatar />
        <S.h.H5>작성자</S.h.H5>
      </S.div.Row>
      <S.div.Row $between>
        <S.p.P>2024년 7월 20일 오후 2:20</S.p.P>
        <S.div.Row $gap={10}>
          <S.p.P>댓글 1</S.p.P>
          <S.p.P>추천 10</S.p.P>
          <S.p.P>조회 100</S.p.P>
        </S.div.Row>
      </S.div.Row>
      <S.hr.Hr />

      <S.span.Span>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </S.span.Span>
    </S.div.Column>
  );
};

export default PostDetail;
