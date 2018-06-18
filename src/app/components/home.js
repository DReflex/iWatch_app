import React from 'react';
import Landing from './landing/landing';
import Slider from './landing/slider';
import Features from './landing/features';
import Design from './landing/design';
import Awesome from './landing/awesome';
import Plan from './landing/plan';
import Background2 from './landing/background2'
import Contact from './landing/contact'





class Home extends React.Component{
  render(){
    return(
      <div id="content">
        <Landing />
        <Slider />
        <Features />
        <Design />
        <Awesome />
        <Plan />
        <Background2 />
        <Contact />
      </div>
    )
  }
}
export default Home
