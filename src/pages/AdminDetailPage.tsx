import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/styles/index.style';
import { Suspense, useEffect, useState } from 'react';
import Loading from '@/components/atoms/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import Sidebar from '@/components/atoms/Sidebar';
import PostDetail from '@/components/organisms/Post/PostDetail';
import { CommunityDetailRes } from '@/@features/Community/type';
import { getCommunityDetail } from '@/@features/Community/api';

const AdminDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [communityData, setCommunityData] = useState<CommunityDetailRes>();

  const handleToList = () => navigate('/admin');

  const fetchData = async () => {
    const data = await getCommunityDetail(Number(id));
    console.log({ data });
    setCommunityData(data);
  };

  useEffect(() => {
    if (id === undefined || !Number(id)) {
      handleToList();
    }
    fetchData();
  }, []);

  if (id === undefined || !Number(id)) return null;

  return (
    <S.div.Container $width={100}>
      <S.div.Row $width={90} $gap={40} $justify="center">
        <Sidebar />
        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
          <Suspense fallback={<Loading />}>
            <S.div.Column $gap={40}>
              {communityData !== undefined ? <PostDetail data={communityData} /> : null}

              <S.div.Row $gap={10} $justify="flex-start">
                <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
                <S.button.Button onClick={handleToList}>삭제</S.button.Button>
              </S.div.Row>
            </S.div.Column>
          </Suspense>
        </ErrorBoundary>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminDetailPage;
