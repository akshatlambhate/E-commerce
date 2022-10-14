import "./App.css";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,SignupPage,StorePage,CartPage,CheckoutPage,ContactUsPage,ProductViewPage,Login,AboutPage} from "./pages/PageIndex"


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
      <Route path="/productview" element={<ProductViewPage />} ></Route>
      <Route path="/cartpage" element={<CartPage />} ></Route>
      <Route path="/checkoutpage" element={<CheckoutPage />} ></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
