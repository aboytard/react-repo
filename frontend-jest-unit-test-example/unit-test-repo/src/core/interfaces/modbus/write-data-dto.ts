import { IModbusSlaveData } from "./slave-data";
import { IModbusWriteData } from "./write-data-ts";

export interface IModbusWriteDataDTO {
    slaveData: IModbusSlaveData, // ip_port, unitId, slaveHardwareProps : valuesPerWord, WordNumber
    writeData : IModbusWriteData // numberOfValues, data, type
}