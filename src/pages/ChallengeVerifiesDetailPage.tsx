import * as S from '@/styles/index.style';
import { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DriveLayout from '@/components/templates/DriveLayout';
import CommentList from '@/@features/Comment/components/CommentList';
import PostDetail from '@/components/organisms/Post/PostDetail';
import { useVerifiesQuery } from '@/@features/ChallengeVerifies/useVerifiesQuery';
import { URLS } from '@/App';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';

const ChallengeVerifiesDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { verifyQuery, deleteMutation, likeMutation } = useVerifiesQuery(Number(id));

  const handleDelete = () => {
    if (verifyQuery.data?.isAuthor && window.confirm('정말 삭제하시겠습니까?')) {
      deleteMutation.mutate();
    }
  };

  const handleLike = () => likeMutation.mutate();
  const handleToList = () => navigate(URLS.CHALLENGE);
  const handleToEdit = () => navigate(`${URLS.CHALLENGE_VERIFIES}/edit/${Number(id)}`);

  return (
    <DriveLayout>
      {verifyQuery.isSuccess && (
        <S.div.Column $gap={20}>
          <PostDetail
            data={verifyQuery.data}
            authorActionComp={
              <Fragment>
                <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
                <S.button.Button onClick={handleToEdit}>수정</S.button.Button>
              </Fragment>
            }
          />

          <S.div.Row $gap={10} $justify="center">
            <S.button.Button $colors="secondary" onClick={handleLike}>
              🎉 글 추천
            </S.button.Button>
          </S.div.Row>

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
