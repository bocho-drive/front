import * as S from '@/styles/index.style';
import { useParams } from 'react-router-dom';
import DriveLayout from '@/components/templates/DriveLayout';
import CommentList from '@/@features/Comment/components/CommentList';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import VerifiesDetail from '@/@features/ChallengeVerifies/components/VerifiesDetail';

const ChallengeVerifiesDetailPage = () => {
  const { id } = useParams();
  const commnuityId = Number(id);

  return (
    <DriveLayout>
      <ErrorSuspenseLayout>
        <S.div.Column $gap={20}>
          <VerifiesDetail commnuityId={commnuityId} />
          <S.hr.Hr />
          <S.h.H3>댓글</S.h.H3>
          <CommentList communityId={Number(id)} isNeedNewForm />
        </S.div.Column>
      </ErrorSuspenseLayout>
    </DriveLayout>
  );
};

export default ChallengeVerifiesDetailPage;
