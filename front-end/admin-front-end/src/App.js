import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/signin" element={<Signin />} />
               <Route path="/signup" element={<Signup />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
