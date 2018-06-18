const stateInit ={
mouseCheck: Boolean,
supFun: Boolean,
clickCheck: Boolean,
counterInt: Number,
xStart: Number,
xMove :Number,


}
const Test = (state = stateInit, action)=>{
  switch(action.type){
    case "START":
    return{
      ...state,
      xStart: action.xStart
    }
    case "MOVE":
    return{
      ...state,
      xMove: action.xMove
    }
    case "NUM":
    return{
      ...state,
      counterInt: action.num
    }
    case "CLICK":
    return{
      ...state,
      clickCheck: action.click
    }
    case "SUPER":
    return{
      ...state,
      supFun:action.supFun
    }
    case "CHECK":
    return{
      ...state,
      mouseCheck: action.check
    }
    default:
    return state


  }
}
export default Test
