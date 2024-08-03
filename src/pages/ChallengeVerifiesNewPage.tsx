import * as S from '@/styles/index.style';
import CommunityLayout from '@/components/templates/CommunityLayout/CommunityLayout';
import PostForm, { PostReturnType } from '@/components/organisms/Post/PostForm';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { URLS } from '@/App';
import { postChallengeVerifies } from '@/@features/ChallengeVerifies/api';
import ChallengeDetail from '@/@features/Challenge/components/ChallengeDetail';

import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import { ChallengeVerifiesPostReq } from '@/@features/ChallengeVerifies/type';

const ChallengeVerifiesNewPage = () => {
  const navigate = useNavigate();
  const { challengeId } = useParams();

  const mutationPost = useMutation({
    mutationKey: ['challengeVerifiesNew'],
    mutationFn: (data: ChallengeVerifiesPostReq) => postChallengeVerifies(Number(challengeId), data),
    onSuccess: (id) => {
      navigate(URLS.CHALLENGE_VERIFIES + `/${id}`);
    },
  });

  const handleNewPost = async (data: PostReturnType) => {
    mutationPost.mutate({
      ...data,
    });
  };

  return (
    <CommunityLayout>
      <S.div.Column $gap={20}>
        <ErrorSuspenseLayout>
          <ChallengeDetail challengeId={Number(challengeId)}>
            <PostForm handlePost={handleNewPost} />
          </ChallengeDetail>
        </ErrorSuspenseLayout>
      </S.div.Column>
    </CommunityLayout>
  );
};

export default ChallengeVerifiesNewPage;
