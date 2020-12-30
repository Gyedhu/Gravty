import { Navigation, Notification } from "./container";
import Router from "./router";
import { NotificationState } from "./redux/notification/type";
import { useSelector } from "react-redux";

function App() {

  interface State {
    notification: NotificationState;
  } 
  
  const message = useSelector<State, NotificationState["message"]>(state => state.notification.message);

  return <>
    <Notification message={message} />
    <Navigation /> 
    <Router />
  </>
}

export default App;
