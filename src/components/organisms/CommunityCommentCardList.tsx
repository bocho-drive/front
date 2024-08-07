import { getCommentList } from '@/@features/Comment/api';
import { useCommunityListSuspenseQuery } from '@/@features/Community/useCommunityQuery';
import * as S from '@/styles/index.style';
import { useSuspenseQueries } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import CommunityCard from '../molecules/CommunityCard';
import SimpleComment from '../molecules/SimpleComment';

const CommunityCommentCardList = () => {
  const { data } = useCommunityListSuspenseQuery('GENERAL', 2);

  const commentList = useSuspenseQueries({
    queries: [0, 1].map((index) => ({
      queryKey: ['commentList', index],
      queryFn: () => getCommentList(data.content[index].id),
    })),
  });

  return (
    <S.div.Grid $repeat={2}>
      {data.content.map((community, index) => (
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
