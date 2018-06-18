export const mouseDown = (mouse_down) =>{
  return {
    type:"CLICK",
    mouse_down
  }
}
export const clear = (clear) => {
  return{
    type:"CLEAR",
    clear
  }
}
export const xThrottle = (throttle) =>{
  return{
    type: "THROTTLE",
    throttle
  }
}
export const xStart = (num) => {
  return{
    type:"START",
    num
  }
}
export const xCurrent = (num) =>{
  return{
    type:"CURRENT",
    num
  }
}
export const counter = (num) =>{
  return{
    type:"COUNT",
    num
  }
}
export const width = (num) =>{
  return{
    type:"WIDTH",
    num
  }
}
