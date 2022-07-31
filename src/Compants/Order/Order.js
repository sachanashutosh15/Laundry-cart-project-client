 import React, { useEffect, useState } from "react";
import "./order.css"
import axios from "axios";


// const Order =()=>{
//     const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9aae0fc8364acea8fed391a375e08c"
//     const [news,setnews]=useState([]);
//     useEffect(()=>{
//         setnews([news]);
//         axios.get(url)
//         .then(json => console.log(json))

//     },[])
        
//     const 
//     return(<>
//             <button onClick={oncliedevent}>ok</button>
//             <table>
//             <tr>
//                 <th>Order Id</th>
//                 <th>Oreder Time And Date</th>
//                 <th>Store Loaction</th>
//                 <th>City</th>
//                 <th>Store Phone</th>
//                 <th>Total Item</th>
//                 <th>Price</th>
//                 <th>status</th>
//             </tr> 
            
//             </table>
//     </>)
// }


const Order = () => {
    const url = 'http://localhost:3001/orders'
  
    const [data, setData] = useState([])
  
   useEffect(()=>{
    axios.get(url).then((data)=>{
        console.log(data.data);
        setData(data.data)
        // setData(prevdata=>{
        //     return prevdata[0].storeInfo= JSON.parse(prevdata[0].storeInfo)
        // })
    })
   },[])

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
            <td>{user.storeInfo.address}</td> 
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
export default Order;






// app.get("/",async(req,res)=>{
//     const data = await Orders.find();
//     res.send(data);
// });