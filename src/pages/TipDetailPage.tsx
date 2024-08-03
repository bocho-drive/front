import CommentList from '@/@features/Comment/components/CommentList';
import CommunityDetail from '@/@features/Community/components/CommunityDetail';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import * as S from '@/styles/index.style';
import { useParams } from 'react-router-dom';

const TipDetailPage = () => {
  const { id } = useParams();

  return (
    <DriveLayout>
      <ErrorSuspenseLayout>
        <S.div.Column $gap={20}>
          <CommunityDetail communityId={Number(id)} />
          <S.h.H3>댓글</S.h.H3>
          <CommentList communityId={Number(id)} isNeedNewForm />
        </S.div.Column>
      </ErrorSuspenseLayout>
    </DriveLayout>
  );
};

export default TipDetailPage;
