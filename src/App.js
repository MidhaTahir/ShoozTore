import React from "react";
import './App.css';
import HomePage from "./HomePage";
import ShoePage from "./ShoePage";
import { Route } from "react-router-dom";
import  AppNavbar from "./AppNavbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <br />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:shoeid" component={ShoePage} />
    </div>
  );
}

export default App;
