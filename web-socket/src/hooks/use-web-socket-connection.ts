import { useState, useEffect } from "react";


const useWebSocketConnection = (
  url: string,
  onMessage: (data: any) => void
) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const connect = () => {
    const newSocket = new WebSocket(url);

    newSocket.onopen = () => {
      console.log(
        "%c⚡ SOCKET CONNECTED",
        "color: green; font-size: 18px",
        url
      );
      return () => {
        disconnect();
      };
    };

    newSocket.onclose = () => {
      disconnect();
    };

    setSocket(newSocket);
  };

  const disconnect = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.close();
      console.log(
        "%c🔌 SOCKET CLOSED",
        "color: red; font-size: 18px",
        url
      );
    }
  };

  const sendMessage = (message: any) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
      };
    }
  }, [socket, onMessage]);

  return {
    connect,
    disconnect,
    sendMessage
  };
};

export default useWebSocketConnection;
