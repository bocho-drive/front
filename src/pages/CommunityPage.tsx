import Loading from '@/components/atoms/Loading';
import CommunityCardList from '@/components/organisms/CommunityCardList';
import CommunityLayout from '@/components/templates/CommunityLayout';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import * as S from '@/styles/index.style';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const CommunityPage = () => {
  return (
    <CommunityLayout>
      <S.div.Column $gap={20}>
        <S.h.LayoutTitle>커뮤니티에서 만나요 💬</S.h.LayoutTitle>
        <S.input.Input $size="large" placeholder="Search" />

        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
          <Suspense fallback={<Loading />}>
            <CommunityCardList />
          </Suspense>
        </ErrorBoundary>
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityPage;
