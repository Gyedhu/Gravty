import { useHistory } from "react-router-dom";
import Navigation from "./container/Navigation";
import Router from "./router";

function App() {

  const history = useHistory();
  const currentPath = history.location.pathname;

  // Redirecting to signin
  history.push("/signin");

  return <>
    {
      currentPath !== "/signin" &&
      currentPath !== "/signup" &&
      <Navigation />
    }
    <Router />
  </>
}

export default App;
