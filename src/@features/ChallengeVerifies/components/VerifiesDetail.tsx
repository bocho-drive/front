import CommunityDetail from '@/components/organisms/Community/CommunityDetail';
import * as S from '@/styles/index.style';
import { useVerifiesDeleteMutation, useVerifiesSuspenseQuery } from '../useVerifiesQuery';
import LikeButton from '@/@features/Like/components/LikeButton';
import { URLS } from '@/App';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

interface Props {
  commnuityId: number;
}

const VerifiesDetail = ({ commnuityId }: Props) => {
  const navigate = useNavigate();

  const verifyQuery = useVerifiesSuspenseQuery(commnuityId);
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
    </S.div.Column>
  );
};

export default VerifiesDetail;
