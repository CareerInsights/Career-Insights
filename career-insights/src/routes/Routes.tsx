import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Test from "../features/chaside/pages/Test";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AppRoutes = () => (
  <BrowserRouter>
  <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

export default AppRoutes;
