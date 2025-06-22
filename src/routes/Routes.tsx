import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import TestOrientacion from "../features/pages/TestOrientacion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AppRoutes = () => (
  <BrowserRouter>
  <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestOrientacion />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

export default AppRoutes;
