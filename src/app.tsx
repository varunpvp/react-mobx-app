import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RootContext } from "./root-context";
import { RootStore } from "./stores/root";
import { RootApi } from "./apis/root";
import { HomePage } from "./pages/home";
import { PostPage } from "./pages/post";
import { UserPage } from "./pages/user";

const api = new RootApi();
const store = new RootStore(api);

function App() {
  return (
    <RootContext.Provider value={{ store, api }}>
      <BrowserRouter>
        <Switch>
          <Route path="/user/:userId" component={UserPage} />
          <Route path="/post/:postId" component={PostPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </RootContext.Provider>
  );
}

export default App;
