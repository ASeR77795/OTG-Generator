// import logo from "./logo.svg";
import "./App.css";
import img1 from "./plug/img/SquaredMenu.png";
import img2 from "./plug/img/OTPgenerator.png";
import img3 from "./plug/img/Balancechecker.png";
import img4 from "./plug/img/Whitelistchecker.png";
import img5 from "./plug/img/Identities.png";
import img6 from "./plug/img/Users.png";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="container">
        <div className="title">
          <h1>OTP Generator</h1>
          <div className="link-menu">
            <button className="menu-button">
              <img src={img1} />
            </button>
            <div className="menu-box">
              <button>
                <img src={img2} />
              </button>
              <button>
                <img src={img3} />
              </button>
              <button>
                <img src={img4} />
              </button>
              <button>
                <img src={img5} />
              </button>
              <button>
                <img src={img6} />
              </button>
            </div>
          </div>
        </div>
        <form className="modal">
          <div className="modal-input">
            <input className="input-name" type="text" placeholder="name" />
            <input
              className="input-secret"
              type="text"
              placeholder="OTP Secret"
            />
            <div className="timer"></div>
            <div className="code">555 555</div>

            <button className="btn-add" type="button">
              +
            </button>
          </div>
          <button className="modal-btn" type="button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
