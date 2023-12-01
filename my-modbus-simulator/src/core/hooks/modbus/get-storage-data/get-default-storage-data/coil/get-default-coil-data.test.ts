import React from "react";
import getCoilDefaultData from "./get-default-coil-data";
import { IWordProps } from "../../../../../interfaces/modbus/word-data";

let defaultBoolData = Array.from({ length: 8 }, () => "false");

test('Storage Data Structure init/default value COIL', () => {
    let wordProps = {
        valuesPerWord: 8,
        nbWord: 1
    } as IWordProps;
    const defaultData = getCoilDefaultData(wordProps);
    for (let i = 0; i < defaultData.boolData!.length; i++) {
        expect(defaultData.boolData![i]).toBe(defaultBoolData[i]);
      }
  });
