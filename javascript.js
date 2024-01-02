let entries=[];

const entries_box=document.getElementById("#entries");
const btn=document.querySelectorAll(".btn");

function getBtnValue(e){

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
