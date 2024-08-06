import * as S from '@/styles/index.style';
import { deleteImage } from '../api';
import { useMutation } from '@tanstack/react-query';

interface Props {
  url: string;
  refetchFn?: () => void;
}

const ImageS3Button = ({ url, refetchFn }: Props) => {
  const mutationDeleteImage = useMutation({
    mutationKey: ['deleteImage'],
    mutationFn: (url: string) => deleteImage(url),
    onSuccess: () => refetchFn && refetchFn(),
  });

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
