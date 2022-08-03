import React from "react";
import {Link} from "react-router-dom"
import './TakeOrder.css'
import TopNavBar from '../../components/topNavBarSignedIn/topNavBar';
import LeftNavBar from "../../components/leftNavBar/leftNavBar";
import Footer from "../../components/Footer";
const TakeOrder = (props) => {
  const userData = props.userData;
  
    return (
        <>
        <div className="TwoDiv">
          <LeftNavBar/>
          <div id='orderCreator1'>
            <div className="textDiv">
              <p className="p1" style={{ color: "#1E2022" }}>Order | 0 </p>
              <div className="searchContainer2">
                <img className='lensImg' src="/images/search.svg" />
                <input id="searchInput" type='text' />
              </div>
            </div>
            <div className="MainClass">
                <p style={{margin: "1rem"}}>No Orders avaialble</p>
                <Link to ="/user/newOrder">
                <Link to='/user/newOrder' state={userData.name}><button className="Button1">Create</button></Link>
                </Link>
            </div>
          </div>
        </div>
        <Footer/>
        </>
    );
}
export default TakeOrder