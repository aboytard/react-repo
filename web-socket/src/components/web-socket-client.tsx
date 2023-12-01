import React, { useEffect } from "react";
import { useConnectedSimulatorsContext } from "../core/connected-simulator-context";
import useWebSocketConnection from "../hooks/use-web-socket-connection";

type WebSocketClientProps = {
  url: string;
  onMessage: (data: any) => void;
  name: string;
  message: string;
};

const WebSocketClient: React.FC<WebSocketClientProps> = ({
  url,
  onMessage,
  name,
  message,
}) => {
  const { wsConnectedSim, setWsConnectedSim } = useConnectedSimulatorsContext();

  const { connect, disconnect, sendMessage } = useWebSocketConnection(
    url,
    onMessage
  );

  // Fonction pour enregistrer l'état de la connexion WebSocket
  const saveWebSocketState = (name: string, isConnected: boolean) => {
    const state = {
      isConnected,
    };
    localStorage.setItem(`websocket-${name}`, JSON.stringify(state));
  };

  // Fonction pour charger l'état de la connexion WebSocket depuis le stockage local
  const loadWebSocketState = (name: string) => {
    const savedState = localStorage.getItem(`websocket-${name}`);
    return savedState ? JSON.parse(savedState) : null;
  };

  useEffect(() => {
    // Chargez l'état de la connexion WebSocket depuis le stockage local
    const savedState = loadWebSocketState(name);
    if (savedState) {
      if (savedState.isConnected) {
        connect();
        setWsConnectedSim((prev) => ({
          ...prev,
          [name]: true,
        }));
      }
    }
  }, [name]);

  const onConnect = () => {
    if (!wsConnectedSim[name] || !wsConnectedSim.hasOwnProperty(name)) {
      connect();
      setWsConnectedSim((prev) => ({
        ...prev,
        [name]: true,
      }));
      saveWebSocketState(name, true);
    }
  };

  const onDisconnect = () => {
    if (wsConnectedSim[name]) {
      disconnect();
      setWsConnectedSim((prev) => ({
        ...prev,
        [name]: false,
      }));
      saveWebSocketState(name, false);
    }
  };

  return (
    <div>
      <p>
        Connection Status of {name}:
        {wsConnectedSim[name] ? "Connected" : "Disconnected"}
      </p>
      <button onClick={onConnect}>Connect</button>
      <button onClick={onDisconnect}>Disconnect</button>
      <button onClick={() => sendMessage(message)}>Send</button>
    </div>
  );
};

export default WebSocketClient;
