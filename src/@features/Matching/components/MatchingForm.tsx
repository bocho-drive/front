import ToastEditor from '@/components/atoms/ToastEditor';
import { postSchema, PostSchema } from '@/components/organisms/Community/yup';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export interface MatchingReturnType {
  title: string;
  content: string;
}

interface PostDefaultValues {
  title: string;
  content: string;
}

interface Props {
  /** submit시, 실행할 함수 */
  handlePost: (data: MatchingReturnType) => void;
  /** form에 들어갈 기본값 */
  defaultValues?: PostDefaultValues;
}

const MatchingForm = ({ handlePost, defaultValues }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PostSchema>({
    defaultValues: defaultValues,
    resolver: yupResolver(postSchema),
  });

  const editorRef = useRef<Editor | null>(null);

  const onSubmit = (data: PostSchema) => {
    const content = editorRef.current?.getInstance().getMarkdown();
    handlePost({
      title: data.title,
      content,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.div.Column $gap={20}>
        <S.div.Column>
          <S.input.Input $size="large" placeholder="제목" {...register('title')} />
          {errors.title && <S.span.ErrorSpan>{errors.title.message}</S.span.ErrorSpan>}
        </S.div.Column>

        <ToastEditor ref={editorRef} initialValue={defaultValues?.content} />

        <S.button.Button $size="large" type="submit">
          저장
        </S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default MatchingForm;
