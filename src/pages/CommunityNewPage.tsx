import { useCommunityPostMutation } from '@/@features/Community/useCommunityQuery';
import CommunityForm, { PostReturnType } from '@/components/organisms/Community/CommunityForm';
import CommunityLayout from '@/components/templates/CommunityLayout/CommunityLayout';
import { useCommunityCategory } from '@/components/templates/CommunityLayout/useCommunityCategory';
import * as S from '@/styles/index.style';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityNewPage = () => {
  const navigate = useNavigate();
  const category = useCommunityCategory((state) => state.category);

  const isVoteRef = useRef<HTMLInputElement>(null);
  const mutationPost = useCommunityPostMutation();

  const handleNewPost = (data: PostReturnType) => {
    const category = isVoteRef.current?.checked ? 'VOTE' : 'GENERAL';

    mutationPost.mutate(
      {
        title: data.title,
        content: data.content,
        category,
        image: data.image,
      },
      {
        onSuccess: (id) => navigate(`/community/${id}`),
      }
    );
  };

  return (
    <CommunityLayout>
      <S.div.Column $gap={20}>
        <S.div.Card style={{ width: 'fit-content' }}>
          <S.input.Checkbox id="isVote" type="checkbox" ref={isVoteRef} defaultChecked={category === 'VOTE'} />
          <S.label.Label htmlFor="isVote">투표 게시글로 만들기</S.label.Label>
        </S.div.Card>
        <CommunityForm handlePost={handleNewPost} />
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityNewPage;
