import "./App.css";
import './index.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignupPage from "./pages/SignupPage";
import Store from "./components/Store";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App" class="bg-AirBlue">
            {/* <StorePage /> */}
            <AboutPage />
            
      {/* note: - ek baar loginpage or sign in page
                   use krke dekh lena kaise lg rahe hai  */}
 
    </div>  
  );
}

export default App;
