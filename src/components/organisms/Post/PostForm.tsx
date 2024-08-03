import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ToastEditor from '../../atoms/ToastEditor';
import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { postSchema, PostSchema } from './yup';

export interface PostReturnType {
  title: string;
  content: string;
  image: File[];
}

interface PostDefaultValues {
  title: string;
  content: string;
  imgUrls: string[];
}

interface Props {
  /** submit시, 실행할 함수 */
  handlePost: (data: PostReturnType) => void;
  /** form에 들어갈 기본값 */
  defaultValues?: PostDefaultValues;
}

const PostForm = ({ handlePost, defaultValues }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PostSchema>({
    defaultValues: defaultValues,
    resolver: yupResolver(postSchema),
  });

  const editorRef = useRef<Editor | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: PostSchema) => {
    const content = editorRef.current?.getInstance().getMarkdown();
    handlePost({
      title: data.title,
      content,
      image: imageRef.current?.files ? Array.from(imageRef.current.files) : [],
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

        <S.input.Input type="file" multiple accept="image/png, image/jpg" ref={imageRef} />

        <S.button.Button $size="large" type="submit">
          저장
        </S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default PostForm;
