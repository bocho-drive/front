import { UseQueryResult } from '@tanstack/react-query';
import Loading from '../atoms/Loading';
import * as S from '@/styles/index.style';
import { Fragment } from 'react/jsx-runtime';

interface Props {
  query: UseQueryResult;
  children: React.ReactNode;
}
const QueryLayout = ({ children, query }: Props) => {
  if (query.isLoading) return <Loading />;
  if (!query.data) return <S.h.H3>게시글이 없어요.</S.h.H3>;
  if (query.isSuccess) return <Fragment>{children}</Fragment>;
};

export default QueryLayout;
