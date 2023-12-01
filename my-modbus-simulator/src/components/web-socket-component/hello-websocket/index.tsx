import React from "react";
import handleWebSocket from "../../../core/hooks/web-socket/handle-web-socket";

interface WebSocketComponentProps {
  url: string;
}

const HelloWebSocket = ({ url }: WebSocketComponentProps) => {
  const handleMessage = (event: MessageEvent) => {
    const receivedData = event.data;
    console.log("Received:", receivedData);
  };

  const { send, socketState } = handleWebSocket(url, {
    onMessage: handleMessage,
  });

  const handleSendMessage = () => {
    const message = "Hello, WebSocket!";
    console.log("handleSendMessag");
    send(message);
  };

  return (
    <>
      <p>Socket State: {socketState}</p>
      <button onClick={handleSendMessage}>Send Message</button>
    </>
  );
};

export default HelloWebSocket;
