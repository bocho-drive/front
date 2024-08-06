import ChallengeDetail from '@/@features/Challenge/components/ChallengeDetail';
import { URLS } from '@/App';
import CommunityForm, { PostReturnType } from '@/components/organisms/Community/CommunityForm';
import * as S from '@/styles/index.style';
import { useNavigate, useParams } from 'react-router-dom';

import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import { useVerifiesPostMutation } from '@/@features/ChallengeVerifies/useVerifiesQuery';

const ChallengeVerifiesNewPage = () => {
  const navigate = useNavigate();
  const { challengeId } = useParams();

  const mutationPost = useVerifiesPostMutation();

  const handleNewPost = async (data: PostReturnType) => {
    mutationPost.mutate(
      {
        challengeId: Number(challengeId),
        data: {
          content: data.content,
          title: data.title,
          image: data.image,
        },
      },
      {
        onSuccess: (id) => navigate(URLS.CHALLENGE_VERIFIES + `/${id}`),
      }
    );
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
