import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DashBoard from "./Components/DashBoard";
import OverView from "./Components/OverView";
import Analytics from "./Components/Analytics";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="overview" element={<OverView />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="dashboard" element={<Analytics />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


