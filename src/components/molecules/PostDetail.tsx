import { deleteCommunity, getCommunityDetail } from '@/@features/Communities/api';
import * as S from '@/styles/index.style';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: number;
}

const PostDetail = ({ id }: Props) => {
  const navigate = useNavigate();

  const { data } = useSuspenseQuery({
    queryKey: ['postDetail', id],
    queryFn: () => getCommunityDetail(id),
    retry: 1,
  });

  const mutationDelete = useMutation({
    mutationKey: ['deletePost', id],
    mutationFn: () => deleteCommunity(id),
    onSuccess: () => {
      navigate(-1);
    },
  });

  const handleDelete = () => {
    mutationDelete.mutate();
  };

  return (
    <S.div.Column $gap={20}>
      <S.div.Row $between>
        <S.h.H1>{data.title}</S.h.H1>
        <S.div.Row $gap={10}>
          <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
          <S.button.Button>수정</S.button.Button>
        </S.div.Row>
      </S.div.Row>
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
