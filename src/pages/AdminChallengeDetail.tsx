import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/styles/index.style';
import { Suspense, useEffect, useState } from 'react';
import Loading from '@/components/atoms/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import Sidebar from '@/components/atoms/Sidebar';
import { Challenge, ChallengePostReq } from '@/@features/Challenge/type';
import { getChallenge, putChallenge, deleteChallenge } from '@/@features/Challenge/api';
import ChallengeDetail from '@/@features/Admin/Challenge/ChallengeDetail';

const AdminChallengeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challengeData, setChallengeData] = useState<Challenge>();

  const [challengePostData, setChallengePostData] = useState<ChallengePostReq>({
    title: '',
    content: '',
    // 필요한 다른 필드들을 추가하세요
  });

  // 챌린지 데이터를 가져와서 `challengePostData`를 초기화하는 useEffect
  useEffect(() => {
    if (challengeData) {
      setChallengePostData({
        title: challengeData.title,
        content: challengeData.content,
        // 필요한 다른 필드들을 설정하세요
      });
    }
  }, [challengeData]);

  // 챌린지 수정 API 호출
  const handleModify = async () => {
    await putChallenge(Number(id), challengePostData);
    fetchData(); // 수정 후 데이터를 다시 불러옵니다
  };

  const handleToList = () => navigate('/admin/challenge');

  const fetchData = async () => {
    // API를 호출하여 챌린지 데이터를 가져옴
    const data = await getChallenge(Number(id));
    console.log({ data });
    setChallengeData(data);
  };

  useEffect(() => {
    if (id === undefined || !Number(id)) {
      handleToList();
    }
    fetchData();
  }, [id]);

  // 챌린지 삭제 API 호출
  const handleDelete = async () => {
    await deleteChallenge(Number(id));
    handleToList(); // 삭제 후 목록으로 이동
  };

  if (id === undefined || !Number(id)) return null;

  return (
    <S.div.Container $width={100}>
      <S.div.Row $width={90} $gap={40} $justify="center">
        <Sidebar />
        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
          <Suspense fallback={<Loading />}>
            <S.div.Column $padding={40} $gap={40}>
              {challengeData !== undefined ? <ChallengeDetail data={challengeData} /> : null}

              <S.div.Row $gap={10} $justify="flex-start">
                <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
                <S.button.Button onClick={handleModify}>수정</S.button.Button>
                <S.button.Button onClick={handleDelete}>삭제</S.button.Button>
              </S.div.Row>
            </S.div.Column>
          </Suspense>
        </ErrorBoundary>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminChallengeDetail;
