import React from "react";
import IModbusSlaveStorageDataStructure from "../../../../../interfaces/modbus/slave-storage-data-structure";

const getHoldingDefaultData = (numberOfWords: number) => {
    let storageData = {
        intData : Array.from({ length: numberOfWords}, () => "0")
    } as IModbusSlaveStorageDataStructure;
    return storageData;
}

export default getHoldingDefaultData;