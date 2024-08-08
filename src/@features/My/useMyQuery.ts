import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getMyChallengeVerifyList, getMyCommentList, getMyCommunityList } from './api';
import { nextPageParam } from '@/util/util';

const key = 'my';

export const useMyCommunityListInfiniteQuery = (userId: number) => {
  return useSuspenseInfiniteQuery({
    queryKey: [key, 'community'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getMyCommunityList(userId, { page: pageParam }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};

export const useMyCommentListInfiniteQuery = (userId: number) => {
  return useSuspenseInfiniteQuery({
    queryKey: [key, 'comment'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getMyCommentList(userId, { page: pageParam }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};

export const useMyChallengeVerifyListInfiniteQuery = (userId: number) => {
  return useSuspenseInfiniteQuery({
    queryKey: [key, 'challenge'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getMyChallengeVerifyList(userId, { page: pageParam }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};
