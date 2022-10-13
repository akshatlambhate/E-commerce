import "./App.css";
import './index.css'
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import StorePage from './pages/StorePage';
import Login from './pages/Login';
import ProductView from "./components/ProductView";
import ProductViewPage from "./pages/ProductViewPage";
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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
