import ReactDOM from 'react-dom';
import * as S from '@/styles/index.style';

import { useChatContainerStore } from '../useChatContainerStore';
import styled from 'styled-components';
import ChatCard from './ChatCard';
import { Chat } from '../type';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import usePressEnterFetch from '@/hooks/usePressEnterFetch';
import { getChatApporvalKey, getChatMessages } from '../api';
import { useChattingHook } from '../useChattingHook';
import { useMatchingStore } from '@/@features/Matching/useMatchingStore';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

const modalRoot = document.getElementById('modal-target') as HTMLElement;

const ChatContainer = () => {
  const { isOpen, handleChatContainerClose, apply } = useChatContainerStore();
  const matching = useMatchingStore((state) => state.matching);
  const userId = useAuthStore((state) => state.userInfo?.userId);
  const [chatList, setChatList] = useState<Chat[]>([]);

  const textRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { initWebSocket, sendMessage, closeWebSocket } = useChattingHook({
    onMessage: useCallback((message: Chat) => setChatList((prev) => [message, ...prev]), []),
  });

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    const message = textRef.current?.value;
    if (!message) return;
    sendMessage(message);

    textRef.current!.value = '';
    const scrollContainer = scrollRef.current;
    if (scrollContainer) scrollContainer.scrollTop = 0;
  };

  const { handlePressEnterFetch } = usePressEnterFetch({ handleSubmit: handleSendMessage });

  // * 채팅권한키 발급 & 소켓 초기화
  useEffect(() => {
    if (isOpen && apply?.id) {
      getChatApporvalKey(apply.id).then((key) => {
        initWebSocket(apply.id, key);
      });

      getChatMessages(apply.id).then((res) => {
        setChatList(res.data);
      });
    }

    if (!isOpen) {
      closeWebSocket();
    }
  }, [isOpen, apply, initWebSocket, closeWebSocket]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <BottomModal>
      <S.div.Column $width={90} $padding={40} $justify="space-between" $gap={20}>
        <S.div.Card style={{ textAlign: 'center' }}>
          <S.div.Row $gap={10} $align="center" $between>
            <S.h.H4>{userId === apply?.userId ? matching?.studentName : apply?.nickname} 님과의 대화</S.h.H4>
            <S.button.Button $colors="warning" onClick={handleChatContainerClose}>
              나가기
            </S.button.Button>
          </S.div.Row>
        </S.div.Card>
        <ScrollableColumn $gap={20} ref={scrollRef}>
          {chatList.map((chat: Chat) => (
            <ChatCard key={chat.id} chat={chat} />
          ))}
        </ScrollableColumn>
        <form onSubmit={handleSendMessage}>
          <S.div.Row $gap={10}>
            <S.textarea.Textarea ref={textRef} placeholder="메시지를 입력해주세요." onKeyDown={handlePressEnterFetch} />
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
