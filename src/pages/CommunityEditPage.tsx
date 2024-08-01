import CommunityLayout from '@/components/templates/CommunityLayout';
import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import CommunityEdit from '@/@features/Community/components/CommunityEdit';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';

const CommunityEditPage = () => {
  const { id } = useParams();

  return (
    <CommunityLayout>
      <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
        <Suspense>
          <CommunityEdit communityId={Number(id)} />
        </Suspense>
      </ErrorBoundary>
    </CommunityLayout>
  );
};

export default CommunityEditPage;
