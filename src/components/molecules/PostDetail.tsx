import { getCommunityDetail } from '@/@features/Communities/api';
import * as S from '@/styles/index.style';
import { useSuspenseQuery } from '@tanstack/react-query';

interface Props {
  id: number;
}

const PostDetail = ({ id }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ['postDetail', id],
    queryFn: () => getCommunityDetail(id),
    retry: 1,
  });

  return (
    <S.div.Column $gap={20}>
      <S.h.H1>{data.title}</S.h.H1>
      <S.div.Row $gap={10} $align="center">
        <S.div.Avatar />
        <S.h.H5>작성자</S.h.H5>
      </S.div.Row>
      <S.div.Row $between>
        <S.p.P>{data.createdAt}</S.p.P>
        <S.div.Row $gap={10}>
          <S.p.P>댓글 1</S.p.P>
          <S.p.P>추천 10</S.p.P>
          <S.p.P>조회 100</S.p.P>
        </S.div.Row>
      </S.div.Row>
      <S.hr.Hr />

      <S.span.Span>{data.content}</S.span.Span>
    </S.div.Column>
  );
};

export default PostDetail;
