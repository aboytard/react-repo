import React, { useEffect, useState } from "react";
import EWriteFunctionCode from "../../../enums/modbus/write-function-code";
import getDefaultStorageData from "./get-default-storage-data/use-default-storage-data";
import IModbusSlaveStorageDataStructure from "../../../interfaces/modbus/slave-storage-data-structure";
import { IWordProps } from "../../../interfaces/modbus/word-data";

const useWriteData = (type : EWriteFunctionCode, wordProps : IWordProps) : IModbusSlaveStorageDataStructure => {
    const defaultWriteDataStructure = getDefaultStorageData(type, wordProps);
    const [writeDataStructure, setWriteDataStructure] = useState<IModbusSlaveStorageDataStructure>(defaultWriteDataStructure);
    useEffect(()=>{
        if(type === EWriteFunctionCode.MultipleCoils || type === EWriteFunctionCode.SingleCoil){
            setWriteDataStructure(defaultWriteDataStructure);
        }
        else if (type === EWriteFunctionCode.SingleRegister){
            setWriteDataStructure(defaultWriteDataStructure);
        }
        else{
            setWriteDataStructure(defaultWriteDataStructure);
        }
    },[type])

    return writeDataStructure;
}

export default useWriteData;