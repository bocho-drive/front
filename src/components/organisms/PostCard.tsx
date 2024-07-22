import * as S from '@/styles/index.style';
import CommentIcon from '@/assets/icons/comment.svg?react';
import LikeIcon from '@/assets/icons/like.svg?react';
import Comment from '../molecules/Comment';

const PostCard = () => {
  return (
    <S.div.Column $gap={10}>
      <S.div.Card>
        <S.div.Column $gap={20}>
          <S.span.Badge>조회수 TOP</S.span.Badge>
          <S.h.h2>제목</S.h.h2>
          <S.p.P $maxLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, justo a aliquet lacinia, velit nunc tincidunt nunc, vitae efficitur nunc nunc at nunc. Sed auctor, mauris id
            aliquam tincidunt, nunc nunc aliquam nunc, vitae efficitur nunc nunc at nunc.
          </S.p.P>

          <S.div.Row $gap={10}>
            <S.div.Row $gap={5}>
              <CommentIcon />
              <span>4</span>
            </S.div.Row>
            <S.div.Row $gap={5}>
              <LikeIcon />
              <span>4</span>
            </S.div.Row>
          </S.div.Row>

          <S.div.Column $gap={20}>
            <Comment />
            <Comment />
          </S.div.Column>
        </S.div.Column>
      </S.div.Card>
    </S.div.Column>
  );
};

export default PostCard;
