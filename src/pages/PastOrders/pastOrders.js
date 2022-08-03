import React, { useEffect, useReducer, useState } from "react";
import Footer from '../../components/Footer';
import "./pastOrders.css"
import TopNavBar from '../../components/topNavBarSignedIn/topNavBar';
import LeftNavBar from "../../components/leftNavBar/leftNavBar";
import { Link } from "react-router-dom";
import AfterDelete from "../../components/popupDelete/AfterDelete";
import ConfirmDelete from "../../components/popupDelete/confirmDeletePopup";
import TakeOrder from "../TakeOrder/TakeOrder";
const PastOrders = () => {
  const pickupCharges = 90;
  const url = 'https://laundrycart--server.herokuapp.com/orders';
  const [data, setData] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deletePopupInfo, setDeletePopupInfo] = useState({});
  const [confirmDeletePopup, setConfirmDeletePopup] = useState(false);
  const [userData, setUserData] = React.useState("");
  // const orderDetails = props.orderDetails[0];
  // const storeInfo = JSON.parse(orderDetails.storeInfo);
  // const items = JSON.parse(orderDetails.items);
  // console.log(items);
  // const items = JSON.parse(items);
  // console.log(items)
  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [confirmDeletePopup])

  React.useEffect(() => {
    fetch ("https://laundrycart--server.herokuapp.com/userinfo", {
      method: "GET",
      headers: {
        "authorization": `bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setUserData(data)
    })
  },[])

  function calculatePriceNQuantity (items) {
    let price = 0;
    let quantity = 0;
    items.forEach(item => {
      price += item.price;
      quantity += Number(item.quantity);
    })
    return {price, quantity};
  } 

  function handleDelete(e) {
    let targetOrderId = e.target.attributes.orderId.value;
    setDeletePopupInfo(data.filter(order => order.orderId === targetOrderId));
  }
  return (
    <>
      <TopNavBar userName={userData.name} />
      {data.length > 0 ? 
      <div>
      <div className="createOrderContainer">
        <LeftNavBar />
        <div className="main-container">
        <div class='orderCreatorComponent'>
          <div className="textDiv">
            <p style={{ color: "#1E2022" }}>Order | {data.length} </p>
            <div className="pastOrderSearchContainer">
              <Link to='/user/newOrder' state={userData.name}><button className="Button1">Create</button></Link>
              <img className='lensImg' src="/images/search.svg" />
              <input id="searchInput" type='text' />
            </div>
          </div>
          <div id='tableContainer'>
            <div className='pastOrderTableHead'>
              <div className="pastOrderTable-orderId">OrderId</div>
              <div className="pastOrderTable-date">Order Date</div>
              <div className="pastOrderTable-StoreLocation">Store Location</div>
              <div className="pastOrderTable-City">City</div>
              <div className="pastOrderTable-storePhone">Store phone</div>
              <div className="pastOrderTable-totalItems">Total Items</div>
              <div className="pastOrderTable-price">Price</div>
              <div className="pastOrderTable-status">Status</div>
              <div className="pastOrderTable-view">View</div>
            </div>
            <div id="tableInfoContainer">
              {data.map((order) =>
              (    
                  
                  <div key={order.orderId} className="pastOrderItemsRow">
                    <div className="pastOrderTable-orderId">{order.orderId}</div>
                    <div className="pastOrderTable-date">{order.timeStamp.split(":")[0] + ":" + order.timeStamp.split(":")[1]}</div>
                    <div className="pastOrderTable-StoreLocation">{JSON.parse(order.storeInfo).address}</div>
                    <div className="pastOrderTable-City">{JSON.parse(order.storeInfo).city}</div>
                    <div className="pastOrderTable-storePhone">{JSON.parse(order.storeInfo).phone}</div>
                    <div className="pastOrderTable-totalItems">{calculatePriceNQuantity(JSON.parse(order.items)).quantity}</div>
                    <div className="pastOrderTable-price">{calculatePriceNQuantity(JSON.parse(order.items)).price + pickupCharges}</div>
                    <div className="pastOrderTable-status">
                      {order.status === "Ready to pickup" ? 
                      <div className="cancelNStatus">
                        <div>Ready to pickup</div>
                        <div className="cancelNote Delete"
                          orderId={order.orderId}
                          onClick={(e) => {
                            handleDelete(e);
                            setConfirmDeletePopup(true);
                          }}
                        >
                          Cancel Order
                      </div>
                      </div> : <span>{order.status}</span>
                      }
                    </div>
                    <div className="pastOrderTable-view">
                      <img
                        orderId={order.orderId}
                        src="/images/eye.svg"
                        onClick={(e) => {
                          handleDelete(e);
                          setDeletePopup(true);
                        }}
                      />
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
      {deletePopup ? 
      <AfterDelete
        deletePopup={deletePopup}
        setDeletePopup={setDeletePopup}
        confirmDeletePopup={confirmDeletePopup}
        setConfirmDeletePopup={setConfirmDeletePopup}
        orderDetails={deletePopupInfo}
      /> : ""}
      {confirmDeletePopup ? 
      <ConfirmDelete
        trigger={confirmDeletePopup}
        setTrigger={setConfirmDeletePopup}
        orderId={deletePopupInfo[0].orderId}
      /> : ""}
      </div> : <TakeOrder userData={userData} />}
    </>
  ) 
}
export default PastOrders;