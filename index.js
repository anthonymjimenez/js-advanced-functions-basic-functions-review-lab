// Your code here
const saturdayFun = (activity='roller-skate') => 
    `This Saturday, I want to ${activity}!`
    
const mondayWork =  (activity='go to the office') => 
    `This Monday, I will ${activity}.`

const wrapAdjective = (opr="*") =>
        (str = 'special') => `You are ${opr}${str}${opr}!` 

const Calculator = {
    add: (x,y) => x+y,
    subtract: (x,y) => x-y,
    multiply: (x,y) => x*y,
    divide: (x,y) => x/y
 }

const actionApplyer = (startInt, arrayOfCallbacks) => {
     if(arrayOfCallbacks.length !== 0) arrayOfCallbacks.forEach(callback => startInt = callback(startInt)) 
     return startInt
}
