import React from "react";
import { connect } from 'react-redux';
import '../styles/landing/review.scss';

class Review extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="review">
        <div className="review-c">
          <div className="single-r">
            <img src="http://www.m2mglobal.sg/wp-content/uploads/2015/06/avatar11.jpg" alt="" />
            <p>Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus malesuada mi.</p>
            <h3>Alex Datillo</h3>
            <h3>President of Lorem</h3>
          </div>
          <div className="single-r">
            <img src="http://www.m2mglobal.sg/wp-content/uploads/2015/06/avatar11.jpg" alt="" />
            <p>Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus malesuada mi.</p>
            <h3>Alex Datillo</h3>
            <h3>CEO of UBM</h3>
          </div>
          <div className="single-r">
            <img src="http://www.m2mglobal.sg/wp-content/uploads/2015/06/avatar11.jpg" alt="" />
            <p>Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus malesuada mi.</p>
            <h3>Alex Datillo</h3>
            <h3>CEO of Lexo inc</h3>
          </div>
        </div>
      </div>
    )
  }
}
export default Review
