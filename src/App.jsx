import React from 'react'
import ProductList from './Components/ProductList'
import ProductDetails from './Components/ProductDetails'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";





const App = () => {
  

  return (
    <div>
      {/* <ProductList />
      <ProductDetails /> */}

       <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
    </Router>

     

      
    </div>
  );
}

export default App

