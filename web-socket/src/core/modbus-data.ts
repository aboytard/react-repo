export interface IModbusIOAction {
    id: string;
    startingAddress: number;
    slaveAddress: number;
    numberOfValues: number;
    writtenData: string[];
    register: string;
  }
