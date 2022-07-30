import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import FrontPage from "./pages/FrontPage";
import "./App.css";
import PastOrders from "./components/pastOrders";
import LeftSidebar from "./components/LeftSidebar"

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<FrontPage></FrontPage>}></Route>
        <Route path='/orders' element={<PastOrders />} />
        <Route path="/left" element={<LeftSidebar/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
