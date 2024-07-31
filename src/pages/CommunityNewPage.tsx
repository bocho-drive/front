import { postCommunity } from '@/@features/Communities/api';
import { CommunityPostReq } from '@/@features/Communities/type';
import PostForm from '@/components/molecules/Post/PostForm';
import CommunityLayout from '@/components/templates/CommunityLayout';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const CommunityNewPage = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ['postCommunity'],
    mutationFn: (data: CommunityPostReq) => postCommunity(data),
    onSuccess: (id) => {
      navigate(`/community/${id}`);
    },
  });

  const handleNewPost = (data: CommunityPostReq) => {
    mutation.mutate(data);
  };

  return (
    <CommunityLayout>
      <PostForm handlePost={handleNewPost} />
    </CommunityLayout>
  );
};

export default CommunityNewPage;
