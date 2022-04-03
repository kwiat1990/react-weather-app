import { SetDataType, useSetData } from "@/hooks/useSetData";
import { BaseProps } from "@/types/baseProps.type";
import { createContext, useContext } from "react";

type Favs = string;

const FavsContext = createContext<SetDataType<Favs> | undefined>(undefined);

const FavsProvider = ({ children }: BaseProps) => {
  const value = useSetData<Favs>();
  return <FavsContext.Provider value={value}>{children}</FavsContext.Provider>;
};

const useFavs = () => {
  const context = useContext(FavsContext);
  if (context === undefined) {
    throw new Error("useFavs must be used within a FavsProvider");
  }
  return context;
};

export { FavsProvider, useFavs };
