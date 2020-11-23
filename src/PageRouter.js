import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Popularity, Sale } from "./pages";
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
          <Route path="/popularity" exact="true" component={Popularity} />
          <Route path="/sale" exact="true" component={Sale} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default PageRouter;
