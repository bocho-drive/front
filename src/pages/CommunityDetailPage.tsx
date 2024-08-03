import { useParams } from 'react-router-dom';
import CommunityLayout from '@/components/templates/CommunityLayout/CommunityLayout';
import * as S from '@/styles/index.style';
import CommentList from '@/@features/Comment/components/CommentList';
import CommunityDetail from '@/@features/Community/components/CommunityDetail';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';

const CommunityDetailPage = () => {
  const { id } = useParams();

  return (
    <CommunityLayout>
      <ErrorSuspenseLayout>
        <S.div.Column $gap={20}>
          <CommunityDetail communityId={Number(id)} />
          <S.h.H3>댓글</S.h.H3>
          <CommentList communityId={Number(id)} isNeedNewForm />
        </S.div.Column>
      </ErrorSuspenseLayout>
    </CommunityLayout>
  );
};

export default CommunityDetailPage;
