import * as S from '@/styles/index.style';
import Comment from '../molecules/Comment';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { deleteComment, getCommentList } from '@/@features/Comment/api';

interface Props {
  communityId: number;
}

const CommentList = ({ communityId }: Props) => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: ['commentList', communityId],
    queryFn: () => getCommentList(communityId),
  });

  const { mutate: deleteMutate } = useMutation({
    mutationKey: ['deleteComment'],
    mutationFn: (id: number) => deleteComment(id),
    onSuccess: () => {
      refetch();
    },
  });

  if (data.length === 0) return <S.h.H3>댓글이 없어요.</S.h.H3>;
  return (
    <S.div.Column $gap={20}>
      {data?.map((comment) => (
        <Comment key={comment.id} comment={comment} deleteMutate={deleteMutate} />
      ))}
    </S.div.Column>
  );
};

export default CommentList;
