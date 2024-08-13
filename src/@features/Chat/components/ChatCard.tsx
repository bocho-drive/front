import { useAuthStore } from '@/@features/Auth/useAuthStore';
import * as S from '@/styles/index.style';
import { getAmPmTime } from '@/util/util';
import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import styled from 'styled-components';
import { Chat } from '../type';

interface Props {
  chat: Chat;
}

const ChatCard = ({ chat }: Props) => {
  const userId = useAuthStore((state) => state.userInfo?.userId);
  const isMyChat = userId === chat.userId;
  return (
    <Fragment>
      <SChat $isMyChat={isMyChat}>
        <S.div.Card $padding={8}>
          <S.p.P>{chat.message}</S.p.P>
        </S.div.Card>
        <S.small.Small style={{ marginBottom: '4px' }}>{getAmPmTime(chat.createdAt)}</S.small.Small>
      </SChat>
    </Fragment>
  );
};

const MemoizedChatCard = React.memo(ChatCard);
export default MemoizedChatCard;

interface CardProps {
  $isMyChat: boolean;
}

const SChat = styled.div<CardProps>`
  display: flex;
  flex-direction: ${({ $isMyChat }) => ($isMyChat ? 'row-reverse' : 'row')};
  align-items: end;
  gap: 10px;
`;
