import React, { useContext } from "react";
import { RootApi } from "./apis/root";
import { RootStore } from "./stores/root";

interface RootContextObject {
  store: RootStore;
  api: RootApi;
}

export const RootContext = React.createContext<null | RootContextObject>(null);

export const useRootContext = () => {
  const context = useContext(RootContext);
  return context as RootContextObject;
};

export const useRootStore = () => useRootContext().store;

export const useRootApi = () => useRootContext().api;
