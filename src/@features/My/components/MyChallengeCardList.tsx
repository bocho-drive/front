import ChallengeModal from '@/@features/Challenge/components/ChallengeModal';
import { ChallengeVerifiesRes } from '@/@features/ChallengeVerifies/type';
import CommunityCard, { CommunityCategoryBadge } from '@/components/molecules/CommunityCard';
import { useModal } from '@/components/templates/Modal/useModal';
import NotExistsLayout from '@/components/templates/NotExistsLayout';
import useScroll from '@/hooks/useScroll';
import * as S from '@/styles/index.style';
import { getCommunityLink } from '@/utils/stringUtil';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { useMyChallengeVerifyListInfiniteQuery } from '../useMyQuery';

const MyChallengeVerifyCardList = () => {
  const { data, fetchNextPage, hasNextPage } = useMyChallengeVerifyListInfiniteQuery();
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });
  const handleOpen = useModal((state) => state.handleOpen);

  return (
    <NotExistsLayout isExists={data.pages[0].content.length > 0}>
      {data.pages.map((page) =>
        page.content.map((verify: ChallengeVerifiesRes) => {
          return (
            <Fragment key={verify.id}>
              <S.div.Column $gap={10}>
                <Link to={getCommunityLink('CHALLENGE_VERIFY', verify.communityId)}>
                  <CommunityCard data={verify} topComponent={<CommunityCategoryBadge category="CHALLENGE_VERIFY" />} />
                </Link>
                <S.button.TextButton $outline $padding={0} onClick={() => handleOpen(verify.id, 'challenge')}>
                  <S.small.Small>🏆 챌린지 보기</S.small.Small>
                </S.button.TextButton>
              </S.div.Column>
              <ChallengeModal challengeId={verify.challengeId} modalId={verify.id} />
            </Fragment>
          );
        })
      )}
    </NotExistsLayout>
  );
};

export default MyChallengeVerifyCardList;
