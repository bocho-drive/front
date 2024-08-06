import { useLocation, useNavigate } from 'react-router-dom';
// import PostDetail from '@/components/molecules/Post/PostDetail';
import * as S from '@/styles/index.style';
import { Suspense } from 'react';
import Loading from '@/components/atoms/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
// import { deleteCommunity, getCommunityDetail, putCommunity } from '@/@features/Communities/api';
// import { useTipPost } from '@/@features/Admin/Challenge/useTipPost'; //파일 아직 없음
// import AdminCommentList from '@/components/organisms/AdminCommentList';
import Sidebar from '@/components/atoms/Sidebar';

const AdminChallengeVerifiedDetail = () => {
  const navigate = useNavigate();
  //  const { id } = useParams();
  const { search } = useLocation();

  const handleToList = () => navigate('/admin' + search);
  // const isEditMode = useChallengePost((state) => state.isEditMode);

  console.log('AdminChallengeVerifiedDetail render');
  return (
    <S.div.Container $width={100}>
      <S.div.Row $width={90} $gap={40} $justify="center">
        <Sidebar />
        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
          <Suspense fallback={<Loading />}>
            <S.div.Column $gap={40}>
              {/* <PostDetail id={Number(id)} queryFn={getCommunityDetail} deleteFn={deleteCommunity} updateFn={putCommunity}> */}

              <S.div.Row $gap={10} $justify="flex-start">
                <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
                <S.button.Button onClick={handleToList}>삭제</S.button.Button>
              </S.div.Row>

              <S.hr.Hr />
              {/* </PostDetail> */}
            </S.div.Column>
          </Suspense>
        </ErrorBoundary>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminChallengeVerifiedDetail;
