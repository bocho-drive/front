import * as S from '@/styles/index.style';
import { useCommunityQuery } from '../useCommunityQuery';
import PostForm, { PostReturnType } from '@/components/organisms/Post/PostForm';
import { useRef } from 'react';

interface Props {
  communityId: number;
}

const CommunityEdit = ({ communityId }: Props) => {
  const isVoteRef = useRef<HTMLInputElement>(null);
  const { data, mutationPut } = useCommunityQuery(communityId);

  const handlePutCommunity = (data: PostReturnType) => {
    const category = isVoteRef.current?.checked ? 'VOTE' : 'GENERAL';

    mutationPut.mutate({
      ...data,
      category,
    });
  };

  return (
    <S.div.Column $gap={20}>
      <S.div.Card style={{ width: 'fit-content' }}>
        <S.input.Checkbox id="isVote" type="checkbox" ref={isVoteRef} defaultChecked={data.category === 'VOTE'} />
        <S.label.Label htmlFor="isVote">투표 게시글로 만들기</S.label.Label>
      </S.div.Card>
      <PostForm handlePost={handlePutCommunity} defaultValues={data} />
    </S.div.Column>
  );
};

export default CommunityEdit;
