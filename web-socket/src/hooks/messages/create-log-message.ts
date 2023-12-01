import ETopic from "../../core/enums/topic";
import { ISocketMessageWithData } from "../../core/messages/socket-messages";

const createLogMessage = (ip_port : string, logMsg : string) : string => {
    const logMessage: ISocketMessageWithData = {
        header: {
          ip_Port: `${ip_port}`,
          subject: ETopic.LOG,
        },
        data: logMsg,
      };
      return JSON.stringify(logMessage)
}

export default createLogMessage;