import * as S from '@/styles/index.style';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import VoteForm from '../../organisms/VoteForm';
import { useNavigate } from 'react-router-dom';
import { usePost } from './usePost';
import { CommunityDetailRes, CommunityPostReq } from '@/@features/Communities/type';
import { useEffect } from 'react';
import PostForm from './PostForm';

interface Props {
  /** 게시글 ID */
  id: number;
  /** 조회 API */
  queryFn: (id: number) => Promise<CommunityDetailRes>;
  /** 삭제 API */
  deleteFn: (id: number) => Promise<void>;
  /** 수정 API */
  updateFn: (id: number, data: CommunityPostReq) => Promise<void>;

  children?: React.ReactNode;
}

const PostDetail = ({ id, queryFn, deleteFn, updateFn, children }: Props) => {
  const navigate = useNavigate();
  const toggleEditMode = usePost((state) => state.toggleEditMode);
  const setCurrentPost = usePost((state) => state.setCurrentPost);
  const isEditMode = usePost((state) => state.isEditMode);
  const closeEditMode = usePost((state) => state.closeEditMode);

  const { data, refetch } = useSuspenseQuery({
    queryKey: ['postDetail', id],
    queryFn: () => queryFn(id),
    retry: 1,
  });
  useEffect(() => {
    setCurrentPost(data);
  }, [data, setCurrentPost]);

  const mutationDelete = useMutation({
    mutationKey: ['deletePost', id],
    mutationFn: () => deleteFn(id),
    onSuccess: () => {
      navigate(-1);
    },
  });

  const handleDelete = () => {
    mutationDelete.mutate();
  };

  const mutationPut = useMutation({
    mutationKey: ['putPost', id],
    mutationFn: (data: CommunityPostReq) => updateFn(id, data),
    onSuccess: () => {
      closeEditMode();
      refetch();
    },
  });

  const handlePut = (data: CommunityPostReq) => {
    mutationPut.mutate(data);
  };

  if (isEditMode) return <PostForm handlePost={handlePut} />;

  return (
    <S.div.Column $gap={20}>
      <S.div.Row $gap={10}>
        <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
        <S.button.Button onClick={toggleEditMode}>수정</S.button.Button>
      </S.div.Row>
      <S.h.H1>{data.title}</S.h.H1>

      <S.div.Row $gap={10} $align="center">
        <S.div.Avatar />
        <S.h.H5>작성자</S.h.H5>
      </S.div.Row>
      <S.div.Row $between>
        <S.p.P>{data.createdAt}</S.p.P>
        <S.div.Row $gap={10}>
          <S.p.P>댓글 1</S.p.P>
          <S.p.P>추천 10</S.p.P>
          <S.p.P>조회 100</S.p.P>
        </S.div.Row>
      </S.div.Row>
      <S.hr.Hr />

      <S.span.Span>{data.content}</S.span.Span>

      {data.category === 'VOTE' && <VoteForm />}

      {children}
    </S.div.Column>
  );
};

export default PostDetail;
