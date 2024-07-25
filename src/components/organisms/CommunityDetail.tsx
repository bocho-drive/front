import * as S from '@/styles/index.style';
import CommentForm from '../molecules/CommentForm';
import Comment from '../molecules/Comment';
import { useLocation, useNavigate } from 'react-router-dom';
import PostDetail from '../molecules/PostDetail';

const CommunityDetail = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleToList = () => navigate('/community' + search);

  return (
    <S.div.Column $gap={20}>
      <PostDetail />
      <S.div.Gap $height={20} />

      <S.div.Row $gap={10} $justify="center">
        <S.button.Button>공유하기</S.button.Button>
        <S.button.Button>글 추천</S.button.Button>
      </S.div.Row>

      <S.div.Gap $height={20} />

      <S.div.Row $gap={10} $justify="flex-start">
        <S.button.Button>이전글</S.button.Button>
        <S.button.Button>다음글</S.button.Button>
        <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
      </S.div.Row>

      <S.hr.Hr />

      <S.div.Gap $height={10} />

      <S.h.H3>댓글</S.h.H3>
      <CommentForm />

      <Comment />
    </S.div.Column>
  );
};

export default CommunityDetail;
