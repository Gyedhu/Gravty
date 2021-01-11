import { ImageDisplay, Navigation, Notification } from "./container";
import Router from "./router";
import { NotificationState } from "./redux/notification/type";
import { useSelector } from "react-redux";
import { State } from "./redux/store";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.addEventListener("beforeunload", e => {
      // e.returnValue = false;
    });
  }, []);

  const message = useSelector<State, NotificationState["message"]>(state => state.notification.message);
  

  return <>
    <ImageDisplay />
    <Notification message={message} />
    <Navigation />
    <ImageDisplay />
    <Router />
  </>
}

export default App;
