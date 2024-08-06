import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from '../atoms/Loading';
import ErrorFallbackUI from './ErrorFallback';

interface Props {
  children: React.ReactNode;
}

const ErrorSuspenseLayout = ({ children }: Props) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default ErrorSuspenseLayout;
