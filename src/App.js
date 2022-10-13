import "./App.css";
import './index.css'
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Store from "./components/Store";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import StorePage from './pages/StorePage';
import Login from './pages/Login';
function App() {
  return (
    <div className="App" class="bg-AirBlue">
            {/* <StorePage /> */}
            <AboutPage />
            
      {/* note: - ek baar loginpage or sign in page
                   use krke dekh lena kaise lg rahe hai  */}
 
    </div>  



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
    </Routes>
    </BrowserRouter>
>>>>>>> 677b50e61bed39f91f737aeb39c1d4c81803bf8c
  );
}

export default App;
