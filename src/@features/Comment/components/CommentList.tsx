import * as S from '@/styles/index.style';
import Comment from './Comment';
import { useCommentQuery } from '@/@features/Comment/useCommentQuery';
import CommentNew from '@/@features/Comment/components/CommentNew';

interface Props {
  communityId: number;
  isNeedNewForm?: boolean;
}

/**
 * Suspense 사용 필수
 */
const CommentList = ({ communityId, isNeedNewForm }: Props) => {
  const { data: commentList } = useCommentQuery(communityId);

  return (
    <S.div.Column $gap={20}>
      {isNeedNewForm && <CommentNew communityId={communityId} />}
      {commentList.length === 0 && <S.h.H3>댓글이 없어요.</S.h.H3>}
      {commentList?.map((comment) => (
        <Comment key={comment.id} comment={comment} communityId={communityId} />
      ))}
    </S.div.Column>
  );
};

export default CommentList;
