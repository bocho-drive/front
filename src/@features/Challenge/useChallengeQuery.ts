import { useSuspenseQuery } from '@tanstack/react-query';
import { getChallenge } from './api';

export const useChallengeQuery = (id: number) => {
  const challengeQuery = useSuspenseQuery({
    queryKey: ['challenges'],
    queryFn: () => getChallenge(id),
  });

  return {
    challengeQuery,
  };
};
