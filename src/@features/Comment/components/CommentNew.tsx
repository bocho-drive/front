import { CommentSchema } from '@/@features/Comment/yup';
import { useCommentQuery } from '../useCommentQuery';
import CommentForm from '@/components/molecules/CommentForm';

interface Props {
  communityId: number;
}

const CommentNew = ({ communityId }: Props) => {
  const { postMutate } = useCommentQuery(communityId);

  const handlePostComment = (data: CommentSchema) => {
    postMutate({
      communityId,
      content: data.content,
    });
  };

  return <CommentForm handlePost={handlePostComment} />;
};

export default CommentNew;
