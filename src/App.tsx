import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsPage from "./pages/posts-page";
import PostPgae from "./pages/post-page";
import UserPage from "./pages/user-page";

import AppStore from "./stores/app-store";
import AppStoreContext from "./stores/app-store-context";

const appStore = new AppStore();

function App() {
  return (
    <AppStoreContext.Provider value={appStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/user/:userId" component={UserPage} />
          <Route path="/post/:postId" component={PostPgae} />
          <Route path="/" exact component={PostsPage} />
        </Switch>
      </BrowserRouter>
    </AppStoreContext.Provider>
  );
}

export default App;
