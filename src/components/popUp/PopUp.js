import React from "react";
import "./PopUp.css";

const Popup = (props) => {
  const orderDetails = [
    {
        "name":"Shirts", 
        "quantity": 10,
        "washType": [1, 0, 0, 1]
    },
    {
        "name":"Trousers",
        "quantity": 3,
        "washType": [1, 0, 0, 0]
    }
  ];


  return (props.trigger) ? (
    <>
      <div className="popup">
        <div className="head">
          <div className="header-text">Summary</div>
          <button className="popup-close" onClick={() => props.setTrigger(false)} >&times;</button>
        </div>
        <div className="addressBar">
          <div className="dropdown-container addressBarContent">
            <select name="address" id="address" className="dropdown browser-default" >
              <option value="" disabled defaultValue className="disabled">Store Location</option>
              <option value="JP nagar">JP nagar</option>
              <option value="Alam bagh">Alam bagh</option>
              <option value="Ghanta Ghar">Ghanta Ghar</option>
            </select>
          </div>
          <div className="storeAddr addressBarContent">
            <p className="storeDetail">Store Address</p>
            <p className="storeDetail">Near phone booth 10th road</p>
          </div>
          <div className="storePhone addressBarContent">
            <p className="storeDetail">Phone</p>
            <p className="storeDetail">+91 9876543210</p>
          </div>
        </div>
        <div className="orderDetails">
          <div>
            <p>Order Details</p>
          </div>
          <div>
            {orderDetails.map(item => (<ItemRow key={item.name} info={item} />))}
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </>) : "";
}

const ItemRow = (props) => {
  const washType = ["washing", "ironing", "dry-wash", "bleach"];
  const prices = {
    Shirts: [10, 10, 15, 20],
    Tshirts: [10, 10, 15, 20],
    Trousers: [15, 15, 20, 25],
    Jeans: [20, 20, 25, 30],
    Boxers: [15, 15, 20, 25],
    Joggers: [20, 20, 25, 30],
    Others: [25, 25, 30, 35]
  }
  let itemPrice = 0;
  return (
    <>
      <div className="orderDetailsRow">
        <div>
          <h6> {props.info.name} </h6>
        </div>
        <div>
          { props.info.washType.map((a, i) => {
            itemPrice += prices[props.info.name][i] * a;
            return <i key={i}>{a ? `${washType[i]}, `: ""}</i>;
          }) }
        </div>
        <div className="priceCalculation">
          <h6>{`${props.info.quantity}x${itemPrice} =`}</h6>
          <h6 className="finalPrice"> {`${props.info.quantity * itemPrice}`} </h6>
        </div>
      </div>
    </>
  );
}
{/* <h6>a ? washType[i] : ""</h6> */}
export default Popup;