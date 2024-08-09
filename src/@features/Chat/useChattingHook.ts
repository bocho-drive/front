import { useCallback, useRef } from 'react';
import { Chat, SendChat } from './type';

const SocketUrl = import.meta.env.VITE_SOCKET_URL as string;

interface Props {
  onMessage: (message: Chat) => void;
}

interface Return {
  sendMessage: (message: string) => void;
  initWebSocket: (applyId: number, approvalKey: string) => void;
  closeWebSocket: () => void;
}

export const useChattingHook = ({ onMessage }: Props): Return => {
  const socketRef = useRef<WebSocket | null>(null);
  const approvalKeyRef = useRef<string | null>(null);

  const setUpWebSocket = useCallback(
    (socket: WebSocket) => {
      console.log('setUpWebSocket');
      socket.onopen = () => {
        console.log('WebSocket Opened');
      };

      socket.onmessage = (e) => {
        console.log('WebSocket Message:', e.data);
        const data = JSON.parse(e.data) as Chat;
        onMessage(data);
      };

      socket.onclose = () => {
        console.log('WebSocket Closed');
      };
    },
    [onMessage]
  );

  const initWebSocket = useCallback(
    (applyId: number, approvalKey: string) => {
      if (socketRef.current == null) {
        socketRef.current = new WebSocket(`${SocketUrl}/${applyId}`);
        approvalKeyRef.current = approvalKey;

        setUpWebSocket(socketRef.current);
      }
    },
    [setUpWebSocket]
  );

  const closeWebSocket = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
    }
  }, []);

  const sendMessage = (message: string) => {
    if (socketRef.current && approvalKeyRef.current) {
      const sendChat: SendChat = {
        message,
        approvalKey: approvalKeyRef.current,
      };
      socketRef.current.send(JSON.stringify(sendChat));
    }
  };

  return {
    initWebSocket,
    closeWebSocket,
    sendMessage,
  };
};
