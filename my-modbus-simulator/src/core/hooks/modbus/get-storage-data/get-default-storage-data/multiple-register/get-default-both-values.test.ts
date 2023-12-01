import React from "react";
import getMultipleRegisterDefaultData from "./get-default-both-values";
import { IWordProps } from "../../../../../interfaces/modbus/word-data";

let defaultBoolData = Array.from({ length: 8 }, () => "false");
let defaultIntData = Array.from({ length: 8 }, () => "0");

test('Storage Data Structure init/default value HOLDING', () => {
  let wordProps = {
    valuesPerWord: 8,
    nbWord: 1
} as IWordProps;
    const defaultData = getMultipleRegisterDefaultData(wordProps);
    for (let i = 0; i < defaultData.intData!.length; i++) {
        expect(defaultData.intData![i]).toBe(defaultIntData[i]);
      }
      for (let i = 0; i < defaultData.boolData!.length; i++) {
        expect(defaultData.boolData![i]).toBe(defaultBoolData[i]);
      }
  });
