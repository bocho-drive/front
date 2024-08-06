import CommunityCard from '../../../components/molecules/CommunityCard';
import useScroll from '@/hooks/useScroll';
import { Category } from '@/@features/Community/type';
import { Link } from 'react-router-dom';
import { useCommunityListSuspenseInfiniteQuery, useCommunityListSuspenseQuery } from '../useCommunityQuery';
import { Fragment } from 'react/jsx-runtime';
import NotExists from '@/components/atoms/NotExists';

interface Props {
  category: Category;
  size?: number;
}

const getCategoryLink = (category: Category): string => {
  switch (category) {
    case 'GENERAL':
    case 'VOTE':
      return '/community';
    case 'CHALLENGE_VERIFY':
      return '/challenge_verify';
    case 'TIP':
      return '/tip';
  }
};

export const CommunityCardInfiniteList = ({ category }: Props) => {
  const { data, fetchNextPage, hasNextPage } = useCommunityListSuspenseInfiniteQuery(category);
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  if (data.pages.length === 0) return <NotExists />;
  return (
    <Fragment>
      {data.pages.map((page) =>
        page.content.map((community) => {
          return (
            <Link to={`${getCategoryLink(category)}/${community.id}`} key={community.id}>
              <CommunityCard data={community} />
            </Link>
          );
        })
      )}
    </Fragment>
  );
};

export default CommunityCardInfiniteList;

export const CommunityCardList = ({ category, size = 6 }: Props) => {
  const { data } = useCommunityListSuspenseQuery(category, size);

  if (data.content.length === 0) return <NotExists />;
  return (
    <Fragment>
      {data.content.map((community) => {
        return (
          <Link to={`${getCategoryLink(category)}/${community.id}`} key={community.id}>
            <CommunityCard data={community} />
          </Link>
        );
      })}
    </Fragment>
  );
};
