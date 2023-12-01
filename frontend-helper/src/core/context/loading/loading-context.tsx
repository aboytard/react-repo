import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";

interface ILoadingContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<ILoadingContext>({
  isLoading: false,
  setIsLoading: () => {},
});

export const useLoadingContext = () => useContext(LoadingContext);
