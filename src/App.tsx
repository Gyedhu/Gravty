// import { useHistory } from "react-router-dom";
import { Navigation, Notification } from "./container";
import Router from "./router";

function App() {

  // const history = useHistory();

  // Redirecting to signin
  // history.push("/signin");

  return <>
    <Notification message="" />
    <Navigation />
    <Router />
  </>
}

export default App;
