import React, { useState } from "react";
import WebSocketClient from "./web-socket-client";
import createHandshakeMessage from "../hooks/messages/create-handshake-message";
import createLogMessage from "../hooks/messages/create-log-message";

export interface IYourComponent {
  url: string;
  ip_port: string;
}

const LanScannerSim = ({ url, ip_port }: IYourComponent) => {
  const [messageToSend, setMessageToSend] = useState("my-component-message");

  const handleReceivedMessage = (data: any) => {
    // Gérez les messages reçus ici
    console.log("Message received:", data);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "handshake") {
      const message = createHandshakeMessage(ip_port);
      setMessageToSend(message);
    } else if (e.target.value === "log") {
      const message = createLogMessage(ip_port, "mock log");
      setMessageToSend(message);
    }
  };

  return (
    <div>
      <WebSocketClient
        name="my-component"
        url={url}
        onMessage={handleReceivedMessage}
        message={messageToSend}
      />
      <input type="text" value={messageToSend} onChange={handleMessageChange} />
    </div>
  );
};

export default LanScannerSim;
