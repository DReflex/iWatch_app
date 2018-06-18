import React from "react";
import { connect } from 'react-redux';
import '../styles/landing/features.scss';
import '../styles/landing/plan.scss';

class Plan extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="plan">
      <div className="heading fade-in-animation">
      <h1>Easy Pricing Plans</h1>
      <p>Lorem ipsum dolor sit. Incidunt laborum beatae earum nihil odio consequatur officiis
      tempore consequuntur officia ducimus unde doloribus quod unt repell</p>
      </div>
      <div className="plan-cards">
      <div className="card animation-down">
      <i className="fab fa-foursquare"></i>
      <h3>Starter plan</h3>
      <h2>Free</h2>
      <p>Consectetur adipiscing
      Nunc luctus nulla et tellus
      Suspendisse quis metus
      Vestibul varius fermentum erat
      </p>
      <button className="btn btn-success" type="button" name="button">Buy Now</button>
      </div>
      <div className="card card-mid animation-down">
      <i className="fas fa-users"></i>
      <h3>Popular Plan</h3>
      <h2>$ 3.99</h2>
      <p>Consectetur adipiscing
      Nunc luctus nulla et tellus
      Suspendisse quis metus
      Vestibul varius fermentum erat
      </p>
      <button className="btn btn-success" type="button" name="button">Buy Now</button>

      </div>
      <div className="card animation-down">
      <i className="fas fa-crosshairs"></i>
      <h3>Premium Plan</h3>
      <h2>$ 9.99</h2>
      <p>Consectetur adipiscing
      Nunc luctus nulla et tellus
      Suspendisse quis metus
      Vestibul varius fermentum erat
      </p>
      <button className="btn btn-success" type="button" name="button">Buy Now</button>
      </div>
      </div>
      </div>
    )
  }
}
export default Plan
