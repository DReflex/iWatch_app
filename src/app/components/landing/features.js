import React from "react";
import { connect } from 'react-redux';
import '../styles/landing/features.scss';


class Features extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="features">
        <div className="heading animation-down">
          <h1>Features & Overviews</h1>
          <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est,
  convallis nec purus vitae, iaculis posuere sapien.</p>
        </div>
          <div className="content">

            <div className="layer1">
              <div className="layer-content animation-down">
                <i className="far fa-chart-bar"></i>
                <h1>LOREM IPSUM</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>
              <div className="layer-content animation-down">
                <i className="far fa-file"></i>
                <h1>LOREM IPSUM</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>
              <div className="layer-content animation-down">
                <i className="fas fa-download"></i>
                <h1>LOREM IPSUM</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>

            </div>
            <div className="layer-img animation-down">
              <img src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fapple_mj3v2ll_a_watch_smartwatch_42mm_stainless_1146124.jpg?1528037473659" alt="#_#" />
            </div>
            <div className="layer1">
              <div className="layer-content animation-down">
                <i className="far fa-comment"></i>
                <h1>LOREM IPSUM</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>
              <div className="layer-content animation-down">
                <i className="far fa-compass"></i>
                <h1>LOREM IPSUM</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>
              <div className="layer-content animation-down">
                <i className="fas fa-gamepad"></i>
                <h1>LOREM IPSUM</h1>
                <p>Some lorem contetnt to fill the gap and make it look clean and organized.</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Features
