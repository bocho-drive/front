import * as S from '@/styles/index.style';
import Comment from '../molecules/Comment';
import { useCommentQuery } from '@/@features/Comment/useCommentQuery';
import CommentForm from '../molecules/CommentForm';

interface Props {
  communityId: number;
}

const CommentList = ({ communityId }: Props) => {
  const { data: commentList, postMutate } = useCommentQuery(communityId);

  return (
    <S.div.Column $gap={20}>
      <CommentForm type="new" communityId={communityId} postFn={postMutate} />
      {commentList.length === 0 && <S.h.H3>댓글이 없어요.</S.h.H3>}
      {commentList?.map((comment) => (
        <Comment key={comment.id} comment={comment} communityId={communityId} />
      ))}
    </S.div.Column>
  );
};

export default CommentList;
