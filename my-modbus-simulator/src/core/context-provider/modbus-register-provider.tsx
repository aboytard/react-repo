import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import EWriteFunctionCode from "../enums/modbus/write-function-code";
import { SelectedRegisterContext } from "../context/modbus-register";

function SelectedRegisterContextProvider({
  children,
}: {
  children: PropsWithChildren<ReactNode>;
}) {
  const [selectedRegisterStorage, setSelectedRegisterStorage] =
    useState<EWriteFunctionCode>(EWriteFunctionCode.SingleCoil);

  useEffect(() => {
    console.log("PROVIDER selectedRegisterStorage", selectedRegisterStorage);
  }, [selectedRegisterStorage]);

  return (
    <SelectedRegisterContext.Provider
      value={{ selectedRegisterStorage, setSelectedRegisterStorage }}
    >
      {children}
    </SelectedRegisterContext.Provider>
  );
}

export default SelectedRegisterContextProvider;
