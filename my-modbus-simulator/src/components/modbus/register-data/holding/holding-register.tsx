import React, { useEffect, useState } from "react";
import InputTable from "../../../common/input-table/input-table";
import { IWordProps } from "../../../../core/interfaces/modbus/word-data";
import IModbusSlaveStorageDataStructure from "../../../../core/interfaces/modbus/slave-storage-data-structure";
import useWriteData from "../../../../core/hooks/modbus/get-storage-data/get-default-storage-data-structure";
import EWriteFunctionCode from "../../../../core/enums/modbus/write-function-code";
import { useSelectedRegisterContext } from "../../../../core/context/modbus-register";

//TODO : finish
// the type should come from a state-provider
const HoldingRegister = (wordProps: IWordProps): JSX.Element => {
  const defaultWriteDataStructure = useWriteData(
    EWriteFunctionCode.SingleRegister,
    wordProps
  );
  const [writeData, setWriteData] = useState<IModbusSlaveStorageDataStructure>(
    defaultWriteDataStructure
  );

  const { selectedRegisterStorage } = useSelectedRegisterContext();

  useEffect(() => {
    console.log(
      "HoldingRegister change selectedRegisterStorage: ",
      selectedRegisterStorage
    );
  }, [selectedRegisterStorage]);

  const onInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newInputValue = event.target.value;
      setWriteData((prev) => {
        const newData = [...prev.intData!];
        newData[index] = newInputValue;
        return {
          ...prev,
          intData: newData,
        };
      });
      console.log("onInputChange", writeData);
    };

  return (
    <InputTable
      onInputChange={onInputChange}
      inputArray={writeData!.intData!}
    />
  );
};

export default HoldingRegister;
