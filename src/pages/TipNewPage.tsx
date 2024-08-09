import * as S from '@/styles/index.style';
import CommunityForm, { PostReturnType } from '@/components/organisms/Community/CommunityForm';
import { useMutation } from '@tanstack/react-query';
import { CommunityPostReq } from '@/@features/Community/type';
import { postCommunity } from '@/@features/Community/api';
import { useNavigate } from 'react-router-dom';
import DriveLayout from '@/components/templates/DriveLayout';

const TipNewPage = () => {
  const navigate = useNavigate();

  const mutationPost = useMutation({
    mutationKey: ['postCommunity'],
    mutationFn: (data: CommunityPostReq) => postCommunity(data),
    onSuccess: (id) => {
      navigate(`/tip/${id}`);
    },
  });

  const handleNewPost = async (data: PostReturnType) => {
    mutationPost.mutate({
      title: data.title,
      content: data.content,
      category: 'TIP',
      image: data.image,
    });
  };

  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <CommunityForm handlePost={handleNewPost} />
      </S.div.Column>
    </DriveLayout>
  );
};

export default TipNewPage;
