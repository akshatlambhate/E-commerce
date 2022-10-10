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
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="App" class="bg-AirBlue">
      <Main />
      <Categories />
      <SaleSection />
      <GetInTouch />
      <Footer />
    </div>  
  );
}

export default App;
