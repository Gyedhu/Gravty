import { matchPath, useHistory } from "react-router-dom";
import Navigation from "./container/Navigation";
import Router from "./router";

function App() {

  const history = useHistory();
  const currentPath = history.location.pathname;

  // checking the current page is signin or not
  const signin = matchPath("/signin", {
    path: currentPath,
    exact: true
  });

  // checking the current page is signup or not
  const signup = matchPath("/signup", {
    path: currentPath,
    exact: true
  });

  // // Redirecting to signin
  history.push("/signin");

  return <>
    {/* Adding condition for not show navigation bar when the page is /signin or /signup */}
    {
      !signin && !signup && <Navigation />
    }
    <Router />
  </>
}

export default App;
