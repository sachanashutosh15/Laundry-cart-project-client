import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () =>{
    return(
        <div className="nav">
            <div className="laundry1-text">Laundry</div>
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Career</li>
                <li className="sign-in-text-1" style={{color:"white"}}>Sign In</li>
            </ul>
        </div>
    )
}

export default NavBar;