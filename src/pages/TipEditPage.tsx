import * as S from '@/styles/index.style';
import { useCommunityQueryWithId } from '@/@features/Community/useCommunityQuery';
import PostForm, { PostReturnType } from '@/components/organisms/Post/PostForm';
import DriveLayout from '@/components/templates/DriveLayout';
import { useParams } from 'react-router-dom';
import ImageS3Button from '@/@features/Community/ImageS3/components/ImageS3Button';
import { CATEGORY } from '@/@features/Community/type';

const TipEditPage = () => {
  const { id } = useParams();

  const { data, mutationPut } = useCommunityQueryWithId(Number(id));

  const handlePutCommunity = (data: PostReturnType) => {
    mutationPut.mutate({
      content: data.content,
      title: data.title,
      image: data.image,
      category: CATEGORY.TIP,
    });
  };

  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <PostForm handlePost={handlePutCommunity} defaultValues={data} />

        <S.div.Row $gap={10} $wrap>
          {data?.imgUrls.map((url) => (
            <ImageS3Button key={url} url={url} communityId={Number(id)} />
          ))}
        </S.div.Row>
      </S.div.Column>
    </DriveLayout>
  );
};

export default TipEditPage;
