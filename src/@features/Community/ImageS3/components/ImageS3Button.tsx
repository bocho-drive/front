import * as S from '@/styles/index.style';
import { useCommunityQueryWithId } from '@/@features/Community/useCommunityQuery';

interface Props {
  url: string;
  communityId: number;
}

const ImageS3Button = ({ url, communityId }: Props) => {
  const { mutationDeleteImage } = useCommunityQueryWithId(communityId);

  const handleDelete = () => {
    if (confirm('정말 삭제하시겠습니까?')) mutationDeleteImage.mutate(url);
  };
  return (
    <S.button.Button onClick={handleDelete}>
      <S.img.Img src={url} alt="upload-image" width={100} />
    </S.button.Button>
  );
};

export default ImageS3Button;
