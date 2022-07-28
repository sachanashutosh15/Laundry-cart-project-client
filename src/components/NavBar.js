import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () =>{
    return(
        <nav>
            <div className="nav-wrapper white">
                <NavLink to="#" className="brand-logo" style={{marginLeft:"50px"}}>laundry</NavLink>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/redirect1" style={({isActive})=>{
                        return {backgroundColor:isActive?"#5861AE":"white"}
                    }}>Home</NavLink></li>
                    <li><NavLink to="/redirect2" style={({isActive})=>{
                        return {backgroundColor:isActive?"#5861AE":"white"}
                    }}>Pricing</NavLink></li>
                    <li><NavLink to="redirect3" style={({isActive})=>{
                        return {backgroundColor:isActive?"#5861AE":"white"}
                    }}>Career</NavLink></li>
                    <li><NavLink to="/" style={({isActive})=>{
                        return {backgroundColor:isActive?"#5861AE":"white"}
                    }}>Sign In</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;