// import { useHistory } from "react-router-dom";
import Navigation from "./container/Navigation";
import Router from "./router";

function App() {

  // const history = useHistory();

  // Redirecting to signin
  // history.push("/signin");

  return <>
    <Navigation />
    <Router />
  </>
}

export default App;
