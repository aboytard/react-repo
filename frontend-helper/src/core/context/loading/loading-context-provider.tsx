import React, { PropsWithChildren, ReactNode, useState } from "react";
import { LoadingContext } from "./loading-context";

function LoadingContextProvider({
  children,
}: {
  children: PropsWithChildren<ReactNode>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingContextProvider;
