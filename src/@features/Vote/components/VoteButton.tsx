import * as S from '@/styles/index.style';
import { Fragment } from 'react';

interface Props {
  type: 'up' | 'down';
  count: number;
}

const VoteButton = ({ type, count }: Props) => {
  return (
    <Fragment>
      <S.div.Row $align="center" $gap={10}>
        <S.h.H3>{type === 'up' ? '👍' : '👎'}</S.h.H3>
        <S.div.Column>
          <S.h.H4>{type === 'up' ? '찬성' : '반대'}</S.h.H4>
          <S.p.P>{count}명</S.p.P>
        </S.div.Column>
      </S.div.Row>
    </Fragment>
  );
};

export default VoteButton;
