import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CommunityLayout from '@/components/templates/CommunityLayout';
import PostDetail from '@/components/molecules/PostDetail';
import * as S from '@/styles/index.style';
import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import CommentForm from '@/components/molecules/CommentForm';
import Comment from '@/components/molecules/Comment';
import VoteForm from '@/components/organisms/VoteForm';

const CommunityDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleToList = () => navigate('/community' + search);

  return (
    <CommunityLayout>
      <S.div.Column $gap={40}>
        <PostDetail />

        <VoteForm />

        <S.div.Row $gap={10} $justify="center">
          <KakaoShareButton title="제목" />
          <S.button.Button>글 추천</S.button.Button>
        </S.div.Row>

        <S.div.Row $gap={10} $justify="flex-start">
          <S.button.Button>이전글</S.button.Button>
          <S.button.Button>다음글</S.button.Button>
          <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
        </S.div.Row>

        <S.hr.Hr />

        <S.h.H3>댓글</S.h.H3>
        <CommentForm />

        <Comment />
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityDetailPage;
