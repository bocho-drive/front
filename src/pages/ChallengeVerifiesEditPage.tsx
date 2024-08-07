import { useVerifiesPutMutation, useVerifiesQuery } from '@/@features/ChallengeVerifies/useVerifiesQuery';
import ImageS3Button from '@/@features/Community/ImageS3/components/ImageS3Button';
import Loading from '@/components/atoms/Loading';
import CommunityForm, { PostReturnType } from '@/components/organisms/Community/CommunityForm';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';
import { useNavigate, useParams } from 'react-router-dom';

const ChallengeVerifiesEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const verifyQuery = useVerifiesQuery(Number(id));
  const putMutation = useVerifiesPutMutation();

  const handlePutCommunity = (data: PostReturnType) => {
    putMutation.mutate(
      {
        id: Number(id),
        data: {
          content: data.content,
          title: data.title,
          image: data.image,
        },
      },
      {
        onSuccess: () => {
          verifyQuery.refetch();
          navigate(`/challenge_verifies/${id}`);
        },
      }
    );
  };

  return (
    <DriveLayout>
      {verifyQuery.isLoading && <Loading />}
      {verifyQuery.data && (
        <S.div.Column $gap={20}>
          <CommunityForm handlePost={handlePutCommunity} defaultValues={verifyQuery.data} />

          <S.div.Row $gap={10} $wrap>
            {verifyQuery.data.imgUrls.map((url) => (
              <ImageS3Button key={url} url={url} refetchFn={verifyQuery.refetch} />
            ))}
          </S.div.Row>
        </S.div.Column>
      )}
    </DriveLayout>
  );
};

export default ChallengeVerifiesEditPage;
