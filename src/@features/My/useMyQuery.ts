import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getMyChallengeVerifyList, getMyCommentList, getMyCommunityList, getMyProfile } from './api';
import { nextPageParam } from '@/util/util';

const key = 'my';

export const useMyProfileQuery = () => {
  return useQuery({
    queryKey: [key, 'profile'],
    queryFn: getMyProfile,
    staleTime: Infinity,
  });
};

export const useMyCommunityListInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [key, 'community'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getMyCommunityList({ page: pageParam }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};

export const useMyCommentListInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [key, 'comment'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getMyCommentList({ page: pageParam }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};

export const useMyChallengeVerifyListInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [key, 'challenge'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getMyChallengeVerifyList({ page: pageParam }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};
