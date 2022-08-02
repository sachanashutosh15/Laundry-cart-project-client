import React, { useEffect, useReducer, useState } from "react";
import Footer from '../../components/Footer';
import "./pastOrders.css"
import TopNavBar from '../../components/topNavBarSignedIn/topNavBar';
import LeftNavBar from "../../components/leftNavBar/leftNavBar";
import { Link } from "react-router-dom";
import AfterDelete from "../../components/popupDelete/AfterDelete";
import ConfirmDelete from "../../components/popupDelete/confirmDeletePopup";
const PastOrders = () => {
  const url = 'http://localhost:3001/orders'

  const [data, setData] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deletePopupInfo, setDeletePopupInfo] = useState({});
  const [confirmDeletePopup, setConfirmDeletePopup] = useState(false);

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

  function handleDelete(e) {
    let targetOrderId = e.target.attributes.orderId.value;
    setDeletePopupInfo(data.filter(order => order.orderId === targetOrderId));
    setDeletePopup(true);
  }

  return (
    <>
      <TopNavBar />
      <div className="createOrderContainer">
        <LeftNavBar />
        <div className="main-container">
        <div class='orderCreatorComponent'>
          <div className="textDiv">
            <p style={{ color: "#1E2022" }}>Order | 0 </p>

            <div className="pastOrderSearchContainer">
              <Link to='/user/newOrder'><button className="button">Create</button></Link>
              <img className='lensImg' src="/images/search.svg" />
              <input id="searchInput" type='text' />
            </div>
          </div>
          <div id='tableContainer'>
            <div className='pastOrderTableHead'>
              <div id="item">OrderId</div>
              <div id="item">Order Date</div>
              <div id="item">Store Location</div>
              <div id="item">City</div>
              <div id="item">Store phone</div>
              <div id="item">Total Items</div>
              <div id="item">Price</div>
              <div id="item">Status</div>
              <div id="item">View</div>
            </div>
            {data.map(user =>
            (
                <div className="pastOrderItemsRow">
                  <div>{user.orderId}</div>
                  <div>{user.timeStamp}</div>
                  <div>{JSON.parse(user.storeInfo).address}</div>
                  <div>{JSON.parse(user.storeInfo).city}</div>
                  <div>{JSON.parse(user.storeInfo).phone}</div>
                  <div>10</div>
                  <div>RS</div>
                  <div>{user.status}</div>
                  <div>
                    <img
                      orderId={user.orderId}
                      src="/images/eye.svg"
                      onClick={handleDelete}
                    />
                  </div>
                </div>
            ))}
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
    </>
  )
}

export default PastOrders;