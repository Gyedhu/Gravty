feature/write-page
// import { useHistory } from "react-router-dom"; 
import Navigation from "./container/Navigation";  
import Router from "./router";
import { NotificationState } from "./redux/notification/type";

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
