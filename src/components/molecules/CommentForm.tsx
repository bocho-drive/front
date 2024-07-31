import { CommentPostReq, CommentRes } from '@/@features/Comment/type';
import { CommentSchema, commentSchema } from '@/@features/Comment/yup';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { UseMutateFunction } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  type: 'new' | 'edit';
  communityId: number;

  /** type==='new' 필수 */
  postFn?: UseMutateFunction<CommentRes, unknown, CommentPostReq, unknown>;

  /** type==='edit' 필수 */
  putFn?: (data: CommentSchema) => void;
  comment?: CommentRes;
  /** type==='edit' 필수 */
}

const CommentForm = ({ type, communityId, postFn, putFn, comment }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CommentSchema>({
    defaultValues: {
      content: comment?.content || '',
    },
    resolver: yupResolver(commentSchema),
  });

  const handleAction = async (data: CommentSchema) => {
    if (type === 'new' && postFn) {
      postFn({
        communityId,
        content: data.content,
      });
    }

    if (type === 'edit' && putFn) {
      putFn(data);
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleAction)}>
      <S.div.Column $gap={10}>
        <S.div.Column>
          <S.textarea.Textarea placeholder="댓글을 입력해주세요" {...register('content')} />
          <S.span.ErrorSpan>{errors.content?.message}</S.span.ErrorSpan>
        </S.div.Column>

        <S.div.Row $justify="flex-end">
          <S.button.Button $size="small" $colors="primary">
            {type === 'new' ? '등록' : '수정'}
          </S.button.Button>
        </S.div.Row>
      </S.div.Column>
    </form>
  );
};

export default React.memo(CommentForm);
