import IModbusSlaveStorageDataStructure from "../../../../../interfaces/modbus/slave-storage-data-structure";
import { IWordProps } from "../../../../../interfaces/modbus/word-data";

const getCoilDefaultData = (wordProps: IWordProps) => {
    let storageData = {
        boolData : Array.from({ length: wordProps.valuesPerWord*wordProps.nbWord}, () => "false")
    } as IModbusSlaveStorageDataStructure;
    return storageData;
}

export default getCoilDefaultData;