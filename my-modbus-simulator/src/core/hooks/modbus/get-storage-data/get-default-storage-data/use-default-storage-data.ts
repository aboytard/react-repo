import React from "react";
import EWriteFunctionCode from '../../../../enums/modbus/write-function-code';
import IModbusSlaveStorageDataStructure from '../../../../interfaces/modbus/slave-storage-data-structure';
import getCoilDefaultData from "./coil/get-default-coil-data";
import getHoldingDefaultData from "./holding/get-default-holding-value";
import getMultipleRegisterDefaultData from "./multiple-register/get-default-both-values";
import { IWordProps } from "../../../../interfaces/modbus/word-data";

// TODO: Deal with the case if we do not have the right type from the enum
const useDefaultStorageData = (type : EWriteFunctionCode, wordProps: IWordProps): IModbusSlaveStorageDataStructure => {
        switch(type){
            case EWriteFunctionCode.MultipleCoils:
            case EWriteFunctionCode.SingleCoil:
                return getCoilDefaultData(wordProps);
            case EWriteFunctionCode.SingleRegister:
                return getHoldingDefaultData(wordProps.nbWord);
            case EWriteFunctionCode.MultipleRegister:
                return getMultipleRegisterDefaultData(wordProps);        
        }
}

export default useDefaultStorageData;