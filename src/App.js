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
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div className="App" class="bg-AirBlue">
      <Main />
      <Categories />
      <SaleSection />
      <GetInTouch />
    </div>  
  );
}

export default App;
