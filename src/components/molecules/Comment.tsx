import { CommentRes } from '@/@features/Comment/type';
import * as S from '@/styles/index.style';
import { getDateString } from '@/util/util';
import { Fragment, useState } from 'react';
import CommentForm from './CommentForm';
import { useCommentQuery } from '@/@features/Comment/useCommentQuery';
import { CommentSchema } from '@/@features/Comment/yup';

interface Props {
  comment: CommentRes;
  communityId: number;
}
const Comment = ({ comment, communityId }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { deleteMutate, putMutate } = useCommentQuery(communityId);

  const putComment = (data: CommentSchema) => {
    putMutate({
      id: comment.id,
      data: {
        communityId,
        content: data.content,
      },
    });
    setIsEditMode(false);
  };

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
            {!isEditMode ? (
              <Fragment>
                <S.button.Button $size="small" onClick={() => deleteMutate(comment.id)}>
                  삭제
                </S.button.Button>
                <S.button.Button $size="small" onClick={() => setIsEditMode(true)}>
                  수정
                </S.button.Button>
              </Fragment>
            ) : (
              <S.button.Button $size="small" onClick={() => setIsEditMode(false)}>
                취소
              </S.button.Button>
            )}
          </S.div.Row>
        </S.div.Row>

        {!isEditMode && (
          <S.div.Card>
            <S.p.P>{comment.content}</S.p.P>
          </S.div.Card>
        )}
        {isEditMode && <CommentForm type="edit" comment={comment} communityId={communityId} putFn={putComment} />}
      </S.div.Column>
    </S.div.Row>
  );
};

export default Comment;
