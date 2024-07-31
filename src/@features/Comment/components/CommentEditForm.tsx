import { CommentSchema, commentSchema } from '@/@features/Comment/yup';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CommentRes } from '../type';
import { useCommentQuery } from '../useCommentQuery';

interface Props {
  comment: CommentRes;
  communityId: number;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentEditForm = ({ comment, communityId, setIsEditMode }: Props) => {
  const { putMutate } = useCommentQuery(communityId);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommentSchema>({
    defaultValues: {
      content: comment.content,
    },
    resolver: yupResolver(commentSchema),
  });

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

  return (
    <form onSubmit={handleSubmit(handlePutComment)}>
      <S.div.Column $gap={10}>
        <S.div.Column>
          <S.textarea.Textarea placeholder="댓글을 입력해주세요" {...register('content')} />
          <S.span.ErrorSpan>{errors.content?.message}</S.span.ErrorSpan>
        </S.div.Column>

        <S.div.Row $justify="flex-end">
          <S.button.Button type="submit" $size="small" $colors="primary">
            수정
          </S.button.Button>
        </S.div.Row>
      </S.div.Column>
    </form>
  );
};

export default CommentEditForm;
