import * as S from '@/styles/index.style';
import Loading from '@/components/atoms/Loading';
import { useParams } from 'react-router-dom';
import DriveLayout from '@/components/templates/DriveLayout';
import { useVerifiesQuery } from '@/@features/ChallengeVerifies/useVerifiesQuery';
import PostForm, { PostReturnType } from '@/components/organisms/Post/PostForm';
import ImageS3Button from '@/@features/Community/ImageS3/components/ImageS3Button';

const ChallengeVerifiesEditPage = () => {
  const { id } = useParams();

  const { verifyQuery: verifySuspenseQuery, putMutation } = useVerifiesQuery(Number(id));

  const handlePutCommunity = (data: PostReturnType) => {
    putMutation.mutate({
      id: Number(id),
      data: {
        content: data.content,
        title: data.title,
        image: data.image,
      },
    });
  };

  return (
    <DriveLayout>
      {verifySuspenseQuery.isLoading && <Loading />}
      {!verifySuspenseQuery.isLoading && (
        <S.div.Column $gap={20}>
          <PostForm handlePost={handlePutCommunity} defaultValues={verifySuspenseQuery.data} />

          <S.div.Row $gap={10} $wrap>
            {verifySuspenseQuery.data?.imgUrls.map((url) => (
              <ImageS3Button key={url} url={url} refetchFn={verifySuspenseQuery.refetch} />
            ))}
          </S.div.Row>
        </S.div.Column>
      )}
    </DriveLayout>
  );
};

export default ChallengeVerifiesEditPage;
