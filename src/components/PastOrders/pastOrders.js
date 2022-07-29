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
          <td>{user.userId}</td>
          <td>{user.orderId}</td>
          <td>{user.timeStamp}</td>
          <td>{JSON.parse(user.storeInfo).address}</td>
          <td>{user.userAddress}</td>
          <td>{user.status}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h1 id="title">API Table</h1>
      <table id="users">
        <thead>
          <tr>
            <th>userId</th>
            <th>orderId</th>
            <th>Time and Date</th>
            <th>storeInfo</th>
            <th>userAddress</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  )
}
export default PastOrders;