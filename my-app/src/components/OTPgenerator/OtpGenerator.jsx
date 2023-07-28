import React from "react";
import Header from "./Header";
import LinkMenu from "./LinkMenu";
import Form from "./Form";
import "./OtpGenerator.css";

export default function OtpGenerator() {
  return (
    <div className="otp-box">
      <div className="title">
        <Header />
        <LinkMenu />
      </div>
      <Form />
    </div>
  );
}
