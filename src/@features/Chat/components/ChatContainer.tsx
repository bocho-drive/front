import ReactDOM from 'react-dom';
import * as S from '@/styles/index.style';

import { useChatStore } from '../useChatStore';
import styled from 'styled-components';
import ChatCard from './ChatCard';
import { Chat } from '../type';
import { FormEvent, useRef, useState } from 'react';
import usePressEnterFetch from '@/hooks/usePressEnterFetch';

const modalRoot = document.getElementById('modal-target') as HTMLElement;

const init: Chat[] = [
  {
    id: 1,
    matchingApplyId: 1,
    usersId: 1,
    content: '안녕하세요.',
    sendAt: new Date(),
  },
  {
    id: 2,
    matchingApplyId: 1,
    usersId: 1,
    content: '안녕하세요.안녕하세요.안녕하세요.',
    sendAt: new Date(),
  },
  {
    id: 3,
    matchingApplyId: 1,
    usersId: 4,
    content: '안녕하세요.안녕하세요.',
    sendAt: new Date(),
  },
];

const ChatContainer = () => {
  const { isOpen, setIsOpen } = useChatStore((state) => ({
    isOpen: state.isOpen,
    setIsOpen: state.setIsOpen,
  }));
  const [chatList, setChatList] = useState<Chat[]>(init);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    setChatList((prev) => [
      {
        id: prev.length + 1,
        matchingApplyId: 1,
        usersId: 4,
        content: '안녕하세요.',
        sendAt: new Date(),
      },
      ...prev,
    ]);

    const scrollContainer = scrollRef.current;
    if (scrollContainer) scrollContainer.scrollTop = 0;
  };
  const { handlePressEnterFetch } = usePressEnterFetch({ handleSubmit: handleSendMessage });
  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <BottomModal>
      <S.div.Column $width={90} $padding={40} $justify="space-between" $gap={20}>
        <S.div.Card style={{ textAlign: 'center' }}>
          <S.div.Row $gap={10} $align="center" $between>
            <S.h.H4>누구누구님과의 대화</S.h.H4>
            <S.button.Button $colors="warning" onClick={handleClose}>
              나가기
            </S.button.Button>
          </S.div.Row>
        </S.div.Card>
        <ScrollableColumn $gap={20} ref={scrollRef}>
          {chatList.map((chat) => (
            <ChatCard key={chat.id} chat={chat} />
          ))}
        </ScrollableColumn>
        <form onSubmit={handleSendMessage}>
          <S.div.Row $gap={10}>
            <S.textarea.Textarea placeholder="메시지를 입력해주세요." onKeyDown={handlePressEnterFetch} />
            <S.button.Button $colors="primary" $size="medium" type="submit">
              전송
            </S.button.Button>
          </S.div.Row>
        </form>
      </S.div.Column>
    </BottomModal>,
    modalRoot
  );
};

export default ChatContainer;

const ScrollableColumn = styled(S.div.Column)`
  height: 100%;

  display: flex;
  flex-direction: column-reverse;

  overflow-y: auto;
`;

const BottomModal = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 90%;
  background-color: white;

  z-index: 1000;

  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
`;
