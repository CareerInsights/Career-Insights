import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import TestOrientacion from "../features/pages/TestOrientacion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import DianaSection from "../pages/DianaSection";


const AppRoutes = () => (
  <BrowserRouter>
  <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestOrientacion />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/metodo" element={<DianaSection />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

export default AppRoutes;
