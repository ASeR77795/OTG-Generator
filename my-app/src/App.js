// import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { LinkMenu } from "./components/LinkMenu";
const App = () => {
  return (
    <div className="app-wrapper">
      <div className="container">
        <div className="title">
          <Header />
          <LinkMenu />
        </div>
        <Form />
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
