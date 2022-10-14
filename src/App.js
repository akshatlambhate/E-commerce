import "./App.css";
import './index.css'
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
<<<<<<< HEAD
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import ItemCards from "./components/ItemCards";

  
=======
import StorePage from './pages/StorePage';
import Login from './pages/Login';
import ProductView from "./components/ProductView";
import ProductViewPage from "./pages/ProductViewPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
>>>>>>> d2185f7b223079b53357d32090e1e381d82887d6
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/store" element={<StorePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/contactus" element={<ContactUsPage />}></Route>
      <Route path="/aboutus" element={<AboutUsPage />}></Route>
      <Route path="/productview" element={<ProductViewPage />} ></Route>
      <Route path="/cartpage" element={<CartPage />} ></Route>
      <Route path="/checkoutpage" element={<CheckoutPage />} ></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
