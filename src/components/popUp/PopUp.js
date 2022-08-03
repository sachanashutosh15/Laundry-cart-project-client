import React from "react";
import "./PopUp.css";

const Popup = (props) => {
  const orderDetails = props.orderDetails;
  const [orderDetailsFinal, setOrderDetailsFinal] = React.useState({
    timeStamp: "",
    storeInfo: "",
    userAddress: "",
    status: "",
    items: "",
  });
  // setOrderDetailsFinal(prevDetails => ({...prevDetails, }));

  let subTotal = 0;
  for (let i = 0; i < orderDetails.length; i++) {
    subTotal += orderDetails[i].price;
  }

  const pickupCharge = 90;
  const stores = [
    {
      name: "JP nagar",
      address: "Near phone booth, 10th Road",
      phone: "+91 9786543210",
      city: "Bangalore"
    },
    {
      name: "Kanpur",
      address: "Yashoda Nagar, Bypass",
      phone: "+91 98374678234",
      city: "Kanpur"
    }
  ]

	const url = "https://laundrycart--server.herokuapp.com/newOrder";

	async function handleSubmit () {
    if (orderDetailsFinal.storeInfo === "") {
      alert("Please Choose the Store Location");
      return;
    } else {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(orderDetailsFinal),
        headers: {
          "content-type": "application/json",
          "authorization": `bearer ${localStorage.getItem('token')}`,
        }
      })
      const data = res.json();
      console.log(data);
      props.setTrigger(prevState => ({popup: false, confirmCardPopup: true}))
    }
		// await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(orderDetailsFinal),
    // })
	}

  function handleChange(e) {
    setOrderDetailsFinal(prevDetails => ({
      ...prevDetails, storeInfo: e.target.value,
			timeStamp: generateTimeStamp(),
			status: "Ready to pickup",
      items: JSON.stringify(orderDetails)
    }));
  }

	function generateTimeStamp() {
		const dateString = new Date().toString();
		let timeInfo = dateString.split(' ');
		let timeStamp = timeInfo[2] + " " + timeInfo[1] + " " + timeInfo[3]	+ " " + timeInfo[4]
		return timeStamp;
	}

  return (props.trigger.popup) ? (
    <>
      <div className="popup">
        <div className="popUpHead">
          <div className="header-text">Summary</div>
          <button className="popup-close" onClick={() => props.setTrigger(prevState => ({...prevState, popup: false}))} >&times;</button>
        </div>
        <div style={{borderBottom: "1px solid rgba(0, 0, 0, 0.3)"}}>
          <div className="addressBar">
            <div className="dropdown-container addressBarContent">
              <select name="address" onChange={handleChange} id="address" className="dropdown browser-default" >
                <option value="" disabled selected className="disabled">Store Location</option>
                {stores.map(store => (<option value={JSON.stringify(store)} key={store.name} >{store.name}</option>))}
              </select>
            </div>
            <div className="storeAddr addressBarContent">
              <p className="storeDetail">Store Address:</p>
              <p className="storeDetail">{
                orderDetailsFinal.storeInfo !== "" ?
                JSON.parse(orderDetailsFinal.storeInfo).address : ""
              }</p>
            </div>
            <div className="storePhone addressBarContent">
              <p className="storeDetail">Phone:</p>
              <p className="storeDetail">{
                orderDetailsFinal.storeInfo !== "" ?
                JSON.parse(orderDetailsFinal.storeInfo).phone : ""
              }</p>
            </div>
          </div>
          <div className="orderDetails">
            <div>
              <p>Order Details</p>
            </div>
            <div>
              {orderDetails.map(item => (
                <ItemRow
                  key={item.name}
                  info={item}
                  orderdetailsFinal={orderDetailsFinal}
                  setOrderDetailsFinal={setOrderDetailsFinal}
                />))
              }
              <div className="subTotal">
                <div className="priceCalculation subTotalContent">
                  <p>Sub Total:</p>
                  <h6 className="finalPrice"> {subTotal} </h6>
                </div>
              </div>
              <div className="subTotal">
                <div className="priceCalculation subTotalContent" style={{border: "none"}}>
                  <p>Pickup Charges:</p>
                  <h6 className="finalPrice" > {pickupCharge} </h6>
                </div>
              </div>
              <div className="popUpHead totalPrice">
                <div className="priceCalculation subTotalContent" style={{border: "none"}}>
                  <p>Total:</p>
                  <h6 className="finalPrice" style={{color: "white", fontSize: "1.2rem"}}>Rs {subTotal + pickupCharge} </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="addressContainer">
              <p style={{fontSize:"10px", margin: "0.5rem 0"}}>Address</p>
              <div className="addressCard">
                <div className="addressCard-content">
                  <div className="addressCard-checkedContainer">
                    <h6>Home</h6>
                    <img src="/images/check-circle-fill.svg" />
                  </div>
                  <p style={{marginTop: "0.5rem"}}>{props.userAddress.address}</p>
                </div>
              </div>
          </div>
        <div className="popupFooter">
					<button
						className="button"
						onClick={() => {
							handleSubmit();
						}}
					>
						Confirm
					</button>
        </div>
      </div>
      <div className="overlay"></div>
    </>) : "";
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
            return <i key={i}>{a ? `${washTypeArray[i]}, `: ""}</i>;
          }) }
        </div>
        <div className="priceCalculation">
          <h6>{`${quantity}x${itemPrice / quantity} =`}</h6>
          <h6 className="finalPrice"> {`${itemPrice}`} </h6>
        </div>
      </div>
    </>
  );
}

export default Popup;