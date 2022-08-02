import { useEffect, useState, } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import "./popUpAfterDelete.css";
import { Link } from 'react-router-dom';

const AfterDelete = (props) => {

  const orderDetails = props.orderDetails[0];
  const storeInfo = JSON.parse(orderDetails.storeInfo);
  const items = JSON.parse(orderDetails.items);

  const prices = {
    Shirts: [10, 10, 15, 20],
    'T shirts': [10, 10, 15, 20],
    Trousers: [15, 15, 20, 25],
    Jeans: [20, 20, 25, 30],
    Boxers: [15, 15, 20, 25],
    Joggers: [20, 20, 25, 30],
    Others: [25, 25, 30, 35]
  }

  const pickupCharge = 90;

  let subTotal = 0;
  for (let i = 0; i < items.length; i++) {
    subTotal += items[i].price;
  }

  const calculateItemPrice = () => {
    let price = 0, pricePerItem = 0;
    props.orderDetails[props.info.name].washType.map((val, i) => {
      price += prices[props.info.name][i] * val * Number(props.orderDetails[props.info.name].quantity);
      pricePerItem += prices[props.info.name][i] * val;
    })
    return [price, pricePerItem];
  }

  return (
    <>
      <div className="popup">
        <div className="popUpHead">
          <div className="header-text">Summary</div>
          <button className="popup-close" onClick={() => props.setDeletePopup(false)} >&times;</button>
        </div>
        <div className="addressBar">
          <div className="dropdown-container addressBarContent">
            <div>
              <p>Store Location</p>
              <p>{storeInfo.name}</p>
            </div>
          </div>
          <div className="storeAddr addressBarContent">
            <p className="storeDetail">Store Address:</p>
            <p className="storeDetail">{
              storeInfo.address
            }</p>
          </div>
          <div className="storePhone addressBarContent">
            <p className="storeDetail">Phone:</p>
            <p className="storeDetail">{storeInfo.phone}</p>
          </div>
        </div>
          <div className="orderDetails">
            <div>
              <p>Order Details</p>
            </div>
            {items.map(item => (
              <ItemRow
                key={item.name}
                info={item}
              />))
            }
            <div className="subTotal">
              <div className="priceCalculation subTotalContent">
                <p>Sub Total:</p>
                <h6 className="finalPrice"> {subTotal} </h6>
              </div>
            </div>
            <div className="subTotal">
              <div className="priceCalculation subTotalContent" style={{ border: "none" }}>
                <p>Pickup Charges:</p>
                <h6 className="finalPrice" > {pickupCharge} </h6>
              </div>
            </div>
            <div className="popUpHead totalPrice">
              <div className="priceCalculation subTotalContent" style={{ border: "none" }}>
                <p>Total:</p>
                <h6 className="finalPrice" style={{ color: "white", fontSize: "1.2rem" }}>Rs {subTotal + pickupCharge} </h6>
              </div>
            </div>
          </div>
          <div className="popupFooter">
            <button
              className="cancelButton"
              onClick={() => {
                props.setConfirmDeletePopup(true)
                props.setDeletePopup(false)
              }}
            >
              Cancel
            </button>
          </div>
      </div>
      <div className="overlay"></div>
    </>
  );

  // return (props.trigger.popup) ? (
  //   <>
  //     <div className="popup">
  //       <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}>
  //           <div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="overlay"></div>
  //   </>) : "";
}

const ItemRow = (props) => {
  const washTypeArray = ["washing", "ironing", "dry-wash", "bleach"];
  let quantity = props.info.quantity;
  let name = props.info.name;
  let washType = props.info.washType;
  let itemPrice = props.info.price;
  return (
    <>
      <div className="orderDetailsRow">
        <div>
          <h6> {name} </h6>
        </div>
        <div>
          {washType.map((a, i) => {
            return <i key={i}>{a ? `${washTypeArray[i]}, ` : ""}</i>;
          })}
        </div>
        <div className="priceCalculation">
          <h6>{`${quantity}x${itemPrice / quantity} =`}</h6>
          <h6 className="finalPrice"> {`${itemPrice}`} </h6>
        </div>
      </div>
    </>
  );
}

export default AfterDelete;