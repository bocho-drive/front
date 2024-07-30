import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import PostDetail from '@/components/molecules/Post/PostDetail';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';
import { useNavigate } from 'react-router-dom';

const TipDetailPage = () => {
  const navigate = useNavigate();

  const handleToList = () => {
    navigate('/tip');
  };
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <PostDetail />

        <S.div.Row $gap={10} $justify="center">
          <KakaoShareButton title="팁 상세 페이지" displayIcon={true} />
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

export default TipDetailPage;
