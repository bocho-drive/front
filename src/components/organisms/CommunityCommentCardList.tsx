import * as S from '@/styles/index.style';
import SimpleComment from '../molecules/SimpleComment';
import { Link } from 'react-router-dom';
import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';
import { getCommunityList } from '@/@features/Community/api';
import { getCommentList } from '@/@features/Comment/api';
import CommunityCard from '../molecules/CommunityCard';
import { Fragment } from 'react/jsx-runtime';

const CommunityCommentCardList = () => {
  const { data: communityListlimitTwo } = useSuspenseQuery({
    queryKey: ['communityList'],
    queryFn: () => getCommunityList({ category: 'GENERAL', page: 0, size: 2 }),
    retry: 1,
  });

  const commentList = useSuspenseQueries({
    queries: [0, 1].map((index) => ({
      queryKey: ['commentList', index],
      queryFn: () => getCommentList(communityListlimitTwo.content[index].id),
    })),
  });

  return (
    <S.div.Grid $repeat={2}>
      {communityListlimitTwo.content.map((community, index) => (
        <Link to={`/community/${community.id}`} key={community.id}>
          <S.div.Column $gap={10}>
            <S.div.Column $gap={20}>
              <CommunityCard
                data={community}
                topComponent={<S.span.Badge>최신 글</S.span.Badge>}
                bottomComponent={
                  commentList[index].data.length > 0 && (
                    <Fragment>
                      <S.hr.Hr />
                      <S.div.Column $gap={20}>
                        {commentList[index].data?.slice(0, 2).map((comment) => (
                          <SimpleComment key={comment.id} data={comment} />
                        ))}
                      </S.div.Column>
                    </Fragment>
                  )
                }
              />
            </S.div.Column>
          </S.div.Column>
        </Link>
      ))}
    </S.div.Grid>
  );
};

export default CommunityCommentCardList;
