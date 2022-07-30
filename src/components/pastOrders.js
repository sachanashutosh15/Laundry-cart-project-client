import React, { useEffect, useState } from "react";
import "./pastOrders.css"
import axios from "axios";

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

  // const filterdata =async (data)=>{
  //     data.storeInfo = await JSON.parse(data.storeInfo);
  //     return data;
  // }

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.orderId}</td>
          <td>{user.timeStamp}</td>
          <td>{JSON.parse(user.storeInfo).address}</td>
          <td>{JSON.parse(user.storeInfo).city}</td>
          <td>{JSON.parse(user.storeInfo).phone}</td>
          <td>10</td>
          <td>Rs</td>
          <td>{user.status}</td>
          <td>hhh</td>
        </tr>
      )
    })
  }

  return (
    <>
    <div>
      {/* <h1 id="title">API Table</h1> */}
      <div className = 'head'>
        <div>
        <p>Order | 0 </p>
        </div>
        <div className="search">
          <div><button>create</button></div>
          <div><input></input></div>
        </div>
      </div>
      <table id="users">
        <thead>
          <tr >
            <th style={{bgcolor :"black",color:"white" }}>orderId</th>
            <th>Order Date & Time</th>
            <th>Store Location</th>
            <th>City</th>
            <th>Store phone</th>
            <th>Total Items</th>
            <th>Price</th>
            <th>Status</th>
            <th>View</th>
          </tr>
          
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
    </>
  )
}
export default PastOrders;