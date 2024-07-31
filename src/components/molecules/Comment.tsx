import { CommentRes } from '@/@features/Comment/type';
import * as S from '@/styles/index.style';
import { getDateString } from '@/util/util';
import { UseMutateFunction } from '@tanstack/react-query';

interface Props {
  comment: CommentRes;
  deleteMutate: UseMutateFunction<void, unknown, number, unknown>;
}
const Comment = ({ comment, deleteMutate }: Props) => {
  return (
    <S.div.Row $gap={20} $align="flex-start">
      <S.div.Avatar />
      <S.div.Column $gap={10} style={{ flex: 1 }}>
        <S.div.Row $between>
          <S.div.Row $gap={10} $align="center">
            <S.p.P>작성자</S.p.P>
            <S.small.Small>{getDateString(comment.createdAt)}</S.small.Small>
          </S.div.Row>
          <S.div.Row $gap={10}>
            <S.button.Button onClick={() => deleteMutate(comment.id)}>삭제</S.button.Button>
            <S.button.Button>수정</S.button.Button>
          </S.div.Row>
        </S.div.Row>

        <S.div.Card>
          <S.p.P>{comment.content}</S.p.P>
        </S.div.Card>
      </S.div.Column>
    </S.div.Row>
  );
};

export default Comment;
