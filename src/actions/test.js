export const checker = (check) =>{
  return{
    type:"CHECK",
    check
  }
}
export const xMan = (xStart) =>{
  return{
    type:"START",
    xStart
  }
}
export const mover = (xMove) => {
  return{
    type:"MOVE",
    xMove
  }
}
export const counterPick =(num) =>{
  return{
    type:"NUM",
    num
  }
}
export const clickerology = (click) =>{
  return{
    type:"CLICK",
    click
  }
}
export const superology = (supFun) => {
  return{
    type: "SUPER",
    supFun
  }
}
