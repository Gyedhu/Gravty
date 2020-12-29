import { Route, Switch } from "react-router-dom";
import { Home, Signin, Signup, Write } from "../pages";

const Router = () => {
  return <Switch>
    <Route exact component={Home} path="/" />
    <Route component={Signin} path="/signin" />
    <Route component={Signup} path="/signup" />
    <Route component={Write} path="/write" />
  </Switch>
}

export default Router;
