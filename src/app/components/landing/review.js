import React from "react";
import { connect } from 'react-redux';
import { review_width, functionFlag, stopFunction, mouse, screenStart, screenCurrent, counter } from '../../../actions/review'
import '../styles/landing/review.scss';

class Review extends React.Component{
  constructor(){
    super();
    this.review = this.review.bind(this);
    this.sliderFunction = this.sliderFunction.bind(this);
    this.handleDown= this.handleDown.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleMoveUp = this.handleMoveUp.bind(this);
  }
  componentDidMount(){
    this.review();
    this.sliderFunction();
    this.props.dispatch(functionFlag(false));
    this.props.dispatch(stopFunction(false));
    this.props.dispatch(mouse(false));
    setTimeout(this.review, 1000)
  }
  handleDown(e, type){
    e.preventDefault();
    if(type === "up"){
      this.props.dispatch(mouse(false))
      this.handleMoveUp();
      setTimeout(()=> {
        this.props.dispatch(stopFunction(false))
        if(!this.props.functionFlag && !this.props.mouseClick){
          this.sliderFunction();
        }

      }, 5000)
      document.getElementById("slideR").style.transition = "1s all"
    }else{
      this.props.dispatch(stopFunction(true))
      this.props.dispatch(screenStart(e.screenX))
      this.props.dispatch(mouse(true))
      document.getElementById("slideR").style.transition = "0s"
    }
  }
  handleMoveUp(){
    let item_width = this.props.review_width

    let initCounter = this.props.counter -1

    let xMove = this.props.screenCurrent - this.props.screenStart

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
    var transformValues=[0, -this.props.review_width, -(this.props.review_width *2)]
    var transformTo = getClosest(currentValue, transformValues);
    // console.log("struggle", transformTo);
    if(currentValue > 60){
      // console.log("30", currentValue);
      document.getElementById("slideR").style.transform = "translate3d(0px, 0px, 0px)"
    }
    else if(currentValue < -(this.props.review_width * 2)){
      // console.log("720");
      document.getElementById("slideR").style.transform = "translate3d(-"+ (this.props.review_width * 2) +", 0px, 0px)"
    }else{
     document.getElementById("slideR").style.transform= "translate3d(" + transformTo + "px, 0px, 0px)"
    }

  }
  handleMove(e){
    e.preventDefault()
    if(this.props.mouseClick){
      let item_width = this.props.review_width;

      let initCounter =((this.props.counter === 0)? this.props.counter : (this.props.counter -1));
      // put this vars in state
        this.props.dispatch(screenCurrent(e.screenX))
        let xMove = this.props.screenCurrent - this.props.screenStart
        let currentMove = -(item_width * initCounter)
        let moveTo = (currentMove + xMove)
        if(moveTo > 50){
          document.getElementById("slideR").style.transform = "translate3d( 40px, 0, 0)" ;

        }
        else if(moveTo < -((item_width*2) + 100)){
          document.getElementById("slideR").style.transform = "translate3d(-"+ (item_width*2 )+", 0, 0)" ;

        }else {

          document.getElementById("slideR").style.transform = "translate3d( "+ moveTo + "px"+ ", 0, 0)" ;
        }
        // console.log(currentMove, xMove);


    }

  }
  handleTouch(e){
    // console.log(e.screenX);
  }
  review(){
  let itemWidth;
  if(document.body.clientWidth > 720){
    itemWidth = document.body.clientWidth * 0.6
  }else {
    itemWidth = document.body.clientWidth
    console.log(itemWidth);
  }
  this.props.dispatch(review_width(itemWidth))
  }
  sliderFunction(){
    this.props.dispatch(functionFlag(true))
    var id = document.getElementById("slideR")
    let item_width = this.props.review_width
    var mover = () =>{
      var initCounter =this.props.counter;
      if(this.props.stopFunction){
        clearInterval(myInterval)

        setTimeout(()=>{this.props.dispatch(functionFlag(false))},1000);
      }
      else{
        if(initCounter === 3){
          this.props.dispatch(counter(0))
        }else{

          //create slider here
          let tStr = "translate3d( -" + item_width * initCounter + "px, 0, 0)"
          document.getElementById("slideR").style.transform = tStr
          this.props.dispatch(counter (initCounter +1))
        }
      }
    }
    var myInterval = setInterval(mover, 2000);

  }
  render(){
    return(
      <div style={{width:this.props.review_width}} className="review">
        <div onPointerMove={(e) =>this.handleTouch(e)} onMouseMove={(e) => this.handleMove(e)} onMouseUp={(e)=> this.handleDown(e, "up")}  onMouseDown={(e) => this.handleDown(e)} id="slideR" className="review-c">
          <div style={{width:this.props.review_width}} className="single-r">
            <img src="http://www.m2mglobal.sg/wp-content/uploads/2015/06/avatar11.jpg" alt="" />
            <p>Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus malesuada mi.</p>
            <h3>Alex Datillo</h3>
            <h3>President of Lorem</h3>
          </div>
          <div style={{width:this.props.review_width}} className="single-r">
            <img src="http://www.m2mglobal.sg/wp-content/uploads/2015/06/avatar11.jpg" alt="" />
            <p>Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus malesuada mi.</p>
            <h3>Alex Datillo</h3>
            <h3>CEO of UBM</h3>
          </div>
          <div style={{width:this.props.review_width}} className="single-r">
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
const store = (store) =>{
  return{
    review_width: store.Review.review_width,
    functionFlag: store.Review.functionFlag,
    stopFunction: store.Review.stopFunction,
    mouseClick: store.Review.mouseClick,
    screenStart: store.Review.screenStart,
    screenCurrent:store.Review.screenCurrent,
    counter:store.Review.counter,
  }
}
Review = connect(store)(Review)
export default Review
