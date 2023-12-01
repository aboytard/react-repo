import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";

interface IConnectedSimulatorsContext {
  wsConnectedSim: Record<string, boolean>;
  setWsConnectedSim: Dispatch<SetStateAction<Record<string, boolean>>>;
}

export const ConnectedSimulatorsContext =
  createContext<IConnectedSimulatorsContext>({
    wsConnectedSim: {},
    setWsConnectedSim: () => {},
  });

export const useConnectedSimulatorsContext = () =>
  useContext(ConnectedSimulatorsContext);
