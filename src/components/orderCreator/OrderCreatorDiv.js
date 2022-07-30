import React from 'react';
import './OrderCreatorDiv.css'

const OrderCreatorDiv = () => {
  const itemsArray = [
    {
      name: "Shirt",
      image: "shirt.jpeg",
    },
    {
      name: "T shirt",
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
  return (
    <>
    <div id='orderCreator'>
      <div className="textDiv">
        <p style={{ color: "#1E2022" }}>Create Order</p>

        <div className="searchContainer">
          <img className='lensImg' src="/images/search.svg" />
          <input id="searchInput" type='text' />
        </div>
      </div>
      <div id='tableContainer'>
        <div id='tableHead'>
          <div id="item1">Product Type</div>
          <div id="item2">Quantity</div>
          <div id="item3">Wash Type</div>
          <div id="item4">Price</div>
        </div>
        {itemsArray.map(item => (<ItemRow info={item} key={item.name} />))}
      </div>
      <div className="buttonContainer">
        <button className="button">Cancel</button>
        <button className="button">Proceed</button>
      </div>
    </div>
    </>
  );
}

const ItemRow = (props) => {
  return (
    <>
      <div className='itemsRow'>
        <div className="imageDiv">
          <img className="itemImage" src={`/images/${props.info.image}`} />
          <div>
            <p>{ props.info.name }</p>
          </div>
        </div>
        <div className="inputDiv">
          <div className="input"><input className="quantityInput" type="number" style={{ border: "none" }} /></div>
        </div>
        <div className="washtype">
          <img className="washtypeImage" src={'/images/washing-machine.svg'} alt="" />
          <img className="washtypeImage" src="/images/ironing.svg" alt="" />
          <img className="washtypeImage" src="/images/towel.svg" alt="" />
          <img className="washtypeImage" src="/images/bleach.svg" alt="" />
        </div>
        <div className="price">
          <p>___</p>
        </div>
      </div>
    </>
  );
}

export default OrderCreatorDiv;