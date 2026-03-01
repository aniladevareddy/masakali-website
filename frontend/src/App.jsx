import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import ContactPage from "./ContactPage";
import ReservationModal from "./components/ReservationModal";
import { useEffect } from "react";
import axios from "axios"
function App() {

  useEffect(()=>{
    axios.post("/api/products").then(x=>{
      console.log("this is the res", x)
    })

  },[])
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <ReservationModal />
    </Router>
  );
}

export default App;
