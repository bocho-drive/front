import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { MatchingStatus, MatchingType } from '@/@features/Matching/components/MatchingCard';
import { useMatchingDeleteMutation, useMatchingQuery } from '@/@features/Matching/useMatchingQuery';
import ApplyButton from '@/@features/MatchingApply/components/ApplyButton';
import ApplyList from '@/@features/MatchingApply/components/ApplyList';
import { useMatchingStore } from '@/@features/Matching/useMatchingStore';
import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import Loading from '@/components/atoms/Loading';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import * as S from '@/styles/index.style';
import { getDateString } from '@/utils/stringUtil';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import MatchingStatusCard from '@/@features/Matching/components/MatchingStatusCard';

const MatchingDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useMatchingQuery(Number(id));
  const deleteMutation = useMatchingDeleteMutation();

  const { userInfo, isLogin } = useAuthStore((state) => ({
    userInfo: state.userInfo,
    isLogin: state.isLogin(),
  }));
  const setMatching = useMatchingStore((state) => state.setMatching);

  const handleToList = () => {
    navigate('/matching');
  };
  const handleToEditPage = () => [navigate(`/matching/edit/${id}`)];
  const handleToDelete = () => {
    if (confirm('정말 삭제하시겠습니까?'))
      deleteMutation.mutate(Number(id), {
        onSuccess: () => {
          handleToList();
        },
      });
  };

  useEffect(() => {
    if (data) {
      setMatching(data);
    }
  }, [data, setMatching]);

  return (
    <DriveLayout>
      {isLoading && <Loading />}
      {data && (
        <S.div.Column $gap={20}>
          <S.div.Column $gap={20}>
            <S.div.Row $between>
              <S.div.Row $gap={10}>
                {data.studentId === userInfo?.userId && (
                  <Fragment>
                    <S.button.Button $size="small" onClick={handleToEditPage}>
                      수정
                    </S.button.Button>
                    <S.button.Button $size="small" onClick={handleToDelete}>
                      삭제
                    </S.button.Button>
                  </Fragment>
                )}
              </S.div.Row>
              <KakaoShareButton title={data.title} />
            </S.div.Row>

            <S.div.Row $gap={10}>
              <MatchingStatus status={data.status} />
              <MatchingType type={data.type} />
            </S.div.Row>
            <S.h.H1>{data.title}</S.h.H1>

            <S.div.Row $gap={10} $align="center">
              <S.h.H5>{data.studentName}</S.h.H5>
            </S.div.Row>
            <S.div.Row $between>
              <S.small.Small>{getDateString(data.createdAt)}</S.small.Small>
            </S.div.Row>
            <S.hr.Hr />

            <S.span.Span>{data.content}</S.span.Span>
          </S.div.Column>

          {userInfo?.userRole === 'TEACHER' && <ApplyButton matchingId={Number(id)} />}

          {data.studentId === userInfo?.userId && <MatchingStatusCard matching={data} />}

          <S.div.Row $gap={10} $justify="flex-start">
            <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
          </S.div.Row>

          {isLogin && (
            <Fragment>
              <S.hr.Hr />
              <S.h.H4>신청 목록</S.h.H4>
              <ErrorSuspenseLayout>
                <ApplyList matchingId={Number(id)} />
              </ErrorSuspenseLayout>
            </Fragment>
          )}
        </S.div.Column>
      )}
    </DriveLayout>
  );
};

export default MatchingDetailPage;
