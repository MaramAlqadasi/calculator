
let count=0;
let entries;
let first_num =0;
let second_num =0;
let tempOperator;
let tempString;
let operator;
let op_position;
let operators=[];
let op;
let temp_operator;;

const input=document.querySelector("#input");
const btn=document.querySelectorAll(".btn");
const operation = document.querySelectorAll(".operation");
const equal=document.querySelector('.opera8');
// equal.addEventListener('click',chooseOperation)


btn.forEach(element => {element.addEventListener('click',getBtnValue)
   
    
});
operation.forEach(element => {element.addEventListener("click",chooseOperation)});
function chooseOperation(e){
    for (let index = 0; index < input.length; index++) {
        
        
    }
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
    
}
function mathCall(str_input){
    let inputs=str_input;

    console.log("inputs: "+inputs);
     op_position =inputs.search(/\*|\%|\/|\+|\-/); 
     if(op_position >0){
     console.log("op_position: "+op_position); 
    first_num=Number(inputs.substr(0,op_position));
    console.log("first_num: "+first_num); 
    second_num= Number(inputs.substr(op_position+1));
    console.log("second_num: "+second_num); 
    switch (inputs.charAt(op_position)) {
        case "+":
            input.value=sum(first_num,second_num);
            entries=input.value;
            
            break;
        case "*":
            input.value=mult(first_num,second_num);
            entries=input.value;
                
            break;
        case "/":
            input.value=divid(first_num,second_num);
            entries=input.value;
                
        break;
        case "%":
            input.value=mod(first_num,second_num);
            entries=input.value;
                
        break;
    
        default:
            break;
    }
    
    }
   return entries;
    


    
}

function getBtnValue(e){
  
    input.value+=this.value;
    if(this.value=="*" || this.value==="/"||this.value==="+"||this.value==="-"||this.value==="%"||
    this.value==="="||this.value==="("||this.value===")"){
   if(input.value.substr(0,input.value.length-2).search(/\*|\%|\/|\+|\-/)>0){
    if(this.value!=="="){
        tempOperator=input.value.charAt(input.value.length-1);
        console.log(" tempOperator:"+tempOperator);
        entries=input.value.substr(0,input.value.length-1)
        console.log("entries1: "+entries);
        entries= mathCall(entries) + tempOperator;
        input.value= entries ;
        //input.value=entries;
        console.log("entries2: "+entries);  
    //    count=0;
    }
    else{
        entries=input.value.substr(0,input.value.length-1)
        console.log("entries1: "+entries);
        entries= mathCall(entries);
        input.value= entries ;

    }
}

    
    


 
 }
}

// function insertEntries(entry){
//     console.log(entries.length);
//    entries[entries.length]+=entry;
//    return entries;
   

// }
// insertEntries(1);

function sum(num1,num2){
    return(num1+num2);
}
function mult(num1,num2){
    return(num1*num2);
}
function subtract(num1,num2){
    return(num1-num2);
}
function divid(num1,num2){
    let result;
    if(num2===0){
        return "undefiend";

    }
    
    return(num1/num2);
}
function mod(num1,num2){
    return(num1%num2);
}
// console.log(insertEntries("l"));
