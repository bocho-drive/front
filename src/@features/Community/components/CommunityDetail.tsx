import { Fragment, Suspense } from 'react';
import { useCommunityQuery } from '../useCommunityQuery';
import * as S from '@/styles/index.style';
import PostDetail from '@/components/organisms/Post/PostDetail';
import { useLocation, useNavigate } from 'react-router-dom';
import VoteForm from '@/@features/Vote/components/VoteForm';
import Loading from '@/components/atoms/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';

interface Props {
  communityId: number;
}

const CommunityDetail = ({ communityId }: Props) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { data, mutationDelete, mutationLike } = useCommunityQuery(communityId);

  const handleDelete = () => {
    if (data.isAuthor && window.confirm('정말 삭제하시겠습니까?')) {
      mutationDelete.mutate();
    }
  };

  const handleLike = () => mutationLike.mutate();
  const handleToList = () => navigate('/community' + search);
  const handleToEdit = () => navigate(`/community/edit/${communityId}`);

  return (
    <S.div.Column $gap={20}>
      <PostDetail
        data={data}
        authorActionComp={
          <Fragment>
            <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
            <S.button.Button onClick={handleToEdit}>수정</S.button.Button>
          </Fragment>
        }
      />

      {data.category === 'VOTE' && (
        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
          <Suspense fallback={<Loading />}>
            <S.div.Gap $height={50} />
            <VoteForm communityId={communityId} />
          </Suspense>
        </ErrorBoundary>
      )}

      <S.div.Row $gap={10} $justify="center">
        <S.button.Button $colors="secondary" onClick={handleLike}>
          🎉 글 추천
        </S.button.Button>
      </S.div.Row>

      <S.div.Row $gap={10} $justify="flex-start">
        <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
      </S.div.Row>

      <S.hr.Hr />
    </S.div.Column>
  );
};

export default CommunityDetail;
