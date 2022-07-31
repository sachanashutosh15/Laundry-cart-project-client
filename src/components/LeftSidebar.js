import React from "react"
import home from "../Images/home-run.svg";
import more from "../Images/more.svg";
import list from '../Images/list.jpg';
import './LeftSidebar.css'

const LeftSidebar =()=>{

    return(
        <>
        <div className = "d">
            <div className= "img1"><img src={home}/></div>
                <div className="img2"><img src={more}/></div>
                <div className="img3"><img src={list}/></div>
                
        </div>
        </>
    )
}
export default LeftSidebar;