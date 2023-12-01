import React from "react";
import getHoldingDefaultData from "./get-default-holding-value";

let defaultIntData = Array.from({ length: 1 }, () => "0");

test('Storage Data Structure init/default value HOLDING', () => {
    const defaultData = getHoldingDefaultData(1);
    for (let i = 0; i < defaultData.intData!.length; i++) {
        expect(defaultData.intData![i]).toBe(defaultIntData[i]);
      }
  });
