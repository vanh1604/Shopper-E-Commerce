import React from "react";
import "./CSS/LoginSignUp.css";
const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="email" name="" id="" placeholder="Your Email" />
          <input type="password" name="" id="" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
