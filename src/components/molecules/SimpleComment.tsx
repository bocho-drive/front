import { CommentRes } from '@/@features/Comment/type';
import * as S from '@/styles/index.style';
import CommentIcon from '@/assets/icons/comment.svg?react';

interface Props {
  data: CommentRes;
}

const SimpleComment = ({ data }: Props) => {
  return (
    <S.div.Row $gap={10} $align="center">
      <CommentIcon />
      <S.p.P $maxLines={1}>{data.content}</S.p.P>
    </S.div.Row>
  );
};

export default SimpleComment;
