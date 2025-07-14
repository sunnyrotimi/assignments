import React from "react";
import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import image4 from "../assets/image4.JPG";
import { FcLikePlaceholder } from "react-icons/fc";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ProductDetails");
  };
  return (
    <div className="product-cards">
      <div className="container1">
        <div>
          <img className="image1" src={image1} alt="" />
          <div className="price">
            <h6>Sale Elegance</h6>
            <h5>$10.00</h5>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="like1">
            <div className="like">
              <FcLikePlaceholder />
            </div>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="container1">
        <div>
          <img className="image2" src={image2} alt="" />
          <div className="price">
            <h6>Urban Sneakers</h6>
            <h5>$12.00</h5>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="like1">
            <div className="like">
              <FcLikePlaceholder />
            </div>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="container1">
        <div>
          <img className="image3" src={image3} alt="" />
          <div className="price">
            <h6>Velvet Boots</h6>
            <h5>$14.00</h5>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="like1">
            <div className="like">
              <FcLikePlaceholder />
            </div>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="container1">
        <div>
          <img className="image4" src={image4} alt="" />
          <div className="price">
            <h6>Summit Hiking</h6>
            <h5>$12.00</h5>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className="like1">
            <div className="like">
              <FcLikePlaceholder />
            </div>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
