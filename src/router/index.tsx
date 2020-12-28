import { Route, Switch } from "react-router-dom";
import { Home } from "../pages";
import Signin from "../pages/Signin";

const Router = () => {
  return <Switch>
    <Route exact component={Home} path="/" />
    <Route component={Signin} path="/signin" />
  </Switch>
}

export default Router;
