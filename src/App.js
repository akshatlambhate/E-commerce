import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemCards from "./components/ItemCards.jsx";
import Hero from "./components/Hero";
import Main from "./components/Main";
import './App.css';
import Categories from './components/Categories';
import './index.css'
import SaleSection from './components/SaleSection';

function App() {
  return (
    <div className="App">
      <Main />
      <Categories />
      <SaleSection />
    </div>  
  );
}

export default App;
