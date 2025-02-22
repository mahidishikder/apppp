

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
// import Home from "./Home"; // Create this component
// import Login from "./Login"; // Create this component
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
