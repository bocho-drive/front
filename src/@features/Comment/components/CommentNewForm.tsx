import { CommentSchema, commentSchema } from '@/@features/Comment/yup';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useCommentQuery } from '../useCommentQuery';

interface Props {
  communityId: number;
}

const CommentNewForm = ({ communityId }: Props) => {
  const { postMutate } = useCommentQuery(communityId);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CommentSchema>({
    defaultValues: {
      content: '',
    },
    resolver: yupResolver(commentSchema),
  });

  const handlePostComment = (data: CommentSchema) => {
    postMutate({
      communityId,
      content: data.content,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handlePostComment)}>
      <S.div.Column $gap={10}>
        <S.div.Column>
          <S.textarea.Textarea placeholder="댓글을 입력해주세요" {...register('content')} />
          <S.span.ErrorSpan>{errors.content?.message}</S.span.ErrorSpan>
        </S.div.Column>

        <S.div.Row $justify="flex-end">
          <S.button.Button type="submit" $size="small" $colors="primary">
            저장
          </S.button.Button>
        </S.div.Row>
      </S.div.Column>
    </form>
  );
};

export default CommentNewForm;
