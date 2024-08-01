import * as S from '@/styles/index.style';
import DriveLayout from '@/components/templates/DriveLayout';
import { useNavigate } from 'react-router-dom';
import KakaoShareButton from '@/components/atoms/KakaoShareButton';

const MatchingDetailPage = () => {
  const navigate = useNavigate();
  const handleToList = () => {
    navigate('/matching');
  };
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        {/* <PostDetail /> */}

        <S.div.Row $gap={10} $justify="center">
          <KakaoShareButton title="매칭 상세 페이지" displayIcon={true} />
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
