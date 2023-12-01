import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ConnectedSimulatorsContext } from "./connected-simulator-context";

function ConnectedSimulatorsContextProvider({
  children,
}: {
  children: PropsWithChildren<ReactNode>;
}) {
  const [wsConnectedSim, setWsConnectedSim] = useState<Record<string, boolean>>(
    {}
  );

  return (
    <ConnectedSimulatorsContext.Provider
      value={{
        wsConnectedSim,
        setWsConnectedSim,
      }}
    >
      {children}
    </ConnectedSimulatorsContext.Provider>
  );
}

export default ConnectedSimulatorsContextProvider;
