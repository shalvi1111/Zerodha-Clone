import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";
// import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({uid}) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  
   
 
  const handleBuyClick = () => {
    console.log("UID:", uid); 
    axios.post("http://localhost:8000/newOrder" 
, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
      
    }  );
    // console.log("UID" , uid);
    generalContext.closeBuyWindow();
  };
   
  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.  </legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              // onChange={(e) => setStockQuantity(Number(e.target.value))}     
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="Number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(parseInt(e.target.value))
              }
              // onChange={(e) => setStockPrice(Number(e.target.value))}     
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65  </span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
