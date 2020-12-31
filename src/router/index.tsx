import { Route, Switch } from "react-router-dom";
import { Home, Signin, Signup, Write } from "../pages";

const Router = () => {
  return <Switch>
    <Route exact component={Home} path="/" />
    <Route component={Signin} path="/signin" />
    <Route component={Signup} path="/signup" />
    <Route exact component={Write} path="/write" />

    <Route path="/write/question">
      <Write type="question" />
    </Route>

    <Route path="/write/page">
      <Write type="page" />
    </Route>

  </Switch>
}

export default Router;
