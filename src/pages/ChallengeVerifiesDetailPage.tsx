import * as S from '@/styles/index.style';
import CommentList from '@/@features/Comment/components/CommentList';
import Loading from '@/components/atoms/Loading';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import VerifiesDetail from '@/@features/ChallengeVerifies/components/VerfiesDetail';
import DriveLayout from '@/components/templates/DriveLayout';

const ChallengeVerifiesDetailPage = () => {
  const { id } = useParams();

  return (
    <DriveLayout>
      <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
        <Suspense fallback={<Loading />}>
          <S.div.Column $gap={20}>
            <VerifiesDetail communityId={Number(id)} />
            <S.h.H3>댓글</S.h.H3>
            <CommentList communityId={Number(id)} isNeedNewForm />
          </S.div.Column>
        </Suspense>
      </ErrorBoundary>
    </DriveLayout>
  );
};

export default ChallengeVerifiesDetailPage;
