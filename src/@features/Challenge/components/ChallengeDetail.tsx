import { Challenge } from '@/@features/Challenge/type';
import ToastViewer from '@/components/atoms/ToastViewer';
import * as S from '@/styles/index.style';
import { getDateString } from '@/util/util';
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
      </S.div.Row>
      <S.hr.Hr />

      <ToastViewer initialValue={data.content} />

      <S.div.Row $gap={10} $wrap></S.div.Row>
    </S.div.Column>
  );
};

export default ChallengeDetail;