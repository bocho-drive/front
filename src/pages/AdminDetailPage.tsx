import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/styles/index.style';
import { Suspense, useEffect, useState } from 'react';
import Loading from '@/components/atoms/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import Sidebar from '@/components/atoms/Sidebar';
import AdminCommunityDetail from '@/components/organisms/Community/AdminCommunityDetail';
import { CommunityDetailRes } from '@/@features/Community/type';
import { deleteCommunity, getCommunityDetail } from '@/@features/Community/api';
import CommentList from '@/@features/Comment/components/CommentList';

const AdminDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [communityData, setCommunityData] = useState<CommunityDetailRes>();

  const handleToList = () => navigate('/admin');

  const fetchData = async () => {
    // api 호출
    const data = await getCommunityDetail(Number(id));
    console.log({ data });
    setCommunityData(data);

    // if(data.category === "GENERAL") {}
  };

  // id  : category
  // 10번 : 일반
  // 11번 : 일반
  // 12번 : 일반

  // 22번 : TIP
  // 23번 : TIP
  // 24번 : TIP

  // 33번 : 챌린지인증
  // 34번 : 챌린지인증
  // 35번 : 챌린지인증

  useEffect(() => {
    if (id === undefined || !Number(id)) {
      handleToList();
    }
    fetchData();
  }, []);

  const handleDelete = () => {
    deleteCommunity(Number(id));
    handleToList();
  };

  if (id === undefined || !Number(id)) return null;

  return (
    <S.div.Container $width={100}>
      <S.div.Row $width={90} $gap={40} $justify="center">
        <Sidebar />
        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
          <Suspense fallback={<Loading />}>
            <S.div.Column $padding={40} $gap={40}>
              {communityData !== undefined ? <AdminCommunityDetail data={communityData} /> : null}

              <S.div.Row $gap={10} $justify="flex-start">
                <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
                <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
              </S.div.Row>

              <CommentList communityId={Number(id)} />
            </S.div.Column>
          </Suspense>
        </ErrorBoundary>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminDetailPage;
