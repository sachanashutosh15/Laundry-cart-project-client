import React,{useState} from "react";
import "./topNavBar.css";
import { useNavigate } from "react-router-dom";

const TopNavBar = (props) => {
  const navigate=useNavigate();
  const [transparent,setTransparent]= useState(true);

  const HandleVisibility = () =>{
    if(transparent === false){
      setTransparent(true);
      return;
    }
    setTransparent(false);
  }
  return (
    <>
      <div id="topNavBar">
        <div id="logo">LAUNDRY</div>
        <div id='right-container'>
          <button className="navButton">Pricing</button>
          <button className="navButton">Career</button>
          <div onClick={HandleVisibility} className="userImgContainer">
            <div id="userImgWrapper">
              <img style={{ width: "2rem" }} src='/images/user.svg' />
            </div>
            <div>{props.userName}</div>
          </div>
        </div>
      </div>
      <div>
        <nav style={{ visibility: transparent === false ? "visible" : "hidden" , }} className="nav-dropdown">
          <ul className="ul-dropdown">
            <li>
              <a onClick={() => { 
                if(transparent === false){
                  localStorage.clear();
                  navigate("/");
                }
               }} >Sign Out</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default TopNavBar;

// import React,{useState} from "react";
// import "./topNavBar.css";
// import { useNavigate } from "react-router-dom";
// const TopNavBar = () => {
//   const navigate=useNavigate();
//   const [transparent,setTransparent]= useState(true);
//   const HandleVisibility = () =>{
//     if(transparent === false){
//       setTransparent(true);
//       return;
//     }
//     setTransparent(false);
//   }
//   return (
//     <>
//       <div id="topNavBar">
//         <div id="logo">LAUNDRY</div>
//         <div id='right-container'>
//           <button className="navButton">Pricing</button>
//           <button className="navButton">Career</button>
//           <div onClick={HandleVisibility} className="userImgContainer">
//             <div id="userImgWrapper">
//               <img style={{ width: "2rem" }} src='/images/user.svg' />
//             </div>
//             <div>User Name</div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <nav style={{ visibility: transparent === false ? "visible" : "hidden" , }} className="nav-dropdown">
//           <ul className="ul-dropdown">
//             <li>
//               <a onClick={() => { 
//                 if(transparent === false){
//                   localStorage.clear();
//                   navigate("/");
//                 }
//                }} >Sign Out</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }
// export default TopNavBar;
