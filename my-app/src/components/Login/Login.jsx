import React from "react";
import fingerPrintImg from "../../plug/img/FingerPrint.svg";
import "./Login.css";
export default function Login() {
  return (
    <div className="login-box">
      <img src={fingerPrintImg} />
      <div className="login-input">
        <input className="input login" type="text" placeholder="login" />
        <input
          className="input password"
          type="password"
          placeholder="password"
        />
      </div>
      <button className="button" type="button">
        login
      </button>
    </div>
  );
}
