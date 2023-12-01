import { useCallback, useEffect, useRef, useState } from "react";

export interface IUseWebSocketOptions {
  onConnection?(ev: Event): void;
  onMessage(ev: MessageEvent): void;
  onError?(ev: Event): void;
  onClose?(ev: CloseEvent): void;
  reconnectOnClose?: boolean;
  reconnectTimeout?: number;
}
export type TSocketState = "closed" | "connected" | "interrupted";

export default function useWebsocket(
  url: string,
  {
    onMessage,
    reconnectOnClose = true,
    reconnectTimeout = 5000,
  }: IUseWebSocketOptions
): {
  close: () => void;
  connect: () => Promise<void>;
  send: (message: string | ArrayBufferLike | Blob | ArrayBufferView) => void;
  socketState: TSocketState;
} {
  const [socketState, setSocketState] = useState<TSocketState>("closed");
  const [wsInstance, setWsInstance] = useState<WebSocket>();
  const reconnectionTimerId = useRef<NodeJS.Timer>();
  const intentionallyClosed = useRef(false); // redefine onclose instead?

  const connect = useCallback(() => {
    return new Promise<void>((resolve) => {
      const ws = new WebSocket(url);
      console.log(
        "%c🔗 SOCKET CREATED",
        "color: deepskyblue; font-size: 18px",
        url
      );

      ws.onopen = () => {
        console.log(
          "%c⚡ SOCKET CONNECTED",
          "color: green; font-size: 18px",
          url
        );
        setSocketState("connected");
        resolve();
      };

      setWsInstance(ws);
    });
  }, [url]);

  // cleanup on leave
  useEffect(() => {
    return () => {
      intentionallyClosed.current = true;
      if (reconnectionTimerId.current) {
        clearInterval(reconnectionTimerId.current);
      }
    };
  }, []);

  // new instance cleanup
  useEffect(() => {
    if (wsInstance) {
      return () => {
        console.log("%c🧹 socket cleanup", "color: gold; font-size: 18px;");
        wsInstance.close();
      };
    }
  }, [wsInstance]);

  // when connected, attach message handler
  useEffect(() => {
    if (wsInstance) {
      wsInstance.onmessage = onMessage;
      console.log("wsInstance changed onMessage", onMessage)
    }
  }, [onMessage, wsInstance]);

  // attach close handler
  useEffect(() => {
    if (wsInstance) {
      wsInstance.onclose = (event: Event) => {
        console.log(
          "%c🔌 SOCKET CLOSED",
          "color: red; font-size: 18px",
          (event.target as WebSocket).url
        );

        if (!intentionallyClosed.current) {
          setSocketState("interrupted");
        } else {
          setSocketState("closed");
        }
      };
    }
  }, [wsInstance]);

  // attach error handler
  useEffect(() => {
    if (wsInstance) {
      wsInstance.onerror = (event) => {
        console.error(
          "%c💔 SOCKET ERROR",
          "font-size: 18px",
          (event.target as WebSocket).url
        );
          
        wsInstance.close();
      };
    }
  }, [wsInstance]);

    // set reconnection interval on interruption
    useEffect(() => {
      if (socketState === 'interrupted' && reconnectOnClose) {
        reconnectionTimerId.current = setInterval(() => {
          void connect();
        }, reconnectTimeout);
      }
    }, [connect, socketState, reconnectOnClose, reconnectTimeout]);
  
    // clear reconnection interval on connected
    useEffect(() => {
      if (reconnectionTimerId.current && socketState === 'connected') {
        clearInterval(reconnectionTimerId.current);
      }
    }, [socketState]);

    const close = useCallback(() => {
      if (!wsInstance || socketState !== 'connected') {
        return console.error("Can't close not connected socket");
      }
  
      intentionallyClosed.current = true;
      wsInstance.close();
    }, [socketState, wsInstance]);

    const send = useCallback(
      (message: string | ArrayBufferLike | Blob | ArrayBufferView) => {
        if (!wsInstance || socketState !== 'connected') {
          return console.error(`Can't send now, socket is not connected. URL: ${url}`);
        }
  
        wsInstance.send(message);
      },
      [socketState, url, wsInstance]
    );
    
  return { close, connect, send, socketState };
}
