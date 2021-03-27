import AppStore from "./stores/app-store";
import AppStoreContext from "./stores/app-store-context";

const appStore = new AppStore();

function App() {
  return (
    <AppStoreContext.Provider value={appStore}>
      <div>app here</div>
    </AppStoreContext.Provider>
  );
}

export default App;
