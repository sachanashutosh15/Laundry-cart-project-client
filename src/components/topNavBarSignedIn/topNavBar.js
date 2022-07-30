import React from "react";
import "./topNavBar.css";

const TopNavBar = () => {
  return (
    <>
      <div id="topNavBar">
        <div id="logo">LAUNDRY</div>
        <div id='right-container'>
          <button className="navButton">Pricing</button>
          <button className="navButton">Career</button>
          <div className="userImgContainer">
            <div id="userImgWrapper">
              <img style={{ width: "2rem" }} src='/images/user.svg' />
            </div>
            <div>User Name</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavBar;