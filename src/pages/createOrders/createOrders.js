import React from 'react';
import Footer from '../../components/Footer';
import LeftNavBar from '../../components/leftNavBar/leftNavBar';
import OrderCreatorDiv from '../../components/orderCreator/OrderCreatorDiv';
import TopNavBar from '../../components/topNavBarSignedIn/topNavBar';
import './createOrders.css';
import { useLocation } from 'react-router-dom';

const CreateOrder = () => {
  const location = useLocation();

  return (
    <>
      <TopNavBar userName={location.state} />
      <div className='createOrderContainer'>
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