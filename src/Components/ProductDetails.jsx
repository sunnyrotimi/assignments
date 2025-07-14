import { useState } from 'react';
import image5 from "../assets/image5.JPG";
import image6 from "../assets/image6.JPG";
import image7 from "../assets/image7.JPG";
import image8 from "../assets/image8.JPG";
import image9 from "../assets/image9.JPG";
import Counter from './Counter';
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductList from './ProductList';
import { FaArrowLeft } from "react-icons/fa";



const ProductDetails = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="product-details">
      <button  onClick={handleGoBack} className='go-back' ><FaArrowLeft />Go Back</button>

      <div className="product-details-images">
        <div>
          <img src={image5} className="image5" alt="" />
        </div>
        <div className="product-details-images2">
          <img src={image6} className="image6" alt="" />
          <img src={image7} className="image7" alt="" />
          <img src={image8} className="image8" alt="" />
          <img src={image9} className="image9" alt="" />
          
        </div>
      </div>

      <div>
        <h5 className="sneaker">SNEAKER COMPANY</h5>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="percent"><h2>$125.00</h2>
        <h3>50%</h3></div>
        <h4>$250.00</h4>
        <div className='cart'><div><Counter /></div><button className="bnt2"><AiOutlineShoppingCart />Add to cart</button></div>

      </div>
      
    </div>
    
  );
}

export default ProductDetails;
