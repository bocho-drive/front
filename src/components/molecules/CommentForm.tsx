import { commentSchema, CommentSchema } from '@/@features/Comment/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as S from '@/styles/index.style';
import usePressEnterFetch from '@/hooks/usePressEnterFetch';
import { FormEvent } from 'react';

export interface CommentReturnType {
  content: string;
}

interface Props {
  /** submit시, 실행할 함수 */
  handlePost: (data: CommentReturnType) => void;
  /** form에 들어갈 기본값 */
  defaultValues?: CommentReturnType;
}

const CommentForm = ({ handlePost, defaultValues }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CommentSchema>({
    defaultValues,
    resolver: yupResolver(commentSchema),
  });

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(handlePost)(e);
    reset();
  };
  const { handlePressEnterFetch } = usePressEnterFetch({ handleSubmit: handleForm });

  return (
    <form onSubmit={handleForm}>
      <S.div.Row $gap={10}>
        <S.div.Column>
          <S.textarea.Textarea placeholder="댓글을 입력해주세요" {...register('content')} onKeyDown={handlePressEnterFetch} />
          <S.span.ErrorSpan>{errors.content?.message}</S.span.ErrorSpan>
        </S.div.Column>

        <S.button.Button type="submit" $size="small" $colors="primary">
          저장
        </S.button.Button>
      </S.div.Row>
    </form>
  );
};

export default CommentForm;
