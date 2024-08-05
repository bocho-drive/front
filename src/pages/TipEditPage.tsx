import * as S from '@/styles/index.style';
import { useCommunityPutMutation, useCommunityQuery } from '@/@features/Community/useCommunityQuery';
import CommunityForm, { PostReturnType } from '@/components/organisms/Community/CommunityForm';
import DriveLayout from '@/components/templates/DriveLayout';
import { useNavigate, useParams } from 'react-router-dom';
import ImageS3Button from '@/@features/Community/ImageS3/components/ImageS3Button';
import { CATEGORY } from '@/@features/Community/type';
import Loading from '@/components/atoms/Loading';

const TipEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const communityId = Number(id);

  const { data, isLoading, refetch } = useCommunityQuery(communityId);
  const putMutation = useCommunityPutMutation(communityId);

  const handlePutCommunity = async (data: PostReturnType) => {
    await putMutation.mutateAsync({
      content: data.content,
      title: data.title,
      image: data.image,
      category: CATEGORY.TIP,
    });

    navigate(`/tip/${communityId}`);
  };

  return (
    <DriveLayout>
      {isLoading && <Loading />}
      {data && (
        <S.div.Column $gap={20}>
          <CommunityForm handlePost={handlePutCommunity} defaultValues={data} />

          <S.div.Row $gap={10} $wrap>
            {data.imgUrls.map((url) => (
              <ImageS3Button key={url} url={url} refetchFn={refetch} />
            ))}
          </S.div.Row>
        </S.div.Column>
      )}
    </DriveLayout>
  );
};

export default TipEditPage;
