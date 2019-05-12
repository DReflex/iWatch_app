import React from 'react';
import '../styles/landing/landing.scss';
const someBread = require('../../images/brotritter-korn.jpg')

class Landing extends React.Component{
  
  render(){
    console.log(someBread)
    let height = (window.innerWidth < 720) ? "auto" : window.innerHeight
  return(
    <div>
      <div id="landing"  style={{height:height}} className="landing">
        <div className="landingImage fade-in-animation">
          <img src={someBread} alt="#_#" />
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
