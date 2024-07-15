
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Payment from './pages/Payment/Payment'
import Feedback from "./pages/Feedback/Feedback";
import { CartProvider } from './components/context/cartContext';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </CartProvider>
  );
};
export default App