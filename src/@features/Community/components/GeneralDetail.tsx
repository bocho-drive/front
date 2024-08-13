import VoteForm from '@/@features/Vote/components/VoteForm';
import Loading from '@/components/atoms/Loading';
import CommunityDetail from '@/components/organisms/Community/CommunityDetail';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import * as S from '@/styles/index.style';
import { Fragment, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCommunityDeleteMutation, useCommunitySuspenseQuery } from '../useCommunityQuery';
import { useAuthStore } from '@/@features/Auth/useAuthStore';
import LikeButton from '@/@features/Like/components/LikeButton';

interface Props {
  communityId: number;
}

const GeneralDetail = ({ communityId }: Props) => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const isLogin = useAuthStore((state) => state.isLogin());

  const getDetailQuery = useCommunitySuspenseQuery(communityId);
  const mutationDelete = useCommunityDeleteMutation(communityId);

  const handleDelete = async () => {
    if (getDetailQuery.data.isAuthor && window.confirm('정말 삭제하시겠습니까?')) {
      await mutationDelete.mutateAsync();
      handleToList();
    }
  };

  const basePath = pathname.split('/')[1];

  const handleToList = () => navigate(`/${basePath}${search}`);
  const handleToEdit = () => navigate(`/${basePath}/edit/${communityId}`);

  return (
    <S.div.Column $gap={20}>
      <CommunityDetail
        data={getDetailQuery.data}
        authorActionComp={
          <Fragment>
            <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
            <S.button.Button onClick={handleToEdit}>수정</S.button.Button>
          </Fragment>
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

      {isLogin && <LikeButton communityId={communityId} onSuccessFn={() => getDetailQuery.refetch()} />}

      <S.div.Row $gap={10} $justify="flex-start">
        <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
      </S.div.Row>

      <S.hr.Hr />
    </S.div.Column>
  );
};

export default GeneralDetail;
