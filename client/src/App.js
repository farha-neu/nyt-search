import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/Home";
import Saved from "./components/Saved";
import axios from "axios";

class App extends Component {
  componentDidMount(){
    axios.post("/test",{});
  }
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </div>
     </Router>
    );
  }
}

export default App;



