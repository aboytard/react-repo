import { useEffect, useState } from "react";
import { IYourComponent } from "./lan-scanner-sim";
import WebSocketClient from "./web-socket-client";
import createHandshakeMessage from "../hooks/messages/create-handshake-message";
import createLogMessage from "../hooks/messages/create-log-message";
import createIOModbusMessage from "../hooks/messages/create-modbus-io-message";
import { IModbusIOAction } from "../core/modbus-data";
import { EModbusRegister } from "../core/enums/modbus-register";

const MyModbusComponent = ({ ip_port, url }: IYourComponent) => {
  const [messageToSend, setMessageToSend] = useState(
    createHandshakeMessage(ip_port)
  );

  // TODO : Test avec un message qui va venir d un output
  // tester avec un message qui va venir d un handshake
  const handleReceivedMessage = (data: any) => {
    // Gérez les messages reçus ici
    console.log("Message received:", data);
  };

  const modbusData: IModbusIOAction = {
    id: ip_port,
    startingAddress: 0,
    slaveAddress: 1,
    numberOfValues: 8,
    writtenData: ["1", "0", "0", "0", "0", "0", "0", "0"],
    register: EModbusRegister.COIL_REGISTER,
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "handshake") {
      const message = createHandshakeMessage(ip_port);
      setMessageToSend(message);
    } else if (e.target.value === "log") {
      const message = createLogMessage(ip_port, "mock log");
      setMessageToSend(message);
    } else if (e.target.value === "write") {
      const message = createIOModbusMessage(modbusData);
      setMessageToSend(message);
    }
  };

  return (
    <div>
      <WebSocketClient
        name="my-modbus-component"
        url={url}
        onMessage={handleReceivedMessage}
        message={messageToSend}
      />
      <input type="text" value={messageToSend} onChange={handleMessageChange} />
    </div>
  );
};

export default MyModbusComponent;
