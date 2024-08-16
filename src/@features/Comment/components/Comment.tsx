import { CommentRes } from '@/@features/Comment/type';
import * as S from '@/styles/index.style';
import { getDateString } from '@/utils/stringUtil';
import { Fragment, useEffect, useState } from 'react';
import { useCommentQuery } from '@/@features/Comment/useCommentQuery';
import CommentEdit from './CommentEdit';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

interface Props {
  comment: CommentRes;
  communityId: number;
}
const Comment = ({ comment, communityId }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const { deleteMutation } = useCommentQuery(communityId);
  const userId = useAuthStore((state) => state.userInfo?.userId);

  const handleDelete = () => {
    if (isEditable && confirm('정말 삭제하시겠습니까?')) deleteMutation.mutate(comment.id);
  };

  useEffect(() => {
    if (userId === comment.userId) {
      setIsEditable(true);
    }
  }, [comment, userId]);

  return (
    <S.div.Row $gap={20} $align="flex-start">
      <S.div.Column $gap={10} style={{ flex: 1 }}>
        <S.div.Row $between>
          <S.div.Row $gap={10} $align="center">
            <S.h.H4>{comment.author}</S.h.H4>
            <S.small.Small>{getDateString(comment.createdAt)}</S.small.Small>
          </S.div.Row>
          <S.div.Row $gap={10}>
            {isEditable && !isEditMode && (
              <Fragment>
                <S.button.Button $size="small" onClick={handleDelete}>
                  삭제
                </S.button.Button>
                <S.button.Button $size="small" onClick={() => setIsEditMode(true)}>
                  수정
                </S.button.Button>
              </Fragment>
            )}
            {isEditMode && (
              <S.button.Button $size="small" onClick={() => setIsEditMode(false)}>
                취소
              </S.button.Button>
            )}
          </S.div.Row>
        </S.div.Row>

        {!isEditMode ? (
          <S.div.Card>
            <S.p.P>{comment.content}</S.p.P>
          </S.div.Card>
        ) : (
          <CommentEdit comment={comment} communityId={communityId} setIsEditMode={setIsEditMode} />
        )}
      </S.div.Column>
    </S.div.Row>
  );
};

export default Comment;
