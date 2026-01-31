import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./header/TopNavbar";
import HomePage from "./home-page/HomePage";
import AboutPage from "./about-us/AboutPage";
import MenuPage from "./menu/MenuPage";
import ContactPage from "./contact-us/ContactPage";
import ReservationPage from "./reservation/ReservationPage";
import CateringPage from "./catering/CateringPage";

function App() {
  return (
    <Router>
      <TopNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
         <Route path="/catering" element={<CateringPage />} />
      </Routes>
    </Router>
  );
}

export default App;
