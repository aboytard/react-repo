import React from "react";
import IModbusSlaveStorageDataStructure from "../../../../interfaces/modbus/slave-storage-data-structure";
import useDefaultStorageData from "./use-default-storage-data";
import EWriteFunctionCode from "../../../../enums/modbus/write-function-code";
import { IWordProps } from "../../../../interfaces/modbus/word-data";

let defaultBoolData = Array.from({ length: 8 }, () => "false");
let defaultIntData = Array.from({ length: 8 }, () => "0");

let emptySlaveStorageDataStruct = {
    boolData : Array.from({ length: 8 }, () => "false"),
    intData : Array.from({ length: 8 }, () => "0")
} as IModbusSlaveStorageDataStructure;

// TODO: add failing tests
test('Storage Data Structure init SWITCH', () => {
    let wordProps = {
      nbWord:1,
      valuesPerWord:8
    } as IWordProps;
    const defaultData = useDefaultStorageData(EWriteFunctionCode.MultipleRegister,wordProps);

    for (let i = 0; i < defaultData!.intData!.length; i++) {
        expect(defaultData!.intData![i]).toBe(defaultIntData[i]);
      }
    for (let i = 0; i < defaultData!.boolData!.length; i++) {
    expect(defaultData!.boolData![i]).toBe(defaultBoolData[i]);
    }
  });
