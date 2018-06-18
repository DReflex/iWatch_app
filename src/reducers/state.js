const stateInit ={
  mouse:Boolean,
  counter:0,
  item_width:0,
  clear:Boolean,
  xStart:0,
  xCurrent:0,
  throttle_flag:Boolean,


}
const Watch = (state = stateInit, action)=>{
  switch(action.type){
    case "CHECK":
    return{
      ...state,
      test:action.bol
    }
    case "CLICK":
    return{
      ...state,
      mouse: action.mouse_down
    }
    case "THROTTLE":
      return{
        ...state,
        throttle_flag: action.throttle
      }

    case "CLEAR":
    return{
      ...state,
      clear: action.clear
    }
    case "START":
    return{
      ...state,
      xStart:action.num
    }
    case "CURRENT":
    return{
      ...state,
      xCurrent:action.num
    }
    case "COUNT":
    return{
      ...state,
      counter: action.num
    }
    case "WIDTH":
    return{
      ...state,
      item_width: action.num
    }
    default:
    return state


  }
}
export default Watch
