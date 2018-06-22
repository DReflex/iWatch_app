import React from 'react';
import '../styles/navigation/main_nav.scss';

class Main_nav extends React.Component{
  // constructor(){
  //   super();
  //   this.handleScroll = this.handleScroll.bind(this)
  // }
  // componentDidMount(){
  //   this.handleScroll();
  //   document.addEventListener("scroll", this.handleScroll)
  // }
  // componentWillUnmount(){
  //   document.removeEventListener("scroll", this.handleScroll)
  // }
  // handleScroll(e){
  //   console.log("scrolling");
  //   console.log(document.getElementsByClassName("fade-in-animation"));
  //   let id = document.getElementById("nav");
  //   let scroll =window.pageYOffset;
  //   if(scroll > 0){
  //     id.style.background = "#FFF";
  //     id.style.padding = "0 65px";
  //   }
  //   else{
  //     id.style.background = "#F3F3F3";
  //     id.style.padding = "15px 65px";
  //   }
  // }
  render(){
    return(
      <div >
        <nav id="nav" className="navbar navbar-expand-md navbar-light fixed-top">
          <a className="navbar-brand" href="#">
            <p className="logo ip">i</p>
            <p className="logo watch">Watch</p>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Main_nav
