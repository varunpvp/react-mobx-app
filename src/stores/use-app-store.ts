import { useContext } from "react";
import AppStore from "./app-store";
import AppStoreContext from "./app-store-context";

const useAppStore = () => {
  const appStore = useContext(AppStoreContext);
  return appStore as AppStore;
};

export default useAppStore;
