import { useEffect } from "react";
import useWebsocket from "./use-web-socket";

export interface IUseWebSocketOptions {
    onMessage(ev: MessageEvent): void;
  }

const handleWebSocket = (url: string, options: IUseWebSocketOptions) => {
    const { onMessage } = options;

    const { connect, close, send, socketState } = useWebsocket(url, {
        onMessage,
      });

      useEffect(() => {
        connect();
    
        return () => {
          close();
        };
      }, []);
    
      return { send, socketState };
}
export default handleWebSocket;