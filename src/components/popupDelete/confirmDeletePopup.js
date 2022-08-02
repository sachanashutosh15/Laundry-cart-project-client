
import React from "react";
import './confirmDelete.css';
const confirmDelete = props => {

  const url = "http://localhost:3001/orders"

  async function cancelOrder () {
    await fetch (url, {
      method: "DELETE",
      body: JSON.stringify({orderId: props.orderId}),
      headers: {
        "content-type": "application/json",
        "authorization": `bearer ${localStorage.getItem("token")}`
      }
    })
    props.setTrigger(false);
  }

  return (
    <>
      <div className="confirmDeleteCard">
        <div className="confirmDeleteCard-head">
          <div style={{fontSize: "1.2rem"}}>Alert</div>
          <button className="popup-close" onClick={() => props.setTrigger(false)} >&times;</button>
        </div>
        <div className="confirmDeleteCard-content">
          <div className="confirmDeleteCard-notice">
            <div className="danger" >
              <img className="img1" style={{height: '30px'}} src="/images/danger.svg" alt="danger" />
            </div>
            <div className="confirmDeleteCard-text">
              <p style={{marginBottom: "5px"}}>Are you sure want to cancel the </p>
              <p id="p"> order No:{props.orderId} </p>
            </div>
          </div>
          <button className="confirmDeleteCard-button" onClick={() => cancelOrder()}>Proceed</button>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default confirmDelete;