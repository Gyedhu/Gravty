import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYT5b44VvNtikssCWc_k8q7gWbt8xstQA",
  authDomain: "gravity-0202.firebaseapp.com",
  databaseURL: "https://gravity-0202.firebaseio.com",
  projectId: "gravity-0202",
  storageBucket: "gravity-0202.appspot.com",
  messagingSenderId: "552320998515",
  appId: "1:552320998515:web:9da9d793615404c1bdde06",
  measurementId: "G-PDQ01NMLBG"
};

firebase.initializeApp(firebaseConfig); 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
