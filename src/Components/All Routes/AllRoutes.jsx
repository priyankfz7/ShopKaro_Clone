import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import SearchPage from "../../SearchPage/SearchPage"
import SingleProductPage from "../../SearchPage/SingleProductPage";
import Footer from "../Footer/Footer";
import Login from "../../Login&Sign/Login";
import Signup from "../../Login&Sign/Signup";
import CartPage from "../../Cart/CartPage";
import Checkout from "../../Checkout.jsx/Checkout";

export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:product_id" element={<SingleProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}
