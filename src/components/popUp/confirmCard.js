import React from "react";
import "./confirmCard.css";
import { Link } from "react-router-dom";

const ConfirmCard = (props) => {
  return (props.trigger.confirmCardPopup ? (
    <>
      <div className="confirmCard"> 
        <div className="confirmCard-circle">
          <img src="/images/check.svg" style={{height: "4rem"}} />
        </div>
        <div style={{width: "35%", marginBottom: "1rem"}}>
          <h2>Your Order is successfully placed</h2>
        </div>
        <div style={{width: "50%", marginBottom: "1rem", color: "black"}}>
          <p>You can track your order in "Orders" section</p>
        </div>
        <Link to="/user/orders">
          <button
            className="confirmCard-button"
            onClick={() => props.setTrigger(prevState => ({popUp: false, confirmCardPopup: false}))}
          >
            Go to Orders
          </button>
        </Link>
      </div>
      <div className="overlay"></div>
    </>) : ""
  );
}

export default ConfirmCard; 