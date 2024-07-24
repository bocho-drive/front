import * as S from '@/styles/index.style';
import CommentIcon from '@/assets/icons/comment.svg?react';
import LikeIcon from '@/assets/icons/like.svg?react';
import SimpleComment from '../molecules/SimpleComment';
import LineText from '../atoms/LineText';

const CommunityCommentCard = () => {
  return (
    <S.div.Column $gap={10}>
      <S.div.Card>
        <S.div.Column $gap={20}>
          <S.span.Badge>조회수 TOP</S.span.Badge>
          <S.h.H2>제목</S.h.H2>
          <S.p.P $maxLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, justo a aliquet lacinia, velit nunc tincidunt nunc, vitae efficitur nunc nunc at nunc. Sed auctor, mauris id
            aliquam tincidunt, nunc nunc aliquam nunc, vitae efficitur nunc nunc at nunc.
          </S.p.P>

          <S.div.Row $gap={10}>
            <S.div.Row $gap={5} $align="center">
              <CommentIcon />
              <S.p.P>4</S.p.P>
            </S.div.Row>
            <S.div.Row $gap={5} $align="center">
              <LikeIcon />
              <S.p.P>4</S.p.P>
            </S.div.Row>
          </S.div.Row>

          <LineText />

          <S.div.Column $gap={20}>
            <SimpleComment />
            <SimpleComment />
          </S.div.Column>
        </S.div.Column>
      </S.div.Card>
    </S.div.Column>
  );
};

export default CommunityCommentCard;
