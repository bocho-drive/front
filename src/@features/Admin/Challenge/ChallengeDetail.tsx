// import { useChallengeSuspenseQuery } from '../useChallengeQuery';
import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { Challenge } from '@/@features/Challenge/type';
import ToastViewer from '@/components/atoms/ToastViewer';
import * as S from '@/styles/index.style';
import { getDateString } from '@/utils/stringUtil';

import { ReactNode } from 'react';

interface Props {
  data: Challenge;
  authorActionComp?: ReactNode;
}

const ChallengeDetail = ({ data, authorActionComp }: Props) => {
  const isLogin = useAuthStore((state) => state.isLogin());
  return (
    <S.div.Column $gap={20}>
      <S.div.Row $between>
        <S.div.Row $gap={10}>{isLogin && authorActionComp}</S.div.Row>
      </S.div.Row>
      <S.h.H1>{data.title}</S.h.H1>

      <S.div.Row $between>
        <S.small.Small>{getDateString(data.createdAt)}</S.small.Small>
      </S.div.Row>
      <S.hr.Hr />

      <ToastViewer initialValue={data.content} />
    </S.div.Column>
  );
};

export default ChallengeDetail;
