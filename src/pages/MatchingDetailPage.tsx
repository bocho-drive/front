import * as S from '@/styles/index.style';
import DriveLayout from '@/components/templates/DriveLayout';
import { useNavigate, useParams } from 'react-router-dom';
import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import { useMatchingDeleteMutation, useMatchingQuery } from '@/@features/Matching/useMatchingQuery';
import Loading from '@/components/atoms/Loading';
import { getDateString } from '@/util/util';
import { useAuth } from '@/@features/Auth/useAuth';
import { Fragment } from 'react/jsx-runtime';

const MatchingDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useMatchingQuery(Number(id));
  const userId = useAuth((state) => state.userId);
  const isAuthor = data?.userId === userId;

  const navigate = useNavigate();
  const deleteMutation = useMatchingDeleteMutation();

  const handleToList = () => {
    navigate('/matching');
  };
  const handleToEditPage = () => [navigate(`/matching/${id}/edit`)];
  const handleToDelete = () => {
    if (confirm('정말 삭제하시겠습니까?'))
      deleteMutation.mutate(Number(id), {
        onSuccess: () => {
          handleToList();
        },
      });
  };

  return (
    <DriveLayout>
      {isLoading && <Loading />}
      {data && (
        <S.div.Column $gap={20}>
          <S.div.Column $gap={20}>
            <S.div.Row $between>
              <S.div.Row $gap={10}>
                {isAuthor && (
                  <Fragment>
                    <S.button.Button onClick={handleToEditPage}>수정</S.button.Button>
                    <S.button.Button onClick={handleToDelete}>삭제</S.button.Button>
                  </Fragment>
                )}
              </S.div.Row>
              <KakaoShareButton title={data.title} />
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

          <S.div.Row $gap={10} $justify="center">
            <S.button.Button>매칭 신청하기</S.button.Button>
          </S.div.Row>

          <S.div.Gap $height={20} />

          <S.div.Row $gap={10} $justify="flex-start">
            <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
          </S.div.Row>
        </S.div.Column>
      )}
    </DriveLayout>
  );
};

export default MatchingDetailPage;
