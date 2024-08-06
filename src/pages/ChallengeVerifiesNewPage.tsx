import * as S from '@/styles/index.style';
import CommunityForm, { PostReturnType } from '@/components/organisms/Community/CommunityForm';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { URLS } from '@/App';
import { postChallengeVerifies } from '@/@features/ChallengeVerifies/api';
import ChallengeDetail from '@/@features/Challenge/components/ChallengeDetail';

import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import { ChallengeVerifiesPostReq } from '@/@features/ChallengeVerifies/type';
import DriveLayout from '@/components/templates/DriveLayout';

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
    <DriveLayout>
      <S.div.Column $gap={20}>
        <ErrorSuspenseLayout>
          <ChallengeDetail challengeId={Number(challengeId)}>
            <CommunityForm handlePost={handleNewPost} />
          </ChallengeDetail>
        </ErrorSuspenseLayout>
      </S.div.Column>
    </DriveLayout>
  );
};

export default ChallengeVerifiesNewPage;
