import React, { useEffect, useReducer, useState } from "react";
import "./pastOrders.css"
import axios from "axios";
import TopNavBar from '../../components/topNavBarSignedIn/topNavBar';
import LeftNavBar from "../../components/leftNavBar/leftNavBar";
const PastOrders = () => {
  const url = 'http://localhost:3001/orders'

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])
  const oncliked =()=>{
    
  }
  // const renderTable = () => {
  
    return (
      <>
        <TopNavBar/>
        <div className="TwoDiv">
        <LeftNavBar/><div id='orderCreator'>
          <div className="textDiv">
            <p style={{ color: "#1E2022" }}>Order | 0 </p>

            <div className="searchContainer">
              <button>Create</button>
              <img className='lensImg' src="/images/search.svg" />
              <input id="searchInput" type='text' />
            </div>
          </div>
          <div id='tableContainer'>
            <div id='tableHead'>
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
            {data.map(user=> 
              (
                <table>
                <tr className="tr">
                <td>{user.orderId}</td>
                <td>{user.timeStamp}</td>
                <td>{JSON.parse(user.storeInfo).address}</td>
                <td>{JSON.parse(user.storeInfo).city}</td>
                <td>{JSON.parse(user.storeInfo).phone}</td>
                <td>10</td>
                <td>RS</td>
                <td>{user.status}</td>
                <td onClick={oncliked()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg></td>
              </tr>
              </table>
              ))}
          </div>
        </div>

        </div>
        <div className="NewFooter">
          <p>2021@ Laundary</p>
        </div>
      </>
    )
  }

export default PastOrders;