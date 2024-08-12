import * as S from '@/styles/index.style';
import { useLikeDeleteMutation, useLikePostMutation, useLikeQuery } from '../useLikeQuery';

interface Props {
  communityId: number;
  onSuccessFn: () => void;
}

const LikeButton = ({ communityId, onSuccessFn }: Props) => {
  const likeQuery = useLikeQuery(communityId);
  const mutationLike = useLikePostMutation();
  const mutationUnlike = useLikeDeleteMutation();

  const handleLike = () => {
    const onSuccess = () => {
      likeQuery.refetch();
      onSuccessFn();
    };
    if (likeQuery.data) {
      mutationUnlike.mutate(communityId, { onSuccess });
    } else {
      mutationLike.mutate(communityId, { onSuccess });
    }
  };
  return (
    <S.div.Row $gap={10} $justify="center">
      <S.button.Button disabled={likeQuery.isLoading} $colors={likeQuery.data ? 'secondary' : undefined} onClick={handleLike}>
        🎉 글 추천
      </S.button.Button>
    </S.div.Row>
  );
};

export default LikeButton;
