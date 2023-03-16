import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListing from "./Components/UserListing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserListing />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
