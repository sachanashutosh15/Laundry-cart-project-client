import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
