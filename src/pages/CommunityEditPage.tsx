import * as S from '@/styles/index.style';
import { useParams } from 'react-router-dom';
import { useCommunityQueryWithId } from '@/@features/Community/useCommunityQuery';
import PostForm, { PostReturnType } from '@/components/organisms/Post/PostForm';
import ImageS3Button from '@/@features/Community/ImageS3/components/ImageS3Button';
import { useRef } from 'react';
import CommunityLayout from '@/components/templates/CommunityLayout/CommunityLayout';

const CommunityEditPage = () => {
  const { id } = useParams();

  const isVoteRef = useRef<HTMLInputElement>(null);
  const { getDetailQuery, mutationPut } = useCommunityQueryWithId(Number(id));

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
    <CommunityLayout>
      <S.div.Column $gap={20}>
        <S.div.Card style={{ width: 'fit-content' }}>
          <S.input.Checkbox id="isVote" type="checkbox" ref={isVoteRef} defaultChecked={getDetailQuery.data.category === 'VOTE'} />
          <S.label.Label htmlFor="isVote">투표 게시글로 만들기</S.label.Label>
        </S.div.Card>
        <PostForm handlePost={handlePutCommunity} defaultValues={getDetailQuery.data} />

        <S.div.Row $gap={10} $wrap>
          {getDetailQuery.data?.imgUrls.map((url) => (
            <ImageS3Button key={url} url={url} refetchFn={getDetailQuery.refetch} />
          ))}
        </S.div.Row>
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityEditPage;
