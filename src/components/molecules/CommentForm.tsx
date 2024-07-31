import { CommentPostReq, CommentRes } from '@/@features/Comment/type';
import { CommentSchema, commentSchema } from '@/@features/Comment/yup';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { UseMutateFunction } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

interface Props {
  type: 'new' | 'edit';
  communityId: number;
  mutationFn: UseMutateFunction<CommentRes, unknown, CommentPostReq, unknown>;
}

const CommentForm = ({ communityId, mutationFn }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CommentSchema>({
    resolver: yupResolver(commentSchema),
  });

  const handleAction = async (data: CommentSchema) => {
    mutationFn({
      communityId,
      content: data.content,
    });
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
          <S.button.Button $colors="primary">등록</S.button.Button>
        </S.div.Row>
      </S.div.Column>
    </form>
  );
};

export default CommentForm;
