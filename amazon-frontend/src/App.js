import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import styled from 'styled-components';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CheckOut from "./components/CheckOut";
import Adress from "./components/Adress";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from "./components/AddProduct";

const promise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

function App() {

  return (
    
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/adress" element={<Adress />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          </Routes>
        </Container>
      </Router>
    
  );
}

const Container = styled.div`
  width: 100vw; // Added the missing semicolon
`;

export default App;
