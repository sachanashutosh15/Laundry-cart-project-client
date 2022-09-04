import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import "./App.css";
import CreateOrder from "./pages/createOrders/createOrders";
import PastOrders from "./pages/PastOrders/pastOrders";
import LoginTest from './pages/LoginPage/loginTest';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path='/user/orders' element={ <PastOrders /> } />
        <Route path='/user/newOrder' element={ <CreateOrder /> } />
        <Route path='/loginTest' element={<LoginTest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
