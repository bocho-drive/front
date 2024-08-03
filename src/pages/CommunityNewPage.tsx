import * as S from '@/styles/index.style';
import CommunityLayout from '@/components/templates/CommunityLayout/CommunityLayout';
import PostForm, { PostReturnType } from '@/components/organisms/Post/PostForm';
import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CommunityPostReq } from '@/@features/Community/type';
import { postCommunity } from '@/@features/Community/api';
import { useNavigate } from 'react-router-dom';
import { useCommunityCategory } from '@/components/templates/CommunityLayout/useCommunityCategory';

const CommunityNewPage = () => {
  const navigate = useNavigate();
  const category = useCommunityCategory((state) => state.category);

  const isVoteRef = useRef<HTMLInputElement>(null);
  const mutationPost = useMutation({
    mutationKey: ['postCommunity'],
    mutationFn: (data: CommunityPostReq) => postCommunity(data),
    onSuccess: (id) => {
      navigate(`/community/${id}`);
    },
  });

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
          <S.input.Checkbox id="isVote" type="checkbox" ref={isVoteRef} defaultChecked={category === 'VOTE'} />
          <S.label.Label htmlFor="isVote">투표 게시글로 만들기</S.label.Label>
        </S.div.Card>
        <PostForm handlePost={handleNewPost} />
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityNewPage;
