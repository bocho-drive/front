import * as S from '@/styles/index.style';
import Comment from '../molecules/Comment';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { deleteComment, getCommentList, postComment } from '@/@features/Comment/api';
import CommentForm from '../molecules/CommentForm';
import { CommentPostReq } from '@/@features/Comment/type';

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

  const { mutate: postMutate } = useMutation({
    mutationKey: ['postComment'],
    mutationFn: (data: CommentPostReq) => postComment(data),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <S.div.Column $gap={20}>
      <CommentForm type="new" communityId={communityId} mutationFn={postMutate} />

      {data.length === 0 && <S.h.H3>댓글이 없어요.</S.h.H3>}
      {data?.map((comment) => (
        <Comment key={comment.id} comment={comment} deleteMutate={deleteMutate} />
      ))}
    </S.div.Column>
  );
};

export default CommentList;
