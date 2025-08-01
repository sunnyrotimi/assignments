import React from 'react'
import LandingPage from './Components/LandingPage'
import RegisterPage from './Components/RegisterPage'
import LoginPage from './Components/LoginPage'
import About from "./Components/About"
import Contact from "./Components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <LandingPage />
      <RegisterPage />
      <LoginPage /> */}

      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
      






    </div>
  )
}

export default App
