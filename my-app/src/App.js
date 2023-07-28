import "./App.css";
import Identities from "./components/Identities/Identities";
import Login from "./components/Login/Login";
import Form from "./components/OTPgenerator/Form";
import Header from "./components/OTPgenerator/Header";
import LinkMenu from "./components/OTPgenerator/LinkMenu";
import OtpGenerator from "./components/OTPgenerator/OtpGenerator";
const App = () => {
  return (
    <div className="app-wrapper">
      <div className="container">
        {/* <OtpGenerator /> */}
        {/* <Login /> */}
        <Identities />
      </div>
    </div>
  );
};
export default App;
