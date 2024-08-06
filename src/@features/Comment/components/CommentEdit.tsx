import { CommentSchema } from '@/@features/Comment/yup';
import React from 'react';
import { CommentRes } from '../type';
import { useCommentQuery } from '../useCommentQuery';
import CommentForm from '@/components/molecules/CommentForm';

interface Props {
  comment: CommentRes;
  communityId: number;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentEdit = ({ comment, communityId, setIsEditMode }: Props) => {
  const { putMutate } = useCommentQuery(communityId);

  const handlePutComment = (data: CommentSchema) => {
    putMutate({
      id: comment.id,
      data: {
        communityId,
        content: data.content,
      },
    });
    setIsEditMode(false);
  };

  return <CommentForm handlePost={handlePutComment} defaultValues={comment} />;
};

export default CommentEdit;
