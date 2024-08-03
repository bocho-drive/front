import { useParams } from 'react-router-dom';
import CommunityLayout from '@/components/templates/CommunityLayout';
import * as S from '@/styles/index.style';
import { Suspense } from 'react';
import Loading from '@/components/atoms/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import CommentList from '@/@features/Comment/components/CommentList';
import CommunityDetail from '@/@features/Community/components/CommunityDetail';

const CommunityDetailPage = () => {
  const { id } = useParams();

  return (
    <CommunityLayout>
      <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
        <Suspense fallback={<Loading />}>
          <S.div.Column $gap={20}>
            <CommunityDetail communityId={Number(id)} />
            <S.h.H3>댓글</S.h.H3>
            <CommentList communityId={Number(id)} isNeedNewForm />
          </S.div.Column>
        </Suspense>
      </ErrorBoundary>
    </CommunityLayout>
  );
};

export default CommunityDetailPage;
