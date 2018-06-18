import React from "react";
import { connect } from 'react-redux';
import '../styles/landing/contact.scss';


class Contact extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div className="contact">
          <div className="iWatch">
            <div className="iLogo">
              <p className="logo ip">i</p>
              <p className="logo watch">Watch</p>
            </div>
            <p className="contact-p">Lorem ipsum dolor sit. Incidunt laborum beatae earum nihil odio consequatur officiis tempore consequuntur officia ducimus unde doloribus quod unt repell</p>
          </div>
          <div className="contactUS">
              <h1>Contact Us</h1>
              <p className="contact-p">Lorem ipsum dolor sit. Incidunt laborum beatae earum nihil odio consequatur officiis tempore consequuntur officia ducimus unde doloribus quod unt repell</p>
              <a href="#">contact.us@domain.com</a>
          </div>
        </div>
          <div className="copyrights">
            <p className="contact-p">Copyright © All Rights Reserved. Made with <i className="fas fa-heart"></i>  by <a href="#">Reflex V</a></p>
          </div>
      </div>
    )
  }
}
export default Contact;
