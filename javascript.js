
let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const buttons=document.querySelectorAll(".btn");
const display = document.querySelector('#input');


function updateDisplay() {
    display.value = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}

updateDisplay();

function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('number')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operation')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equal')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('dot')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('percent')) {
                inputPercent(displayValue);
                updateDisplay();
            } else if(buttons[i].classList.contains('sign')) {
                inputSign(displayValue);
                updateDisplay();
            } else if(buttons[i].classList.contains('clear')){
                clearDisplay();
                updateDisplay();
            } else if(buttons[i].classList.contains('erase')){
                erase(displayValue);
                updateDisplay();
            }
                
        }

    )}
}

clickButton();

function inputOperand(operand) {
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            //1st click - handles first operand input
            displayValue = operand;
        } else if(displayValue === firstOperand) {
            //starts new operation after inputEquals()
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        //3rd/5th click - inputs to secondOperand
        if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputOperator(operator) {
    if(firstOperator != null && secondOperator === null) {
        //4th click - handles input of second operator
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else if(firstOperator != null && secondOperator != null) {
        //6th click - new secondOperator
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else { 
        //2nd click - handles first operator input
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals() {
    //hitting equals doesn't display undefined before operate()
    if(firstOperator === null) {
        displayValue = displayValue;
    }else if(result==='wrong division'){
        displayValue=0;

    } else if(secondOperator != null) {
        //handles final result
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        if(result === 'wrong division') {
            displayValue = 'wrong division';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        //handles first operation
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        if(result === 'wrong division') {
            displayValue = 'wrong division';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
        
    }
}

function inputDecimal(dot) {
    if(displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += dot;
    } else if(!displayValue.includes(dot)) {
        displayValue += dot;
    } 
}

function inputPercent(num) {
    displayValue = (num/100).toString();
}

function inputSign(num) {
    displayValue = (num * -1).toString();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function inputBackspace() {
    if(firstOperand != null) {
        firstOperand = null;
        updateDisplay();
    }
}

function operate(x, y, op) {
    if(op === '+') {
        return x + y;
    } else if(op === '-') {
        return x - y;
    } else if(op === '*') {
        return x * y;
    } else if(op === '/') {
        if(y === 0) {
            return 'wrong division';
        } else {
        return x / y;
        }
    }
}
function erase(inputs){
    displayValue=inputs.substring(0,inputs.length-1)
    return  displayValue;
}
function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
// btn.forEach(element => {element.addEventListener('click',getBtnValue)
   
    
// });
// operation.forEach(element => {element.addEventListener("click",chooseOperation)});
// function chooseOperation(e){
//     for (let index = 0; index < input.length; index++) {
        
        
//     }
    // if(count==0)
    // {
    //     count+=1;
    // entries=input.value;
    // first_num=entries.slice(0,entries.length-1);
    // operator= entries.substr(first_num.length+1,1);
    // console.log("operator is:"+operator);
    // console.log("first is:"+first_num);

    // }
    // // operator=this.value;
    // // console.log("operator is:"+this.value);
    // // count+=1;
    // // // entries=input.value;
    // // // first_num=entries.slice(0,entries.length-1);
    // // // operator= entries.substr(first_num.length+1,1);
    // // // console.log("operator is:"+operator);
    // // // console.log("first is:"+first_num);
    // if(count>=1){
    //    entries=input.value;
    //    console.log("entries mor counts :"+entries);
    //    first_num=entries.slice(0,entries.length-1);

    //     console.log("first length is:"+first_num.length);
    //     second_num=entries.slice(first_num.length+1,entries.length-1);
    //     console.log("second is:"+second_num);
    //     count= 0;
    //     first_num="";
    //     second_num="";
    // }
    
// }
// function mathCall(str_input){
//     let inputs=str_input;

//     console.log("inputs: "+inputs);
//      op_position =inputs.search(/\*|\%|\/|\+|\-/); 
//      if(op_position >0){
//      console.log("op_position: "+op_position); 
//     first_num=Number(inputs.substr(0,op_position));
//     console.log("first_num: "+first_num); 
//     second_num= Number(inputs.substr(op_position+1));
//     console.log("second_num: "+second_num); 
//     switch (inputs.charAt(op_position)) {
//         case "+":
//             input.value=sum(first_num,second_num);
//             entries=input.value;
            
//             break;
//         case "*":
//             input.value=mult(first_num,second_num);
//             entries=input.value;
                
//             break;
//         case "/":
//             input.value=divid(first_num,second_num);
//             entries=input.value;
                
//         break;
//         case "%":
//             input.value=mod(first_num,second_num);
//             entries=input.value;
                
//         break;
    
//         default:
//             break;
//     }
    
//     }
//    return entries;
    


    
// }

// function getBtnValue(e){
  
//     input.value+=this.value;
//     if(this.value=="*" || this.value==="/"||this.value==="+"||this.value==="-"||this.value==="%"||
//     this.value==="="||this.value==="("||this.value===")"){
//    if(input.value.substr(0,input.value.length-2).search(/\*|\%|\/|\+|\-/)>0){
//     if(this.value!=="="){
//         tempOperator=input.value.charAt(input.value.length-1);
//         console.log(" tempOperator:"+tempOperator);
//         entries=input.value.substr(0,input.value.length-1)
//         console.log("entries1: "+entries);
//         entries= mathCall(entries) + tempOperator;
//         input.value= entries ;
//         //input.value=entries;
//         console.log("entries2: "+entries);  
//     //    count=0;
//     }
//     else{
//         entries=input.value.substr(0,input.value.length-1)
//         console.log("entries1: "+entries);
//         entries= mathCall(entries);
//         input.value= entries ;

//     }
// }

    
    


 
//  }
// }

// function insertEntries(entry){
//     console.log(entries.length);
//    entries[entries.length]+=entry;
//    return entries;
   

// }
// insertEntries(1);

// function sum(num1,num2){
//     return(num1+num2);
// }
// function mult(num1,num2){
//     return(num1*num2);
// }
// function subtract(num1,num2){
//     return(num1-num2);
// }
// function divid(num1,num2){
//     let result;
//     if(num2===0){
//         return "undefiend";

//     }
    
//     return(num1/num2);
// }
// function mod(num1,num2){
//     return(num1%num2);
// }
// console.log(insertEntries("l"));
