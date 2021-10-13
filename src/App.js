import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {

  document.body.style.backgroundColor="#32528285"

  return (
    <>
    <Router>
    
    <Route exact path="/" component={Login}></Route>
    <Route exact path="/Form" component={Form}></Route>


    

    </Router>
    </>
  );
}

export default App;
