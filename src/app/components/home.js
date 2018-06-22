import React from 'react';
import Landing from './landing/landing';
import Slider from './landing/slider';
import Features from './landing/features';
import Design from './landing/design';
import Awesome from './landing/awesome';
import Plan from './landing/plan';
import Background2 from './landing/background2';
import Contact from './landing/contact';

import "./home.scss";




class Home extends React.Component{

  constructor(){
    super();
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    this.handleScroll();
    document.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount(){
    document.removeEventListener("scroll", this.handleScroll)
  }
  handleScroll(e){
    let id = document.getElementById("nav");
    let scroll =window.pageYOffset;
    if(scroll > 0){
      id.style.background = "#FFF";
      id.style.padding = "0 65px";
    }
    else{
      id.style.background = "#F3F3F3";
      id.style.padding = "15px 65px";
    }

    var fade_in_elements = document.getElementsByClassName("fade-in-animation")
    var translate_left_elements = document.getElementsByClassName("animation-translate-left")
    var translate_right_elements = document.getElementsByClassName("animation-translate-right")
    var fade_down_elements = document.getElementsByClassName("animation-down")



    var window_height = window.innerHeight;
    var window_top_position = window.pageYOffset;
    var window_bottom_position = (window_top_position + window_height);


    var scrollFunctionIn = (arr) => {
      var checkElement = ($element) =>{

        var element_height = $element.offsetHeight;
        var element_top_position = $element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $element.classList.add('landing-animation');
        } else {
          $element.classList.remove('landing-animation');
        }
      }

      for (var i = 0; i < arr.length; i++) {
        checkElement(arr[i])
      }
    }
    var scrollFunctionLeft = (arr) => {
      var checkElement = ($element) =>{

        var element_height = $element.offsetHeight;
        var element_top_position = $element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $element.classList.add('animation-left');
        } else {
          $element.classList.remove('animation-left');
        }
      }

      for (var i = 0; i < arr.length; i++) {
        checkElement(arr[i])
      }
    }
    var scrollFunctionRight = (arr) => {
      var checkElement = ($element) =>{

        var element_height = $element.offsetHeight;
        var element_top_position = $element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $element.classList.add('animation-right');
        } else {
          $element.classList.remove('animation-right');
        }
      }

      for (var i = 0; i < arr.length; i++) {
        checkElement(arr[i])
      }
    }
    var scrollFunctionDown = (arr) => {
      var checkElement = ($element) =>{

        var element_height = $element.offsetHeight;
        var element_top_position = $element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $element.classList.add('animation-fade-down');
        } else {
          $element.classList.remove('animation-fade-down');
        }
      }

      for (var i = 0; i < arr.length; i++) {
        checkElement(arr[i])
      }
    }
    scrollFunctionIn(fade_in_elements);
    scrollFunctionLeft(translate_left_elements);
    scrollFunctionRight(translate_right_elements);
    scrollFunctionDown(fade_down_elements);


  }
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
