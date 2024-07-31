import * as S from '@/styles/index.style';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import VoteForm from '../../organisms/VoteForm';
import { useNavigate } from 'react-router-dom';
import { usePost } from './usePost';
import { CommunityDetailRes, CommunityPostReq } from '@/@features/Communities/type';
import { Fragment, useLayoutEffect } from 'react';
import PostForm from './PostForm';
import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import { getDateString } from '@/util/util';

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

  useLayoutEffect(() => {
    setCurrentPost(data);

    return () => {
      setCurrentPost(null);
      closeEditMode();
    };
  }, [data, setCurrentPost, closeEditMode]);

  const mutationDelete = useMutation({
    mutationKey: ['deletePost', id],
    mutationFn: () => deleteFn(id),
    onSuccess: () => {
      navigate(-1);
    },
  });

  const handleDelete = () => {
    if (data.isAuthor && window.confirm('정말 삭제하시겠습니까?')) {
      mutationDelete.mutate();
    }
  };

  const mutationPut = useMutation({
    mutationKey: ['putPost', id],
    mutationFn: (data: CommunityPostReq) => updateFn(id, data),
    onSuccess: () => {
      closeEditMode();
      refetch();
    },
  });

  const handlePut = (putData: CommunityPostReq) => {
    data.isAuthor && mutationPut.mutate(putData);
  };

  if (isEditMode) return <PostForm type="update" handlePost={handlePut} />;

  return (
    <S.div.Column $gap={20}>
      <S.div.Row $between>
        <S.div.Row $gap={10}>
          {data.isAuthor && (
            <Fragment>
              <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
              <S.button.Button onClick={toggleEditMode}>수정</S.button.Button>
            </Fragment>
          )}
        </S.div.Row>
        <KakaoShareButton title={data.title} />
      </S.div.Row>
      <S.h.H1>{data.title}</S.h.H1>

      <S.div.Row $gap={10} $align="center">
        <S.div.Avatar />
        <S.h.H5>{data.author}</S.h.H5>
      </S.div.Row>
      <S.div.Row $between>
        <S.small.Small>{getDateString(data.createdAt)}</S.small.Small>
        <S.div.Row $gap={10}>
          <S.p.P>추천 {data.likesCount}</S.p.P>
          <S.p.P>조회 {data.viewCount}</S.p.P>
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
