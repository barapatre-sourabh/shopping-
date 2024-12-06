import React, { useContext } from "react";
import AppContext from "./context/AppContext";
import ShowProduct from "./components/product/ShowProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Navbar from "./components/Navbar";
import SearchProduct from "./components/product/SearchProduct";
import Register from "./components/user/Register";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import Login from "./components/user/Login";
 import AdminLogin from "./components/user/AdminLogin";
import Profile from "./components/user/Profile";
import AdminRegister from "./components/user/AdminRegister";
import AdminDashboard from "./components/user/AdminDashboard";
import Cart from './components/Cart'
import Address from './components/Address'
import Checkout from './components/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
import Footer from "./components/Footer";
import ProductRegister from "./components/product/ProductRegister";
import AlterProduct from "./components/product/AlterProduct";
// import UpdateProduct from "./components/product/UpdateProduct";
const App = () => {
  // const {} = useContext(AppContext)
  return (
    <Router>
      <Navbar />
      <ToastContainer />
     
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/productRegister" element={<ProductRegister />} />
        <Route path="/alterProduct" element={<AlterProduct />} />
        {/* <Route path="/updateProduct/:id" element={<UpdateProduct />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/oderconfirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
