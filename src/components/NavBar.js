import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () =>{
    return(
        <nav>
            <div className="nav-wrapper white">
                <Link to="#" className="brand-logo" style={{marginLeft:"50px"}}>laundry</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="profile">Profile</Link></li>
                    <li><Link to="create-post">Create post</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;