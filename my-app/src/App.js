import "./App.css";
import Login from "./components/Login/Login";
import Form from "./components/OTPgenerator/Form";
import Header from "./components/OTPgenerator/Header";
import LinkMenu from "./components/OTPgenerator/LinkMenu";
const App = () => {
  return (
    <div className="app-wrapper">
      <div className="container">
        {/* <div className="title">
          <Header />
          <LinkMenu />
        </div>
        <Form /> */}
        <Login />
      </div>
    </div>
  );
};
export default App;
