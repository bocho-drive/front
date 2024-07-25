import React from 'react';
import * as S from '@/styles/index.style';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to: string;
}

const MoreLayout = ({ children, to }: Props) => {
  const navigate = useNavigate();

  return (
    <S.div.Column $gap={10}>
      {children}
      <S.button.TextButton onClick={() => navigate(to)}>더보기</S.button.TextButton>
    </S.div.Column>
  );
};

export default MoreLayout;
