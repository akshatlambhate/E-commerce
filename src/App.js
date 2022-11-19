import "./App.css";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,SignupPage,StorePage,CartPage,CheckoutPage,ContactUsPage,ProductViewPage,Login,AboutPage} from "./pages/PageIndex"
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/store" element={<StorePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/contactus" element={<ContactUsPage />}></Route>
      <Route path="/aboutus" element={<AboutPage />}></Route>
      <Route path="/productview/:productId" element={<ProductViewPage />} ></Route>
      <Route path="/cartpage" element={<CartPage />} ></Route>
      <Route path="/checkoutpage" element={<CheckoutPage />} ></Route>
      <Route path="/signuppage" element={<SignupPage />} ></Route>
      <Route path="/loginpage" element={<LoginPage />} ></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
