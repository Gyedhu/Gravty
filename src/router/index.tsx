import { Route, Switch } from "react-router-dom";
import { Home } from "../pages";

const Router = () => {
  return <Switch>
    <Route exact component={Home} path="/" />
  </Switch>
}

export default Router;
