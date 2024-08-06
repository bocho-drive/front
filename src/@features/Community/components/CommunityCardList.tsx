import CommunityCard from '../../../components/molecules/CommunityCard';
import useScroll from '@/hooks/useScroll';
import { Category } from '@/@features/Community/type';
import { Link } from 'react-router-dom';
import { useCommunityListSuspenseInfiniteQuery, useCommunityListSuspenseQuery } from '../useCommunityQuery';
import NotExistsLayout from '@/components/templates/NotExistsLayout';

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

  return (
    <NotExistsLayout isExists={data.pages.length > 0}>
      {data.pages.map((page) =>
        page.content.map((community) => {
          return (
            <Link to={`${getCategoryLink(category)}/${community.id}`} key={community.id}>
              <CommunityCard data={community} />
            </Link>
          );
        })
      )}
    </NotExistsLayout>
  );
};

export default CommunityCardInfiniteList;

export const CommunityCardList = ({ category, size = 6 }: Props) => {
  const { data } = useCommunityListSuspenseQuery(category, size);

  return (
    <NotExistsLayout isExists={data.content.length > 0}>
      {data.content.map((community) => {
        return (
          <Link to={`${getCategoryLink(category)}/${community.id}`} key={community.id}>
            <CommunityCard data={community} />
          </Link>
        );
      })}
    </NotExistsLayout>
  );
};
