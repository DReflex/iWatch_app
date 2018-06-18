import React from 'react';
import '../styles/landing/landing.scss';

class Landing extends React.Component{
  render(){
    let height = window.innerHeight;
  return(
    <div>
      <div id="landing"  style={{height:height}} className="landing">
        <div className="landingImage fade-in-animation">
          <img src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fapple_mj3v2ll_a_watch_smartwatch_42mm_stainless_1146124.jpg?1528037473659" alt="#_#" />
        </div>
        <div className="landingHeading fade-in-animation ">
          <h1>Landing Page for <br/> Apple Watch</h1>
          <p>Beoplay A1 bluetooth speakers image on the left is owned by Bang and Olufsen and is released under creative commons lisence.</p>
          <div className="input">
           <input className="animation-translate-left" type="text" name="subscribe" value="" placeholder="Join the waiting list" />
           <button className="btn btn-success animation-translate-right" type="button" name="button">Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  )
 }
}
export default Landing
