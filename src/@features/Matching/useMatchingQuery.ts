import { useMutation, useQuery, useQueryClient, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { deleteMatching, getMatching, getMatchingList, postMatching, putMatching, putMatchingStatus } from './api';
import { MatchingPostReq, MatchingUpdateStatusReq } from './type';

const baseKey = 'matching';

/** 매칭글 목록 조회 (infinite) */
export const useMatchingSuspenseInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['infinite', baseKey],
    queryFn: ({ pageParam = 0 }) => getMatchingList({ page: pageParam, size: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;
      return lastPage.page.number + 1;
    },
  });
};

/** 매칭글 목록 조회 */
export const useMatchingSuspenseQuery = () => {
  return useSuspenseQuery({
    queryKey: [baseKey],
    queryFn: () => getMatchingList({ page: 0, size: 6 }),
  });
};

/** 매칭글 상세 조회 */
export const useMatchingQuery = (id: number) => {
  return useQuery({
    queryKey: [baseKey, id],
    queryFn: () => getMatching(id),
  });
};

/** 매칭글 작성 */
export const useMatchingPostMutation = () => {
  return useMutation({
    mutationKey: [baseKey],
    mutationFn: (data: MatchingPostReq) => postMatching(data),
  });
};

/** 매칭글 수정 */
export const useMatchingPutMutation = () => {
  return useMutation({
    mutationKey: [baseKey],
    mutationFn: ({ data, id }: { data: MatchingPostReq; id: number }) => putMatching(data, id),
  });
};

/** 매칭글 삭제 */
export const useMatchingDeleteMutation = () => {
  return useMutation({
    mutationKey: [baseKey],
    mutationFn: (id: number) => deleteMatching(id),
  });
};

/** 매칭 상태 변경 */
export const useMatchingStatusPutMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [baseKey, id],
    mutationFn: (req: MatchingUpdateStatusReq) => putMatchingStatus(id, req),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [baseKey, id],
      });
    },
  });
};
