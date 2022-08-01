import React from 'react';
import './OrderCreatorDiv.css'

const ItemRow = (props) => {
  // const [inputValue, setInputValue] = React.useState("");
  const [itemPriceInfo, setItemPrice] = React.useState({
    itemPrice: 0,
    pricePerItem: 0,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    props.setOrderDetails(prevDetails => {
      return {
        ...prevDetails,
        [props.info.name]: { ...prevDetails[props.info.name], quantity: value }
      };
    });
  }

  const handleImageClick = (e) => {
    let index = Number(e.target.attributes.index.value);
    props.setOrderDetails(prevDetails => {
      let newWashType = [...prevDetails[props.info.name].washType];
      newWashType[index] = !newWashType[index];
      return {
        ...prevDetails,
        [props.info.name]: {...prevDetails[props.info.name], washType: newWashType }
      }
    })
  }

  const prices = {
    Shirts: [10, 10, 15, 20],
    'T shirts': [10, 10, 15, 20],
    Trousers: [15, 15, 20, 25],
    Jeans: [20, 20, 25, 30],
    Boxers: [15, 15, 20, 25],
    Joggers: [20, 20, 25, 30],
    Others: [25, 25, 30, 35]
  }

  const calculateItemPrice = () => {
    let price = 0, pricePerItem = 0;
    props.orderDetails[props.info.name].washType.map((val, i) => {
      price += prices[props.info.name][i] * val * Number(props.orderDetails[props.info.name].quantity);
      pricePerItem += prices[props.info.name][i] * val;
    })
    return [price, pricePerItem];
  }

  React.useEffect(() => {
    let [itemPrice, pricePerItem] = calculateItemPrice();
    setItemPrice({
      itemPrice: itemPrice,
      pricePerItem: pricePerItem,
    });
    props.setOrderDetails(prevDetails => ({...prevDetails, [props.info.name]: {...prevDetails[props.info.name], price: itemPrice}}))
  }, [...props.orderDetails[props.info.name].washType, props.orderDetails[props.info.name].quantity]);

  const reset = () => {
    props.setOrderDetails(prevDetails => ({...prevDetails, [props.info.name]: {
      quantity: "",
      washType: [0, 0, 0, 0],
      price: 0,
    }}));
    props.setFilteredOrderDetails([]);
  }

  return (
    <>
      {/* <form>
        <input
          type="text"
          placeholder="Input"
          autoComplete='off'
          onChange={ (e) => {setInputValue(e.target.value); console.log(inputValue)} }
          value={inputValue}
        />
      </form> */}
      <div className='itemsRow'>
        <div className="imageDiv">
          <img className="itemImage" src={`/images/${props.info.image}`} />
          <div>
            <p>{props.info.name}</p>
          </div>
        </div>
        <div className="inputDiv">
          <input
            className="quantityInput"
            autoComplete='off'
            type="text"
            name="quantity"
            value={props.orderDetails[props.info.name].quantity}
            onChange={handleChange}
          />
        </div>
        <div className="washtype">
          <img
            className="washtypeImage"
            index="0"
            src={`/images/${props.orderDetails[props.info.name].washType[0] ? "washing-machineS.svg" : "washing-machine.svg"}`}
            alt=""
            onClick={handleImageClick}
          />
          <img
            className="washtypeImage"
            index='1'
            src={`/images/${props.orderDetails[props.info.name].washType[1] ? 'ironingS.svg' : 'ironing.svg'}`}
            alt=""
            onClick={handleImageClick}
          />
          <img
            className="washtypeImage"
            index='2'
            src={`/images/${props.orderDetails[props.info.name].washType[2] ? 'towelS.svg' : 'towel.svg'}`}
            alt=""
            onClick={handleImageClick}
          />
          <img
            className="washtypeImage"
            index='3'
            src={`/images/${props.orderDetails[props.info.name].washType[3] ? 'bleachS.svg' : 'bleach.svg'}`}
            alt=""
            onClick={handleImageClick}
          />
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "20%", padding: '0 1rem'}}>
          <div>
            {itemPriceInfo.itemPrice ?
              <div className="price">
                <div className="pricePerItemTimes">
                  {props.orderDetails[props.info.name].quantity +
                  "x" + itemPriceInfo.pricePerItem}=
                </div>
                <div className="itemPrice">
                  {itemPriceInfo.itemPrice}
                </div>
              </div>: "___"}
          </div>
          {itemPriceInfo.itemPrice ? <button className="button browser-default" onClick={() => {reset()}} >Reset</button> : ""}
        </div>
      </div>
    </>
  );
}

export default ItemRow;