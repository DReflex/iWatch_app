import React from "react";
import { connect } from 'react-redux';
import '../styles/landing/features.scss';
import '../styles/landing/background.scss';

class Background extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="backOl">
        <div className="ol fade-in-animation">
          <h1>Creative Landing App For Your Easy Life! Simple Reliable & Understandable for your customers</h1>
          <button className="btn btn-success" type="button" name="button">Buy now</button>
        </div>
      </div>
    )
  }
}
export default Background
