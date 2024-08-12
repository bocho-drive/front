import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteLike, getLike, postLike } from './api';

const key = 'like';

export const useLikeQuery = (communityId: number) => {
  return useQuery({
    queryKey: [key, communityId],
    queryFn: () => getLike({ communityId }),
  });
};

export const useLikePostMutation = () => {
  return useMutation({
    mutationFn: (communityId: number) => postLike({ communityId }),
  });
};

export const useLikeDeleteMutation = () => {
  return useMutation({
    mutationFn: (communityId: number) => deleteLike({ communityId }),
  });
};
