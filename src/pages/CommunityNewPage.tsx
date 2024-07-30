import { postCommunity } from '@/@features/Communities/api';
import { CommunityPostReq } from '@/@features/Communities/type';
import { CommunitySchema, communitySchema } from '@/@features/Communities/yup';
import ToastEditor from '@/components/atoms/ToastEditor';
import CommunityLayout from '@/components/templates/CommunityLayout';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CommunityNewPage = () => {
  const editorRef = useRef<Editor | null>(null);
  const navigate = useNavigate();

  const queryClient = new QueryClient();
  const mutation = useMutation({
    mutationKey: ['postCommunity'],
    mutationFn: (data: CommunityPostReq) => postCommunity(data),
    onSuccess: () => {
      // queryClient.setQueryData(["postDetail"], ) // postDetail 캐시 업데이트
      navigate('/community');
    },
  });

  const handleNewPost = async (data: CommunitySchema) => {
    const content = editorRef.current?.getInstance().getMarkdown();
    const category = data.isVote ? 'VOTE' : 'GENERAL';

    mutation.mutate({
      title: data.title,
      content,
      category,
      author: 'test',
    });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommunitySchema>({ resolver: yupResolver(communitySchema) });

  return (
    <CommunityLayout>
      <form onSubmit={handleSubmit(handleNewPost)}>
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
    </CommunityLayout>
  );
};

export default CommunityNewPage;
