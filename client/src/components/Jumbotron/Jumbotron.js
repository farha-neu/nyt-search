import React from "react";
import './Jumbotron.css';

const Jumbotron = (props) => (
  <div className="jumbotron text-center">
      <h1>NY Times Article Scrubber</h1>
      <h4>{props.children}</h4>
 </div>
);

export default Jumbotron;
