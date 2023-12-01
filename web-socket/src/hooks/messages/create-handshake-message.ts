import ETopic from "../../core/enums/topic";
import { ISocketMessageWithData } from "../../core/messages/socket-messages";

const createHandshakeMessage = (ip_port : string) : string => {
    const handshakeMessage: ISocketMessageWithData = {
        header: {
          ip_Port: `${ip_port}`,
          subject: ETopic.HANDSHAKE,
        },
        data: "",
      };
      return JSON.stringify(handshakeMessage)
}

export default createHandshakeMessage;