import React, { useEffect, useState } from "react";
import EWriteFunctionCode from "../../../../core/enums/modbus/write-function-code";
import IModbusSlaveStorageDataStructure from "../../../../core/interfaces/modbus/slave-storage-data-structure";

const getDefaultStorageData = (type : EWriteFunctionCode, numberOfWords: number,numberOfValues: number): IModbusSlaveStorageDataStructure => {

    let emptySlaveStorageDataStruct = {
        // empty to start
    } as IModbusSlaveStorageDataStructure;
    
    const [storageData,setStorageData] = useState(emptySlaveStorageDataStruct);

    useEffect(()=>{
        if(type === EWriteFunctionCode.MultipleCoils || type === EWriteFunctionCode.SingleCoil){
            let storageData = {
                boolData : Array.from({ length: numberOfValues }, () => "false")
            }
            setStorageData(storageData);
        }
        if(type === EWriteFunctionCode.SingleRegister){
            let storageData = {
                intData : Array.from({ length: numberOfWords }, () => "0")
            }
            setStorageData(storageData);
        }
        if(type === EWriteFunctionCode.MultipleRegister){
            let storageData = {
                boolData : Array.from({ length: numberOfValues }, () => "false"),
                intData : Array.from({ length: numberOfWords }, () => "0")
            }
            setStorageData(storageData);        
        }
    },[type])

    return storageData;
}

export default getDefaultStorageData;