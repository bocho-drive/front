import * as S from '@/styles/index.style';
import PostDetail from '@/components/molecules/PostDetail';
import DriveLayout from '@/components/templates/DriveLayout';
import { useNavigate } from 'react-router-dom';

const MatchingDetailPage = () => {
  const navigate = useNavigate();
  const handleToList = () => {
    navigate('/matching');
  };
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <PostDetail />

        <S.div.Row $gap={10} $justify="center">
          <S.button.Button>공유하기</S.button.Button>
          <S.button.Button>매칭 신청하기</S.button.Button>
        </S.div.Row>

        <S.div.Gap $height={20} />

        <S.div.Row $gap={10} $justify="flex-start">
          <S.button.Button>이전글</S.button.Button>
          <S.button.Button>다음글</S.button.Button>
          <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
        </S.div.Row>
      </S.div.Column>
    </DriveLayout>
  );
};

export default MatchingDetailPage;
