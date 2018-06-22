const stateInit ={
review_width:Number,
functionFlag: Boolean,
stopFunction: Boolean,
mouseClick: Boolean,
screenStart: Number,
screenCurrent:Number,
counter:Number,
}
const Review = (state = stateInit, action)=>{
  switch(action.type){
    case "REVIEW":
    return{
      ...state,
      review_width:action.width
    }
    case "FUNCTION":
    return{
      ...state,
      functionFlag: action.bool
    }
    case "STOP":
    return{
      ...state,
      stopFunction: action.bool
    }
    case "MOUSE":
    return{
      ...state,
      mouseClick: action.bool
    }
    case "XSTART":
    return{
      ...state,
      screenStart: action.num
    }
    case "XCURRENT":
    return{
      ...state,
      screenCurrent: action.num
    }
    case "COUNTER":
    return{
      ...state,
      counter: action.num
    }
    default:
    return state


  }
}
export default Review
