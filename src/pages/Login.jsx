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
                <p>Login to your account</p>
                </div>
                <p>Email</p>
                <input type="text" name="email"/>
                <p>Password</p>
                <input className='inputBox' type="password" name="password"/>
                <button className="btn">Login</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default Login;
