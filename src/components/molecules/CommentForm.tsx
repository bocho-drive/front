import { commentSchema, CommentSchema } from '@/@features/Comment/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as S from '@/styles/index.style';

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

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(handlePost)(e);
        reset();
      }}
    >
      <S.div.Row $gap={10}>
        <S.div.Column>
          <S.textarea.Textarea placeholder="댓글을 입력해주세요" {...register('content')} />
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
