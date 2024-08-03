import * as S from '@/styles/index.style';
import { useCommunityPost } from '@/@features/Community/useCommunityQuery';
import CommunityLayout from '@/components/templates/CommunityLayout';
import PostForm, { PostReturnType } from '@/components/organisms/Post/PostForm';
import { useRef } from 'react';

const CommunityNewPage = () => {
  const isVoteRef = useRef<HTMLInputElement>(null);
  const { mutationPost } = useCommunityPost();

  const handleNewPost = async (data: PostReturnType) => {
    const category = isVoteRef.current?.checked ? 'VOTE' : 'GENERAL';

    mutationPost.mutate({
      title: data.title,
      content: data.content,
      category,
      image: data.image,
    });
  };

  return (
    <CommunityLayout>
      <S.div.Column $gap={20}>
        <S.div.Card style={{ width: 'fit-content' }}>
          <S.input.Checkbox id="isVote" type="checkbox" ref={isVoteRef} />
          <S.label.Label htmlFor="isVote">투표 게시글로 만들기</S.label.Label>
        </S.div.Card>
        <PostForm handlePost={handleNewPost} />
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityNewPage;
