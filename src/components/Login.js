import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { auth } from "../firebase";
const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to ClubHouse!</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <GoogleOutlined />
          <span>Sign In with Google</span>
        </div>
        <br></br>
        <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <FacebookOutlined />
          <span>Sign In with Facebook</span>
        </div>
      </div>
    </div>
  );
};
export default Login;
