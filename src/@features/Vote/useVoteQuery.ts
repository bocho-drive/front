import { useQuery } from '@tanstack/react-query';

export const useVoteQuery = (communityId: number) => {
  const { data: voteList, refetch } = useQuery({
    queryKey: ['vote', communityId],
    queryFn: () => {},
  });

  return { voteList };
};
