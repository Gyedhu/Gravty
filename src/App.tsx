import { matchPath, useHistory } from "react-router-dom";
import Navigation from "./container/Navigation";
import Router from "./router";

function App() {

  const history = useHistory();

  // Checking current page is /signin or not
  const signin = matchPath(history.location.pathname, {
    path: "/signin",
    exact: true
  });

  // Checking current page is /signup or not
  const signup = matchPath(history.location.pathname, {
    path: "/signup",
    exact: true
  });

  // Redirecting to signin
  history.push("/signin");

  return <>
    {
      !signin && !signup && <Navigation />
    }
    <Router />
  </>
}

export default App;
