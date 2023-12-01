import { Dispatch, SetStateAction, createContext, useContext } from "react";
import EWriteFunctionCode from "../enums/modbus/write-function-code";

export interface ISelectedRegisterStorageContext {
  selectedRegisterStorage: EWriteFunctionCode;
  setSelectedRegisterStorage: Dispatch<EWriteFunctionCode>;
}

export const SelectedRegisterContext =
  createContext<ISelectedRegisterStorageContext>({
    selectedRegisterStorage: EWriteFunctionCode.SingleCoil,
    setSelectedRegisterStorage: () => {},
  });

export const useSelectedRegisterContext = () =>
  useContext(SelectedRegisterContext);
