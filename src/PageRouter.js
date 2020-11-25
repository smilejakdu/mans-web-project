import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Dress, Hair, Mypage } from "./pages";
import { Layout } from "./Layouts";

const PageRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              <span>test home</span>;
            }}
          />
          <Route path="/home" exact="true" component={Home} />
          <Route path="/dress" exact="true" component={Dress} />
          <Route path="/hair" exact="true" component={Hair} />
          <Route path="/mypage" exact="true" component={Mypage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default PageRouter;
