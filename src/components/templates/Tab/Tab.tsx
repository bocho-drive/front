import React from 'react';
import * as S from '@/styles/index.style';
import CommunityCardList from '@/components/organisms/CommunityCardList';
import CommentList from '@/@features/Comment/components/CommentList';
import ChallengeCardList from '@/components/organisms/ChallengeCardList';

const tabHeaders = ['게시글', '댓글', '챌린지'] as const;
const tabBodys = [<CommunityCardList />, <CommentList />, <ChallengeCardList />];

const Tab = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <S.div.Column $gap={20}>
      <S.div.Row $width={100}>
        {tabHeaders.map((header, index) => (
          <S.button.TabButton key={index} $active={index === tabIndex} $direction="bottom" onClick={() => setTabIndex(index)}>
            <S.h.H2>{header}</S.h.H2>
          </S.button.TabButton>
        ))}
      </S.div.Row>

      {tabBodys[tabIndex]}
    </S.div.Column>
  );
};

export default Tab;
