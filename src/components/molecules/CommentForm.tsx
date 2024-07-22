import * as S from '@/styles/index.style';

const CommentForm = () => {
  return (
    <S.div.Row $gap={10}>
      <S.div.Avatar />
      <S.textarea.Textarea placeholder="댓글을 입력해주세요" style={{ flex: 1 }} />
    </S.div.Row>
  );
};

export default CommentForm;
