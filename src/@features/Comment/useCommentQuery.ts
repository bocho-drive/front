import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { deleteComment, getCommentList, postComment, putComment } from './api';
import { CommentPostReq } from './type';

export const useCommentQuery = (communityId: number) => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: ['commentList', communityId],
    queryFn: () => getCommentList(communityId),
  });

  const deleteMutation = useMutation({
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

  const { mutate: putMutate } = useMutation({
    mutationKey: ['putComment'],
    mutationFn: ({ id, data }: { id: number; data: CommentPostReq }) => putComment(id, data),
    onSuccess: () => {
      refetch();
    },
  });

  return {
    data,
    deleteMutation,
    postMutate,
    putMutate,
  };
};
