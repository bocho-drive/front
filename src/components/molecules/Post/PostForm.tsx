import { communitySchema, CommunitySchema } from '@/@features/Communities/yup';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ToastEditor from '../../atoms/ToastEditor';
import { useEffect, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { CommunityPostReq } from '@/@features/Communities/type';
import { usePost } from './usePost';

interface Props {
  type: 'create' | 'update';
  handlePost: (data: CommunityPostReq) => void;
}

const PostForm = ({ handlePost, type }: Props) => {
  const currentPost = usePost((state) => state.currentPost);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommunitySchema>({
    defaultValues: { title: (type === 'update' && currentPost?.title) || '', isVote: false },
    resolver: yupResolver(communitySchema),
  });
  const editorRef = useRef<Editor | null>(null);

  const onSubmit = (data: CommunitySchema) => {
    const content = editorRef.current?.getInstance().getMarkdown();
    const category = data.isVote ? 'VOTE' : 'GENERAL';
    handlePost({
      title: data.title,
      content,
      category,
    });
  };

  useEffect(() => {
    if (type === 'update' && currentPost) {
      editorRef.current?.getInstance().setMarkdown(currentPost.content);
    }
  }, [type, currentPost]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.div.Column $gap={20}>
        <S.div.Column>
          <S.input.Input $size="large" placeholder="제목" {...register('title')} />
          {errors.title && <S.span.ErrorSpan>{errors.title.message}</S.span.ErrorSpan>}
        </S.div.Column>

        <ToastEditor ref={editorRef} />

        <S.div.Card style={{ width: 'fit-content' }}>
          <S.input.Checkbox id="isVote" type="checkbox" {...register('isVote')} />
          <S.label.Label htmlFor="isVote">투표 게시글로 만들기</S.label.Label>
        </S.div.Card>

        <S.button.Button $size="large" type="submit">
          등록
        </S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default PostForm;
