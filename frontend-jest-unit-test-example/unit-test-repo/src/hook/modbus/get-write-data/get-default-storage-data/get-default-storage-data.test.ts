import React from 'react';
import EWriteFunctionCode from '../../../../core/enums/modbus/write-function-code';
import IModbusSlaveStorageDataStructure from '../../../../core/interfaces/modbus/slave-storage-data-structure';
import getDefaultStorageData from './get-default-storage-data';

test('empty slave Storage Data Structure, default value ', () => {
    const storageData8Bits = {
        boolData : Array.from({ length: 8 }, () => "false"),
        intData: undefined
    };
    const functionCode = EWriteFunctionCode.SingleCoil;
    
    expect(getDefaultStorageData(functionCode,1,8)).toBe(storageData8Bits);
    expect(true).toBe(storageData8Bits)
  });
