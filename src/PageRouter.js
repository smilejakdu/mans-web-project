import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Django, Flask, Mldl, Mypage, Write } from "./pages";
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
          <Route path="/django" exact="true" component={Django} />
          <Route path="/flask" exact="true" component={Flask} />
          <Route path="/ML&DL" exact="true" component={Mldl} />
          <Route path="/mypage" exact="true" component={Mypage} />
          <Route path="/write" exact="true" component={Write} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default PageRouter;
