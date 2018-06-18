import React from "react";
import { connect } from 'react-redux';
import '../styles/landing/features.scss';
import '../styles/landing/design.scss'

class Design extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
      <div className="feature-design design1">
        <div className="left">
          <img src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fapple_mj3v2ll_a_watch_smartwatch_42mm_stainless_1146124.jpg?1528037473659" alt="#_#" />
        </div>
        <div className="right">
            <h1>Designed for effective product landing page</h1>
            <p className="fade-in-animation">Pellentesque eget dolor gravida, tempus purus ac, ultricies mauris. Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus malesuada mi.</p>
            <ul className="fade-in-animation">
              <li>Nulla ornare purus non consequat ultricies.</li>
              <li>Nulla ornare purus non consequat ultricies.</li>
              <li>Nulla ornare purus non consequat ultricies.</li>
              <li>Nulla ornare purus non consequat ultricies.</li>
            </ul>
        </div>
      </div>
      <div className="feature-design">
        <div className="right1">
            <h1>Designed for effective product landing page</h1>
            <p className="fade-in-animation">Pellentesque eget dolor gravida, tempus purus ac, ultricies mauris. Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus malesuada mi.</p>
            <ul className="fade-in-animation">
              <li>Nulla ornare purus non consequat ultricies.</li>
              <li>Nulla ornare purus non consequat ultricies.</li>
              <li>Nulla ornare purus non consequat ultricies.</li>
              <li>Nulla ornare purus non consequat ultricies.</li>
            </ul>
        </div>
        <div className="left">
          <img src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fapple_mj3v2ll_a_watch_smartwatch_42mm_stainless_1146124.jpg?1528037473659" alt="#_#" />
        </div>
      </div>
      </div>
    )
  }
}
export default Design
