<<<<<<< HEAD
import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import FrontPage from "./pages/FrontPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<FrontPage></FrontPage>}></Route>


      </Routes>
    </BrowserRouter>
  )
=======
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
>>>>>>> cb71a50 (cleaned the branch)
}

export default App;
