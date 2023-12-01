import React, { PropsWithChildren, ReactNode, useState } from "react";
import { ErrorContext } from "./error-context";

function ErrorContextProvider({
  children,
}: {
  children: PropsWithChildren<ReactNode>;
}) {
  const [simulatorError, setSimulatorError] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ simulatorError, setSimulatorError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export default ErrorContextProvider;
