import { CommentRes } from '@/@features/Comment/type';
import NotExistsLayout from '@/components/templates/NotExistsLayout';
import useScroll from '@/hooks/useScroll';
import * as S from '@/styles/index.style';
import { getCommunityLink, getDateString } from '@/util/util';
import { useMyCommentListInfiniteQuery } from '../useMyQuery';

const MyCommentCardList = () => {
  const { data, fetchNextPage, hasNextPage } = useMyCommentListInfiniteQuery();
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  return (
    <NotExistsLayout isExists={data.pages.length > 0}>
      {data.pages.map((page) =>
        page.content.map((comment: CommentRes) => {
          return (
            <S.div.Column $gap={10} key={comment.id}>
              <S.div.Row $gap={10} $align="center">
                <S.h.H4>{comment.author}</S.h.H4>
                <S.small.Small>{getDateString(comment.createdAt)}</S.small.Small>
              </S.div.Row>
              <S.div.Card>
                <S.p.P>{comment.content}</S.p.P>
              </S.div.Card>
              <S.a.Link $outline $padding={5} to={getCommunityLink(comment.category, comment.communityId)}>
                <S.small.Small>게시글 보기 🔗</S.small.Small>
              </S.a.Link>
            </S.div.Column>
          );
        })
      )}
    </NotExistsLayout>
  );
};

export default MyCommentCardList;
