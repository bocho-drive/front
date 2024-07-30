import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CommunityLayout from '@/components/templates/CommunityLayout';
import PostDetail from '@/components/molecules/Post/PostDetail';
import * as S from '@/styles/index.style';
import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import CommentForm from '@/components/molecules/CommentForm';
import Comment from '@/components/molecules/Comment';
import { Fragment, Suspense } from 'react';
import Loading from '@/components/atoms/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import { deleteCommunity, getCommunityDetail, putCommunity } from '@/@features/Communities/api';
import { usePost } from '@/components/molecules/Post/usePost';
import PostForm from '@/components/molecules/Post/PostForm';
import { useMutation } from '@tanstack/react-query';

const CommunityDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { search } = useLocation();

  const handleToList = () => navigate('/community' + search);
  const isEditMode = usePost((state) => state.isEditMode);

  return (
    <CommunityLayout>
      <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
        <S.div.Column $gap={40}>
          <Suspense fallback={<Loading />}>
            <PostDetail id={Number(id)} queryFn={getCommunityDetail} deleteFn={deleteCommunity} updateFn={putCommunity}>
              <S.div.Row $gap={10} $justify="center">
                <KakaoShareButton title="제목" />
                <S.button.Button>글 추천</S.button.Button>
              </S.div.Row>

              <S.div.Row $gap={10} $justify="flex-start">
                <S.button.Button>이전글</S.button.Button>
                <S.button.Button>다음글</S.button.Button>
                <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
              </S.div.Row>

              <S.hr.Hr />
            </PostDetail>
          </Suspense>
          {!isEditMode && (
            <Fragment>
              <S.h.H3>댓글</S.h.H3>
              <CommentForm />

              <Comment />
            </Fragment>
          )}
        </S.div.Column>
      </ErrorBoundary>
    </CommunityLayout>
  );
};

export default CommunityDetailPage;
