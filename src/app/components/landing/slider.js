import React from 'react';
import { connect } from 'react-redux';



import { mouseDown, clear, xCurrent, xStart, counter, width, xThrottle } from '../../../actions/index'
import '../styles/landing/slider.scss';

class Slider extends React.Component{
  constructor(){
    super();
    this.item_width = this.item_width.bind(this);
    this.slider = this.slider.bind(this);
    this.handleDown= this.handleDown.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleMoveUp = this.handleMoveUp.bind(this);
  }
  componentDidMount(){
    this.item_width();
    this.slider();
    this.props.dispatch(xThrottle(false))
    this.props.dispatch(mouseDown(false))
    this.props.dispatch(clear(false))

  }

  handleDown(e, type){
    // create function to start and stop intervals
    e.preventDefault()
    //console.log(this.props.mouse);
    if(type === "up"){
      console.log("time starts up", this.props.clear);
      this.props.dispatch(mouseDown(false))
      this.handleMoveUp();
      setTimeout(()=> {
        this.props.dispatch(clear(false))
        if(!this.props.throttle_flag && !this.props.mouse){
          this.slider();
        }

      }, 5000)
      document.getElementById("slider-transform").style.transition = "1s all"
    }else{
      this.props.dispatch(clear(true))
      this.props.dispatch(xStart(e.screenX))
      this.props.dispatch(mouseDown(true))
      document.getElementById("slider-transform").style.transition = "0s"
    }
  }
  handleMoveUp(){
    let item_width = this.props.item_width

    let initCounter = this.props.counter -1

    let xMove = this.props.xCurrent - this.props.xStart

    let currentMove = -(item_width * initCounter)
    let currentValue= currentMove + xMove

    //function that fixes position
    //get the current position of translate3d
    var getClosest = (num, arr)=>{
      var test = arr[0];
      var diff = Math.abs (num - test);
      var moveToInt = 0
      for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            test = arr[val];
            moveToInt = val
        }
    }
    this.props.dispatch(counter(moveToInt))
    return test
  }
    //split to get rid of num 3d then replace non num and devide because last 2 numbers are 2 0 vlues in 3d
    var transformValues=[0, -240, -480, -720]
    var transformTo = getClosest(currentValue, transformValues);
    console.log("struggle", transformTo);
    if(currentValue > 30){
      // console.log("30", currentValue);
      document.getElementById("slider-transform").style.transform = "translate3d(0px, 0px, 0px)"
    }
    else if(currentValue < -720){
      // console.log("720");
      document.getElementById("slider-transform").style.transform = "translate3d(-720px, 0px, 0px)"
    }else{
      console.log("wtf if this doesnt move");
     document.getElementById("slider-transform").style.transform= "translate3d(" + transformTo + "px, 0px, 0px)"
    }



  // console.log("closest", getClosest(currentValue, transformValues));
  }

  handleMove(e){
    e.preventDefault()
    if(this.props.mouse){
      let item_width = this.props.item_width;

      let initCounter =((this.props.counter === 0)? this.props.counter : (this.props.counter -1));
      // put this vars in state
      console.log("this is new initCounter",initCounter);
        this.props.dispatch(xCurrent(e.screenX))
        let xMove = this.props.xCurrent - this.props.xStart
        let currentMove = -(item_width * initCounter)
        let moveTo = (currentMove + xMove)
        if(moveTo > 50){
          document.getElementById("slider-transform").style.transform = "translate3d( 40px, 0, 0)" ;

        }
        else if(moveTo < -800){
          document.getElementById("slider-transform").style.transform = "translate3d( -800px, 0, 0)" ;

        }else {

          document.getElementById("slider-transform").style.transform = "translate3d( "+ moveTo + "px"+ ", 0, 0)" ;
        }
        // console.log(currentMove, xMove);


    }

  }

  slider(){
    console.log("slider is called");
    this.props.dispatch(xThrottle(true))
      let id = document.getElementById("slider-transform")
      let item_width = this.props.item_width

      var moveSlider = () =>{
       var counterStrike =this.props.counter;
        if(this.props.clear){
          clearInterval(myInterval)

          setTimeout(()=>{this.props.dispatch(xThrottle(false))},1000);
        }else{
          if(counterStrike === 4){
            this.props.dispatch(counter(0))
          }else{

            console.log("counter logger", counterStrike);
            //create slider here
            let tStr = "translate3d( -" + item_width * counterStrike + "px, 0, 0)"
            document.getElementById("slider-transform").style.transform = tStr
            this.props.dispatch(counter (counterStrike +1))
          }
        }
      }

      var myInterval = setInterval(moveSlider, 2000);

  }
  item_width(){
    var items = document.getElementsByClassName('items')
    var itemCount = items.length;
    var itemLength =items[0].clientWidth;
    let window_width = document.body.clientWidth;
    let item_width = window_width / 5;
    this.props.dispatch(width(item_width))
    this.props.dispatch(counter(0))

    console.log(window_width, item_width);
    console.log(items, itemLength);
  }

  render(){
    let items = ["https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png", "https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png","https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_500/v1/Global/Strategic%20Alliance/verizonpage3.png",]
    let window_width = document.body.clientWidth;
    let item_width = window_width / 5;
    let height = window.innerHeight;
    //dynamic width

  return(
    <div className="slider">
      <div onMouseMove={(e) => this.handleMove(e)} onMouseUp={(e)=> this.handleDown(e, "up")} onMouseDown={(e) => this.handleDown(e)} id="slider-transform" className="slider-content">
          {items.map((item, i) =>
            <div key={i} style={{width: item_width}} className="items">
              <img className="logo-img" src={item} alt="2" />
            </div>
          )}


      </div>

    </div>
  )
 }
}
const store = (store) =>{
  return{
    counter: store.Watch.counter,
    item_width:store.Watch.item_width,
    mouse:store.Watch.mouse,
    clear:store.Watch.clear,
    xCurrent: store.Watch.xCurrent,
    xStart: store.Watch.xStart,
    throttle_flag: store.Watch.throttle_flag
  }
}
Slider = connect(store)(Slider)
export default Slider
