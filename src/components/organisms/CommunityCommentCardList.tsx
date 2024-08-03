import * as S from '@/styles/index.style';
import SimpleComment from '../molecules/SimpleComment';
import LineText from '../atoms/LineText';
import { Link } from 'react-router-dom';
import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';
import { getCommunityList } from '@/@features/Community/api';
import { getCommentList } from '@/@features/Comment/api';

const CommunityCommentCardList = () => {
  const { data: communityListlimitTwo } = useSuspenseQuery({
    queryKey: ['communityList'],
    queryFn: () => getCommunityList({ category: 'GENERAL', page: 0, size: 2, sortBy: 'viewCount', isAsc: false }),
    retry: 1,
  });

  const commentList = useSuspenseQueries({
    queries: [0, 1].map((_, index) => ({
      queryKey: ['commentList', index],
      queryFn: () => getCommentList(communityListlimitTwo.content[index].id),
      retry: 1,
    })),
  });

  return (
    <S.div.Grid $repeat={2}>
      {communityListlimitTwo.content.map((community, index) => (
        <Link to={`/community/${community.id}`} key={community.id}>
          <S.div.Column $gap={10}>
            <S.div.Card>
              <S.div.Column $gap={20}>
                <S.span.Badge>조회수 TOP</S.span.Badge>
                <S.h.H2>{community.title}</S.h.H2>

                <S.div.Row $gap={10}>
                  <S.div.Row $gap={5} $align="center"></S.div.Row>
                  <S.div.Row $gap={5} $align="center">
                    <S.h.H5>조회수 {community.viewCount}</S.h.H5>
                  </S.div.Row>
                </S.div.Row>

                <LineText />

                <S.div.Column $gap={20}>
                  {/* FIXME 댓글 limit추가 필요 */}
                  {commentList[index].data?.slice(0, 2).map((comment) => (
                    <SimpleComment key={comment.id} data={comment} />
                  ))}
                </S.div.Column>
              </S.div.Column>
            </S.div.Card>
          </S.div.Column>
        </Link>
      ))}
    </S.div.Grid>
  );
};

export default CommunityCommentCardList;
