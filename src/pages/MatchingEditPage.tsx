import MatchingForm, { MatchingReturnType } from '@/@features/Matching/components/MatchingForm';
import { useMatchingPutMutation, useMatchingQuery } from '@/@features/Matching/useMatchingQuery';
import Loading from '@/components/atoms/Loading';
import DriveLayout from '@/components/templates/DriveLayout';
import { useNavigate, useParams } from 'react-router-dom';

const MatchingEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: matchingData, isLoading } = useMatchingQuery(Number(id));
  const putMutation = useMatchingPutMutation();
  const handlePutMatching = (data: MatchingReturnType) => {
    if (matchingData === undefined) return;

    putMutation.mutate(
      {
        id: Number(id),
        data: {
          content: data.content,
          title: data.title,
          type: matchingData?.type,
        },
      },
      {
        onSuccess: () => {
          navigate(`/matching/${id}`);
        },
      }
    );
  };

  return (
    <DriveLayout>
      {isLoading && <Loading />}
      {matchingData && <MatchingForm handlePost={handlePutMatching} defaultValues={matchingData} />}
    </DriveLayout>
  );
};

export default MatchingEditPage;
