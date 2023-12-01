import EWriteFunctionCode from "../../enums/modbus/write-function-code";

export interface IModbusWriteData {
    numberOfValues : number,
    data: string[],
    type: EWriteFunctionCode
}