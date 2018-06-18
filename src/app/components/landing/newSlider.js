import React from 'react';
import { connect } from 'react-redux';
import { checker, xMan, counterPick, clickerology, superology, mover } from '../../../actions/test'

import '../styles/landing/slider.scss';


class NewSlider extends React.Component{
  constructor(){
    super();
    this.superFunction = this.superFunction.bind(this),

    this.handleMouse = this.handleMouse.bind(this),
    this.handleMove = this.handleMove.bind(this),
    this.moveEnd = this.moveEnd.bind(this)
  }
  componentDidMount(){
    this.props.dispatch(checker(false))
    setTimeout(()=>this.superFunction(), 100)
    this.props.dispatch(counterPick(1))//soves on load isntat click bug
    this.props.dispatch(clickerology(false))
  }
  superFunction(){
    //this function contains it all;
    var window_width = document.body.clientWidth;

    var item_width = window_width / 5;


    this.props.dispatch(superology(true))
    var logger = () =>{
     var counterStrike =this.props.counterInt;
      if(this.props.test){
        clearInterval(myInterval)

        setTimeout(()=>{this.props.dispatch(superology(false))},1000);
      }else{
        if(counterStrike === 4){
          this.props.dispatch(counterPick(0))
        }else{

          console.log("counter logger", counterStrike);
          //create slider here
          let tStr = "translate3d( -" + item_width * counterStrike + "px, 0, 0)"
          document.getElementById("newSlider").style.transform = tStr
          this.props.dispatch(counterPick (counterStrike +1))
        }
      }
    }

    var myInterval = setInterval(logger, 2000)
    // logger()

  }
  handleMouse(e, type){
    e.preventDefault();
    var id = document.getElementById("newSlider")
    if(type === "up"){
      id.style.transition= "1s"

      this.props.dispatch(clickerology(false))
      // console.log("clickerUp",this.props.clickCheck );
      this.moveEnd();
      setTimeout(()=>{
        this.props.dispatch(checker(false))
        if(!this.props.supFun && !this.props.clickCheck){
          this.superFunction();
        }
      },5000)

    }
    else{
      // console.log("mouseDownClick", this.props.counterInt);
      // console.log("clickerDown",this.props.clickCheck );

      this.props.dispatch(clickerology(true))

      this.props.dispatch(checker(true))
      this.props.dispatch(xMan(e.screenX))
      id.style.transition= "0s"


    }
  }
  moveEnd(){
    let window_width = document.body.clientWidth;
    let item_width = window_width / 5;

    let initCounter = this.props.counterInt -1

    let xMove = this.props.xMove - this.props.xStart

    var currentMove = -(item_width * initCounter)
    let currentValue= currentMove + xMove

    var getClosest = (num, arr)=>{
      var test = arr[0];
      var currentInt = 0;
      var diff = Math.abs(test - num);
      for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            test = arr[val];
            currentInt = val
        }
    }
    this.props.dispatch(counterPick(currentInt))
    return test
  }
    var transformValues=[-0, -240, -480, -720]
    var transformTo = getClosest(currentValue, transformValues);
    if(currentValue > 30){
      // console.log("30", currentValue);
      document.getElementById("newSlider").style.transform = "translate3d(0px, 0px, 0px)"
    }
    else if(currentValue < -720){
      document.getElementById("newSlider").style.transform = "translate3d(-720px, 0px, 0px)"
    }else{
     document.getElementById("newSlider").style.transform= "translate3d(" + transformTo + "px, 0px, 0px)"
    }



  }
  handleMove(e){
    e.preventDefault();
    if(this.props.clickCheck){
      console.log(this.props.clickCheck);
      //mouse down
      //setup item_width
      var window_width = document.body.clientWidth;
      var item_width = window_width / 5;

      var xMove = e.screenX - this.props.xStart;
      this.props.dispatch(mover(e.screenX))
      // console.log("xman", this.props.xStart, "e.screen", e.screenX, "result xmove", xMove, "counter", this.props.counterInt);
      var currentMove = -(item_width* (this.props.counterInt -1));
      var moveTo = currentMove + xMove
      console.log("current move",moveTo);
      if(moveTo > 40){
        console.log("why is this moving");
        document.getElementById("newSlider").style.transform = "translate3d( 30px, 0, 0)" ;
      }
      else if(moveTo < -770){
        document.getElementById("newSlider").style.transform = "translate3d( -770px, 0, 0)" ;
      }
      else{

        document.getElementById("newSlider").style.transform = "translate3d( "+ moveTo + "px"+ ", 0, 0)" ;
      }


    }
  }
  render(){
    let items = ["https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png", "https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png",]
    let window_width = document.body.clientWidth;
    let item_width = window_width / 5;
    let height = window.innerHeight;
    //dynamic width
    return(
      <div style={{"paddingTop": "200px"}}  >
      <div className="slider">
        <div onMouseMove={(e) => {this.handleMove(e)}} onMouseUp={(e)=> this.handleMouse(e, "up")} onMouseDown={(e) => this.handleMouse(e)} id="newSlider" className="slider-content">
            {items.map((item, i) =>
              <div key={i} style={{width: item_width}} className="items">
                <img className="logo-img" src={item} alt="2" />
              </div>
            )}


        </div>

      </div>
      </div>
    )
  }

}
const store = (store) =>{
  return{
    test: store.Test.mouseCheck,
    supFun:store.Test.supFun,
    clickCheck: store.Test.clickCheck,
    counterInt : store.Test.counterInt,
    xStart: store.Test.xStart,
    xMove: store.Test.xMove
  }
}
NewSlider = connect(store)(NewSlider)
export default NewSlider
