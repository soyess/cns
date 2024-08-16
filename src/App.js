import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main.jsx";
import AboutPage from "./pages/About.jsx";
import ServicePage from "./pages/Service.jsx";
import ContactPage from "./pages/Contact.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";
import NewsDetails from "./components/NewsDetails.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/serviceOfferings" element={<ServicePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/newsEvent" element={<NewsEvents />}></Route>
        <Route path="/newsEvent/:id" element={<NewsDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
