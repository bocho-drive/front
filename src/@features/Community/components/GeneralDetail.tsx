import { Fragment, Suspense } from 'react';
import * as S from '@/styles/index.style';
import { useLocation, useNavigate } from 'react-router-dom';
import VoteForm from '@/@features/Vote/components/VoteForm';
import Loading from '@/components/atoms/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import { useCommunityDeleteMutation, useCommunityLikeMutation, useCommunitySuspenseQuery } from '../useCommunityQuery';
import CommunityDetail from '@/components/organisms/Community/CommunityDetail';
import { useAuth } from '@/@features/Auth/useAuth';

interface Props {
  communityId: number;
}

const GeneralDetail = ({ communityId }: Props) => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const isAuth = useAuth((state) => state.isAuth);

  const getDetailQuery = useCommunitySuspenseQuery(communityId);
  const mutationDelete = useCommunityDeleteMutation(communityId);
  const mutationLike = useCommunityLikeMutation(communityId);

  const handleDelete = async () => {
    if (getDetailQuery.data.isAuthor && window.confirm('정말 삭제하시겠습니까?')) {
      await mutationDelete.mutateAsync();
      handleToList();
    }
  };

  const handleLike = () => mutationLike.mutateAsync().then(() => getDetailQuery.refetch());
  const handleToList = () => navigate('/' + pathname.split('/')[1] + search);
  const handleToEdit = () => navigate(`/${pathname.split('/')[1]}/edit/${communityId}`);

  return (
    <S.div.Column $gap={20}>
      <CommunityDetail
        data={getDetailQuery.data}
        authorActionComp={
          isAuth && (
            <Fragment>
              <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
              <S.button.Button onClick={handleToEdit}>수정</S.button.Button>
            </Fragment>
          )
        }
      />

      {getDetailQuery.data.category === 'VOTE' && (
        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
          <Suspense fallback={<Loading />}>
            <S.div.Gap $height={50} />
            <VoteForm communityId={communityId} />
          </Suspense>
        </ErrorBoundary>
      )}

      {isAuth && (
        <S.div.Row $gap={10} $justify="center">
          <S.button.Button $colors="secondary" onClick={handleLike}>
            🎉 글 추천
          </S.button.Button>
        </S.div.Row>
      )}

      <S.div.Row $gap={10} $justify="flex-start">
        <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
      </S.div.Row>

      <S.hr.Hr />
    </S.div.Column>
  );
};

export default GeneralDetail;
