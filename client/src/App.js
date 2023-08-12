import "./App.css";
import stackoverflowLogo from "./assets/stackoverflowLogo.svg";
import OAuth from "./components/OAuth";
import Login from "./components/Login";

function App() {
  return (
    <div className="app-container">
      <div className="loginpage">
        <img src={stackoverflowLogo} alt="stackoverflow" className="mainlogo" />
        <OAuth />
        <Login />
        <div className="guidemsg">
          계정이 없으신가요? <span className="signupmsg">회원가입</span>
        </div>
      </div>
    </div>
  );
}

export default App;
