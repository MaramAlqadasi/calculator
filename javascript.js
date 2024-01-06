let entries=[];

const input=document.querySelector("#input");
const btn=document.querySelectorAll(".btn");

function getBtnValue(e){
    input.value=this.value;

    console.log(this.value);
 
}
btn.forEach(element => {element.addEventListener('click',getBtnValue)
   
    
});

function insertEntries(entry){
    console.log(entries.length);
   entries[entries.length]+=entry;
   return entries;
   

}
insertEntries(1);

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
    return(num1/num2);
}
function mod(num1,num2){
    return(num1%num2);
}
console.log(insertEntries("l"));
