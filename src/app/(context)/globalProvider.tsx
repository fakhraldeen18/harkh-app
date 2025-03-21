"use client";
import { createContext, useEffect, useState, ReactElement } from "react";

export type DecodedUser = {
  undefined: string;
  emailaddress: string;
  role: string;
  nameidentifier: string;
};

export type GlobalContextType = {
  state: GlobalState;
  // handleStoreUser: (user: DecodedUser) => void;
  // handleRemoveUser: () => void;
};
export type GlobalState = {
  user: DecodedUser | null;
};
export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalProvider ({ children }: { children: ReactElement }) {

    const [state, setState] = useState<GlobalState>({
      user: null
    });

    useEffect(() => {
      const decodedUserToken = localStorage.getItem("decodedUserToken");
      if (decodedUserToken) {
        const decodedUser = JSON.parse(decodedUserToken);
        setState({
          ...state,
          user: decodedUser,
        });
      }
    }, []);

  return (
    <GlobalContext.Provider value={{ state}}>
      {children}
    </GlobalContext.Provider>
  );
}
