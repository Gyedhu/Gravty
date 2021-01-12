import {
  Route,
  Switch
} from "react-router-dom";

// Pages
import {
  Page,
  Home,
  PageEditor,
  Signin,
  Signup,
  Write,
  ImageSelector,
  UploadList,
  Profile
} from "../pages";

const Router = () => {
  return <Switch>
    <Route exact component={Profile} path="/profile" />
    <Route exact component={Home} path="/" />
    <Route component={Signin} path="/signin" />
    <Route component={Signup} path="/signup" />
    <Route exact component={Write} path="/write" />
    <Route exact component={Page} path="/page" />
    <Route exact component={ImageSelector} path="/select-image" />
    <Route exact component={UploadList} path="/upload-list" />

    <Route exact path="/upload-list/questions">
      <UploadList type="questions" />
    </Route>
    <Route exact path="/upload-list/pages">
      <UploadList type="pages" />
    </Route>

    <Route path="/write/question">
      <Write type="question" />
    </Route>

    <Route path="/write/page">
      <Write type="page" />
    </Route>

    <Route component={PageEditor} path="/page/page-editor" />

  </Switch>
}

export default Router;
