import * as S from '@/styles/index.style';
import { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DriveLayout from '@/components/templates/DriveLayout';
import CommentList from '@/@features/Comment/components/CommentList';
import CommunityDetail from '@/components/organisms/Community/CommunityDetail';
import { useVerifiesDeleteMutation, useVerifiesQuery } from '@/@features/ChallengeVerifies/useVerifiesQuery';
import { URLS } from '@/App';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import Loading from '@/components/atoms/Loading';
import LikeButton from '@/@features/Like/components/LikeButton';

const ChallengeVerifiesDetailPage = () => {
  const { id } = useParams();
  const commnuityId = Number(id);
  const navigate = useNavigate();

  const verifyQuery = useVerifiesQuery(commnuityId);
  const deleteMutation = useVerifiesDeleteMutation();

  const handleDelete = () => {
    if (verifyQuery.data?.isAuthor && window.confirm('정말 삭제하시겠습니까?')) {
      deleteMutation.mutate(commnuityId);
      handleToList();
    }
  };

  const handleToList = () => navigate(URLS.CHALLENGE);
  const handleToEdit = () => navigate(`${URLS.CHALLENGE_VERIFIES}/edit/${commnuityId}`);

  return (
    <DriveLayout>
      {verifyQuery.isLoading && <Loading />}
      {verifyQuery.isSuccess && (
        <S.div.Column $gap={20}>
          <CommunityDetail
            data={verifyQuery.data}
            authorActionComp={
              <Fragment>
                <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
                <S.button.Button onClick={handleToEdit}>수정</S.button.Button>
              </Fragment>
            }
          />

          <LikeButton communityId={commnuityId} onSuccessFn={verifyQuery.refetch} />

          <S.div.Row $gap={10} $justify="flex-start">
            <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
          </S.div.Row>

          <S.hr.Hr />

          <S.h.H3>댓글</S.h.H3>
          <ErrorSuspenseLayout>
            <CommentList communityId={Number(id)} isNeedNewForm />
          </ErrorSuspenseLayout>
        </S.div.Column>
      )}
    </DriveLayout>
  );
};

export default ChallengeVerifiesDetailPage;
