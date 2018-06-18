import React from "react";
import { connect } from 'react-redux';
import '../styles/landing/background.scss';
import '../styles/landing/background2.scss'

class Background2 extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className=" newOl">
        <div className="ol fade-in-animation">
          <h1>Sign Up to Our Newsletter and get exciting offers</h1>
          <div className="input input-fix">
           <input className="animation-translate-left" type="text" name="subscribe" value="" placeholder="Join the waiting list" />
           <button className="btn btn-success animation-translate-right" type="button" name="button">Subscribe</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Background2
