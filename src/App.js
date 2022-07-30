import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import "./App.css";
// import PastOrders from "./pages/PastOrders/pastOrders";
import LeftSidebar from "./components/LeftSidebar"
import CreateOrder from "./pages/createOrders/createOrders";
import PastOrders from "./pages/PastOrders/pastOrders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FrontPage></FrontPage>}></Route>
        <Route path='/orders' element={<PastOrders />} />
        <Route path="/left" element={<LeftSidebar/>}></Route>
        <Route path="/" element={<FrontPage />} />
        {/* <Route path='/user/orders' element={ <PastOrders /> } /> */}
        <Route path='/user/newOrder' element={ <CreateOrder /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
