export const review_width = (width) =>{
  return{
    type:"REVIEW",
    width
  }
}
export const functionFlag = (bool) => {
  return{
    type: "FUNCTION",
    bool
  }
}
export const stopFunction = (bool) => {
  return{
    type: "STOP",
    bool
  }
}
export const mouse = (bool) =>{
  return{
    type:"MOUSE",
    bool
  }
}
export const screenStart = (num) => {
  return{
    type: "XSTART",
    num
  }
}
export const screenCurrent = (num) => {
  return{
    type: "XCURRENT",
    num
  }
}
export const counter = (num) => {
  return{
    type:"COUNTER",
    num
  }
}
