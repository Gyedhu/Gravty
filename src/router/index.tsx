import {
  Route,
  Switch
} from "react-router-dom"; 

// Container 
import { Page } from "../container";

// Pages
import {
  Home,
  PageEditor,
  Signin,
  Signup,
  Write,
  ImageSelector
} from "../pages";

const Router = () => {
  return <Switch>
    <Route exact component={Home} path="/" />
    <Route component={Signin} path="/signin" />
    <Route component={Signup} path="/signup" />
    <Route exact component={Write} path="/write" />
    <Route exact component={Page} path="/page" />
    <Route exact component={ImageSelector} path="/select-image" />

    <Route path="/write/question">
      <Write type="question" />
    </Route>

    <Route path="/write/page">
      <Write type="page" />
    </Route>

    <Route component={PageEditor} path="/write/page-editor" />

  </Switch>
}

export default Router;
