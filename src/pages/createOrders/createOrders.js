import React from 'react';
import Footer from '../../components/Footer';
import LeftNavBar from '../../components/leftNavBar/leftNavBar';
import OrderCreatorDiv from '../../components/orderCreator/OrderCreatorDiv';
import TopNavBar from '../../components/topNavBarSignedIn/topNavBar';
import './createOrders.css';

const CreateOrder = () => {
  return (
    <>
      <TopNavBar />
      <div id='createOrderContainer'>
        <LeftNavBar />
        <div className="main-container">
          <OrderCreatorDiv />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateOrder;