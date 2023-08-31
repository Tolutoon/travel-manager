import React from "react";
import "../styles/login.css";
import backImg from "../assets/images/backImagee.png";

function Login() {
  return (
    <>
      <div className="backImg">
        <div className="loginBox">
            <form className="container">
                <div className="loginText">
                <h1>Login</h1>
                <p>Log in to your account</p>
                </div>
                <p>Email</p>
                <input type="text" name="email"/>
                <input type="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default Login;
