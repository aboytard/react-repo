import React from "react";
import IModbusSlaveStorageDataStructure from "../../../../../interfaces/modbus/slave-storage-data-structure";
import { IWordProps } from "../../../../../interfaces/modbus/word-data";

const getMultipleRegisterDefaultData = (wordProps: IWordProps) => {
    let storageData = {
        boolData : Array.from({ length: wordProps.nbWord*wordProps.valuesPerWord}, () => "false"),
        intData : Array.from({ length: wordProps.nbWord}, () => "0")
    } as IModbusSlaveStorageDataStructure;
    return storageData;
}

export default getMultipleRegisterDefaultData;