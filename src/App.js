import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemCards from "./components/ItemCards.jsx";
import Hero from "./components/Hero";
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Main />
    </div>
  );
}

export default App;
