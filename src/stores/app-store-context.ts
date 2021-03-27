import React from "react";
import AppStore from "./app-store";

const AppStoreContext = React.createContext<null | AppStore>(null);

export default AppStoreContext;
