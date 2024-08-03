import * as S from '@/styles/index.style';
import { useCommunityQueryWithId } from '../useCommunityQuery';
import PostForm, { PostReturnType } from '@/components/organisms/Post/PostForm';
import { useRef } from 'react';
import ImageS3Button from '../ImageS3/components/ImageS3Button';

interface Props {
  communityId: number;
}

const CommunityEdit = ({ communityId }: Props) => {
  const isVoteRef = useRef<HTMLInputElement>(null);
  const { data, mutationPut } = useCommunityQueryWithId(communityId);

  const handlePutCommunity = (data: PostReturnType) => {
    const category = isVoteRef.current?.checked ? 'VOTE' : 'GENERAL';

    mutationPut.mutate({
      content: data.content,
      title: data.title,
      image: data.image,
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

      <S.div.Row $gap={10} $wrap>
        {data?.imgUrls.map((url) => (
          <ImageS3Button key={url} url={url} communityId={communityId} />
        ))}
      </S.div.Row>
    </S.div.Column>
  );
};

export default CommunityEdit;
