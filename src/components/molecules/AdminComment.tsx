// import { CommentRes } from '@/@features/Comment/type';
import * as S from '@/styles/index.style';
// import { getDateString } from '@/util/util';
// import { useCommentQuery } from '@/@features/Comment/useCommentQuery';

// interface Props {
//   comment: CommentRes;
//   communityId: number;
// }
const Comment = () => {
  // const { deleteMutate } = useCommentQuery(communityId);

  return (
    <S.div.Row $gap={20} $align="flex-start">
      <S.div.Avatar />
      <S.div.Column $gap={10} style={{ flex: 1 }}>
        <S.div.Row $between>
          <S.div.Row $gap={10} $align="center">
            <S.p.P>작성자</S.p.P>
            {/* <S.small.Small>{getDateString(comment.createdAt)}</S.small.Small> */}
          </S.div.Row>
          <S.button.Button $size="small">
            삭제
          </S.button.Button>
        </S.div.Row>
      </S.div.Column>
    </S.div.Row>
  );
};

export default Comment;
