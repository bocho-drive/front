import { Fragment } from 'react';
import * as S from '@/styles/index.style';
import PostDetail from '@/components/organisms/Post/PostDetail';
import { useNavigate } from 'react-router-dom';
import { useVerifiesQuery } from '../useVerifiesQuery';
import { URLS } from '@/App';

interface Props {
  communityId: number;
}

const VerifiesDetail = ({ communityId }: Props) => {
  const navigate = useNavigate();

  const { verifySuspenseQuery, deleteMutation, mutationLike } = useVerifiesQuery(communityId);

  const handleDelete = () => {
    if (verifySuspenseQuery.data.isAuthor && window.confirm('정말 삭제하시겠습니까?')) {
      deleteMutation.mutate();
    }
  };

  const handleLike = () => mutationLike.mutate();
  const handleToList = () => navigate(URLS.CHALLENGE);
  const handleToEdit = () => navigate(`${URLS.CHALLENGE_VERIFIES}/edit/${communityId}`);

  return (
    <S.div.Column $gap={20}>
      <PostDetail
        data={verifySuspenseQuery.data}
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
    </S.div.Column>
  );
};

export default VerifiesDetail;
