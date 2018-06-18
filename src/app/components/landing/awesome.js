import React from "react";
import { connect } from 'react-redux';

import Background from './background';
import Review from './review'

import '../styles/landing/features.scss';
import '../styles/landing/awesome.scss';

class Awesome extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="awesome">
          <div className="heading animation-down">
            <h1>More Awesome Features</h1>
            <p>Pellentesque eget dolor gravida, tempus purus ac, ultricies mauris. Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus malesuada mi.</p>
          </div>
          <div className="awesome-content">
            <div className="awesome-items">
              <div className="layer-content animation-down">
                <i className="fas fa-check-circle"></i>
                <h1>Great Options</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>
              <div className="layer-content animation-down">
                <i className="fas fa-microphone"></i>
                <h1>Voice Callings</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>
              <div className="layer-content animation-down">
                <i className="fas fa-share-alt-square"></i>
                <h1>Sharing Files</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>
          </div>
        </div>
        <Background />
        <Review />
      </div>
    )
  }
}
export default Awesome
