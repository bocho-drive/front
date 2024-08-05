import MatchingForm, { MatchingReturnType } from '@/@features/Matching/components/MatchingForm';
import { useMatchingPostMutation } from '@/@features/Matching/useMatchingQuery';
import DriveLayout from '@/components/templates/DriveLayout';
import { useNavigate } from 'react-router-dom';

const MatchingNewPage = () => {
  const navigate = useNavigate();

  const postMutation = useMatchingPostMutation();
  const handlePost = (data: MatchingReturnType) => {
    postMutation.mutate(
      {
        title: data.title,
        content: data.content,
        type: 'STUDENT',
      },
      {
        onSuccess: (data) => {
          navigate(`/matching/${data.id}`);
        },
      }
    );
  };

  return (
    <DriveLayout>
      <MatchingForm handlePost={handlePost} />
    </DriveLayout>
  );
};

export default MatchingNewPage;
