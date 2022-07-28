import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
