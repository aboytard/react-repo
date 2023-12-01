import ETopic from "../enums/topic";
import { IModbusIOAction } from "../modbus-data";

export interface ISocketMessageHeader {
    ip_Port: string;
    subject: ETopic;
}

export interface ISocketMessageWithData {
    header: ISocketMessageHeader;
    data: string[] | string | ISocketMessageIOAction | undefined | null;
}

export interface ISocketMessageIOAction {
    ioData : IModbusIOAction
}