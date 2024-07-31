import * as S from '@/styles/index.style';
import Comment from './Comment';
import { useCommentQuery } from '@/@features/Comment/useCommentQuery';
import CommentNewForm from '@/@features/Comment/components/CommentNewForm';

interface Props {
  communityId: number;
}

const CommentList = ({ communityId }: Props) => {
  const { data: commentList } = useCommentQuery(communityId);

  return (
    <S.div.Column $gap={20}>
      <CommentNewForm communityId={communityId} />
      {commentList.length === 0 && <S.h.H3>댓글이 없어요.</S.h.H3>}
      {commentList?.map((comment) => (
        <Comment key={comment.id} comment={comment} communityId={communityId} />
      ))}
    </S.div.Column>
  );
};

export default CommentList;
