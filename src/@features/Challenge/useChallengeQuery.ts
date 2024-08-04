import { useSuspenseQuery } from '@tanstack/react-query';
import { getChallenge } from './api';

export const useChallengeQuery = (id: number) => {
  const challengeQuery = useSuspenseQuery({
    queryKey: ['challenges', id],
    queryFn: () => getChallenge(id),
  });

  return {
    challengeQuery,
  };
};
