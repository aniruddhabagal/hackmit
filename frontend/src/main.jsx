import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWwzj6-NyD0QoeWtYLDLRd9V5KUY7UZtQ",
  authDomain: "hackmit-09.firebaseapp.com",
  projectId: "hackmit-09",
  storageBucket: "hackmit-09.appspot.com",
  messagingSenderId: "163854507616",
  appId: "1:163854507616:web:21686e057869ac46eced05",
};

const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

export const auth = getAuth(app);
export default app;
