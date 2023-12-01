import { ISlaveHardwareProps } from "./slave-hardware-props";

export interface IModbusSlaveData {
    ip_port: string,
    unitId: string,
    slaveHardwareProps : ISlaveHardwareProps
}