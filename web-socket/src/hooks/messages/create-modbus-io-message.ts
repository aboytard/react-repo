import ETopic from "../../core/enums/topic";
import { ISocketMessageWithData } from "../../core/messages/socket-messages";
import { IModbusIOAction } from "../../core/modbus-data";

const createIOModbusMessage = (modbusData : IModbusIOAction) : string => {
    
    const ioModbusMessage: ISocketMessageWithData = {
        header: {
          ip_Port: `${modbusData.id}`,
          subject: ETopic.LOG,
        },
        data: {
            ioData : modbusData
        }
      };
      return JSON.stringify(ioModbusMessage)
}

export default createIOModbusMessage;