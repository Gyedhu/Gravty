import { useSelector } from "react-redux";
import { Navigation, Notification } from "./container";
import Router from "./router";
import { NotificationState } from "./redux/notification/type";

function App() {

  const message = useSelector<NotificationState, NotificationState["message"]>(state => state.message);

  return <>
    <Notification message={message} />
    <Navigation />
    <Router />
  </>
}

export default App;
