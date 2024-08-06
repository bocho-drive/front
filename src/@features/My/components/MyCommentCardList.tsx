import { useAuth } from '@/@features/Auth/useAuth';

import * as S from '@/styles/index.style';
import useScroll from '@/hooks/useScroll';
import { useMyCommentListInfiniteQuery } from '../useMyQuery';
import NotExistsLayout from '@/components/templates/NotExistsLayout';
import { getDateString } from '@/util/util';

const MyCommentCardList = () => {
  const userId = useAuth((state) => state.userId);
  const { data, fetchNextPage, hasNextPage } = useMyCommentListInfiniteQuery(userId!);
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  return (
    <NotExistsLayout isExists={data.pages.length > 0}>
      {data.pages.map((page) =>
        page.content.map((comment) => {
          return (
            <S.div.Column $gap={10}>
              <S.div.Row $gap={10} $align="center">
                <S.h.H4>{comment.author}</S.h.H4>
                <S.small.Small>{getDateString(comment.createdAt)}</S.small.Small>
              </S.div.Row>
              <S.div.Card>
                <S.p.P>{comment.content}</S.p.P>
              </S.div.Card>
            </S.div.Column>
          );
        })
      )}
    </NotExistsLayout>
  );
};

export default MyCommentCardList;
