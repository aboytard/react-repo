import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface IErrorContext {
  simulatorError: string | null;
  setSimulatorError: Dispatch<SetStateAction<string | null>>;
}

export const ErrorContext = createContext<IErrorContext>({
  simulatorError: null,
  setSimulatorError: () => {},
});

export const useErrorContext = () => useContext(ErrorContext);
