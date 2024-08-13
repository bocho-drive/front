<<<<<<< Updated upstream
=======
// import { useChallengeSuspenseQuery } from '../useChallengeQuery';
import { useAuthStore } from '@/@features/Auth/useAuthStore';
>>>>>>> Stashed changes
import { Challenge } from '@/@features/Challenge/type';
import ToastViewer from '@/components/atoms/ToastViewer';
import * as S from '@/styles/index.style';
import { getDateString } from '@/util/util';
<<<<<<< Updated upstream
// import { ReactNode } from 'react';

interface Props {
  data: Challenge;
  // challengeId: number;
  // authorActionComp?: ReactNode;
}

const ChallengeDetail = ({ data }: Props) => {
  // const isLogin = useAuthStore((state) => state.isLogin());
  return (
    <S.div.Column $gap={20}>
      <S.div.Row $between>
        <S.div.Row $gap={10}></S.div.Row>
      </S.div.Row>
      <S.h.H1>{data.title}</S.h.H1>

      <S.div.Row $gap={10} $align="center"></S.div.Row>
      <S.div.Row $between>
        <S.small.Small>{getDateString(data.createdAt)}</S.small.Small>
        <S.div.Row $gap={10}></S.div.Row>
=======
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
>>>>>>> Stashed changes
      </S.div.Row>
      <S.hr.Hr />

      <ToastViewer initialValue={data.content} />

<<<<<<< Updated upstream
      <S.div.Row $gap={10} $wrap></S.div.Row>
=======
>>>>>>> Stashed changes
    </S.div.Column>
  );
};

<<<<<<< Updated upstream
export default ChallengeDetail;
=======
export default ChallengeDetail;

// 여기부터 기존코드

// const ChallengeDetail = ({ challengeId, children }: Props) => {
//   const challengeQuery = useChallengeSuspenseQuery(challengeId);
//   return (
//     <S.div.Column $gap={20}>
//       <S.div.Card>
//         <S.h.H2>🏆 {challengeQuery.data?.title}</S.h.H2>
//       </S.div.Card>
//       {children}
//     </S.div.Column>
//   );
// };

// export default ChallengeDetail;
>>>>>>> Stashed changes
