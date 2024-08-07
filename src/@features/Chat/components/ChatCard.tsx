import * as S from '@/styles/index.style';
import styled from 'styled-components';
import { Chat } from '../type';
import { useAuth } from '@/@features/Auth/useAuth';
import { Fragment } from 'react/jsx-runtime';
import { getAmPmTime } from '@/util/util';
import React from 'react';

interface Props {
  chat: Chat;
}

const ChatCard = ({ chat }: Props) => {
  const userId = useAuth((state) => state.loginInfo?.userId);
  const isMyChat = userId === chat.usersId;
  return (
    <Fragment>
      <SChat $isMyChat={isMyChat}>
        <S.div.Card $padding={8}>
          <S.p.P>{chat.content}</S.p.P>
        </S.div.Card>
        <S.small.Small style={{ marginBottom: '4px' }}>{getAmPmTime(chat.sendAt)}</S.small.Small>
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
