import React from 'react';
import './OrderCreatorDiv.css'
import Popup from "../popUp/PopUp";
import ItemRow from './itemRow';
import ConfirmCard from '../popUp/confirmCard';

const OrderCreatorDiv = () => {
  const [popups, setPopups] = React.useState({
    popup: false,
    confirmCardPopup: false,
  });
  const itemsArray = [
    {
      name: "Shirts",
      image: "shirt.jpeg",
    },
    {
      name: "T shirts",
      image: "t-shirt.jpeg",
    },
    {
      name: "Trousers",
      image: "trousers.jpg",
    },
    {
      name: "Jeans",
      image: "jeans.jpg",
    },
    {
      name: "Boxers",
      image: "boxers.jpg",
    },
    {
      name: "Joggers",
      image: "joggers.jpg",
    },
    {
      name: "Others",
      image: "otherClothes.jpg",
    },
  ];

  const [userData, setUserData] = React.useState("");

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

  const initialState = {};
  for (let i = 0; i < itemsArray.length; i++) {
    let name = itemsArray[i].name;
    initialState[name] = {
      quantity: "",
      washType: [false, false, false, false],
      price: 0,
    };
  }

  const [orderDetails, setOrderDetails] = React.useState(initialState);
  const [filteredOrderDetails, setFilteredOrderDetails] = React.useState([]);

  function handleProceed() {
    if(filteredOrderDetails.length !== 0) {
      setPopups(prevState => ({...prevState, popup: true}));
    } else {
      alert("Please choose some items and then proceed");
    }
  }

  React.useEffect(() => {
    setFilteredOrderDetails([]);
    Object.keys(orderDetails).forEach(key => {
      let obj = {};
      if (orderDetails[key].price !== 0) {
        obj.name = key;
        obj.price = orderDetails[key].price;
        obj.quantity = orderDetails[key].quantity;
        obj.washType = orderDetails[key].washType;
        setFilteredOrderDetails(prevDetails => ([...prevDetails, obj]));
      }
    })
  }, [orderDetails])

  return (
    <>
      <div className='orderCreatorComponent'>
        <div className="textDiv">
          <p style={{ color: "#1E2022" }}>Create Order</p>

          <div className="searchContainer">
            <img id="search" className='lensImg ' src="/images/search.svg" />
            <input  id="searchInput" type='text' />
          </div>
        </div>
        <div id='tableContainer'>
          <div id='tableHead'>
            <div id="item1">Product Type</div>
            <div id="item2">Quantity</div>
            <div id="item3">Wash Type</div>
            <div id="item4">Price</div>
          </div>
          {itemsArray.map(item => (
            <ItemRow
              info={item}
              key={item.name}
              setOrderDetails={setOrderDetails}
              orderDetails={orderDetails}
              setFilteredOrderDetails={setFilteredOrderDetails}
              filteredOrderDetails={filteredOrderDetails}
            />
          ))}
        </div>
        <div className="buttonContainer">
          <button className="button browser-default">Cancel</button>
          <button
            className="button browser-default"
            onClick={() => {
              handleProceed();
            }}
          >
            Proceed
          </button>
        </div>
      </div>
      <Popup trigger={popups} setTrigger={setPopups} userAddress={userData} orderDetails={filteredOrderDetails} />
      <ConfirmCard trigger={popups} setTrigger={setPopups} />
    </>
  );
}


export default OrderCreatorDiv;

// let obj = {
//     Shirts: {
//       quantity: "",
//       washType: [false, false, false, false],
//     },
//     'T shirts': {
//       quantity: "",
//       washType: [false, false, false, false],
//     },
//     Trousers: {
//       quantity: "",
//       washType: [false, false, false, false],
//     },
//     Jeans: {
//       quantity: "",
//       washType: [false, false, false, false],
//     },
//     Boxers: {
//       quantity: "",
//       washType: [false, false, false, false],
//     },
//     Joggers: {
//       quantity: "",
//       washType: [false, false, false, false],
//     },
//     Others: {
//       quantity: "",
//       washType: [false, false, false, false],
//     },
//   }