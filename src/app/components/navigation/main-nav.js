import React from 'react';
import '../styles/navigation/main_nav.scss';

class Main_nav extends React.Component{
 
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
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/test">Test</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nothing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nothing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nothing</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Main_nav
