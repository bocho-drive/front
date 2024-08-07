import React, { Fragment } from 'react';
import Loading from '../atoms/Loading';

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const LoadingLayout = ({ loading, children }: Props): React.ReactNode => {
  if (loading) return <Loading />;
  return <Fragment>{children}</Fragment>;
};

export default LoadingLayout;
