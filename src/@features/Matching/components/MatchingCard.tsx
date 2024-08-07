import * as S from '@/styles/index.style';
import { Link } from 'react-router-dom';
import { Matching } from '../type';
import { ReactNode } from 'react';

interface Props {
  matching: Matching;
}

const MatchingCard = ({ matching }: Props) => {
  return (
    <S.div.Card>
      <Link to={`/matching/${matching.id}`}>
        <S.div.Column $gap={15}>
          <S.div.Column $gap={10}>
            <S.h.H2>{matching.title}</S.h.H2>
            <S.div.Row $gap={10}>
              <MatchingStatus status={matching.status} />
              <MatchingType type={matching.type} />
            </S.div.Row>
          </S.div.Column>
        </S.div.Column>
      </Link>
    </S.div.Card>
  );
};

export default MatchingCard;

export const MatchingStatus = ({ status }: { status: Matching['status'] }): ReactNode => {
  let text = '';
  if (status === 'WAITING') text = '대기중';
  if (status === 'PROGRESS') text = '진행중';
  if (status === 'CLEAR') text = '완료';
  if (status === 'CANCEL') text = '취소';

  return <S.span.Badge>{text}</S.span.Badge>;
};

export const MatchingType = ({ type }: { type: Matching['type'] }): ReactNode => {
  let text = '';
  if (type === 'TEACHER') text = '도와드려요';
  if (type === 'STUDENT') text = '도와주세요';

  return <S.span.Badge>{text}</S.span.Badge>;
};
