import * as S from '@/styles/index.style';
import Comment from '../molecules/Comment';

const CommentList = () => {
  return (
    <S.div.Column $gap={20}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </S.div.Column>
  );
};

export default CommentList;
