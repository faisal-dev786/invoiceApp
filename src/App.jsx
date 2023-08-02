import React from "react";
import CreateInvoice from "./components/CreateInvoice";
import SendToCustomer from "./components/SendToCustomer";
import AddCustomer from "./components/AddCustomer";
import Receipt from "./components/Receipt";
import Receipt2 from "./components/Receipt2";
import SendToCustomerInvoice from "./components/SendToCustomerInvoice";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import("preline");
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const checkLogin = () => {
    if (location.pathname === "/SignUp" || location.pathname === "/Login") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      {checkLogin() === false ? <Navbar /> : ""}
      <Routes>
        {/* <CreateInvoice /> */}
        {/* <SendToCustomer /> */}
        {/* <AddCustomer /> */}
        {/* <Receipt /> */}
        {/* <Receipt2 /> */}
        {/* <SendToCustomerInvoice /> */}
        <Route exact path="/SignUp" element={<SignUp />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
      </Routes>
      {checkLogin() === false ? <Footer /> : ""}
    </div>
  );
};

export default App;
