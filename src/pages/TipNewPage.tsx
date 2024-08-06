import * as S from '@/styles/index.style';
import CommunityForm, { PostReturnType } from '@/components/organisms/Community/CommunityForm';
import { useNavigate } from 'react-router-dom';
import DriveLayout from '@/components/templates/DriveLayout';
import { useCommunityPostMutation } from '@/@features/Community/useCommunityQuery';

const TipNewPage = () => {
  const navigate = useNavigate();

  const mutationPost = useCommunityPostMutation();

  const handleNewPost = async (data: PostReturnType) => {
    mutationPost.mutate(
      {
        title: data.title,
        content: data.content,
        category: 'TIP',
        image: data.image,
      },
      {
        onSuccess: (id) => navigate(`/tip/${id}`),
      }
    );
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
