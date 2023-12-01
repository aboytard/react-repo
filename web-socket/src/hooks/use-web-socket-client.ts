import { useRef } from "react";

const useWebSocketClient = () => {
  const sendMessageRef = useRef<((message: any) => void) | null>(null);

  const setSendMessage = (sendMessage: (message: any) => void) => {
    sendMessageRef.current = sendMessage;
  };

  const sendMessage = (message: any) => {
    if (sendMessageRef.current) {
      sendMessageRef.current(message);
    }
  };

  return { setSendMessage, sendMessage};
};

export default useWebSocketClient;
