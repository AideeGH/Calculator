let display1E1 = document.querySelector(".display-1");
let display2E1 = document.querySelector(".display-2");
let temoResultE1 = document.querySelector(".temp-result");
let numbersE1 = document.querySelectorAll(".number");
let operationE1 = document.querySelectorAll(".operation");
let equalE1 = document.querySelector(".equal");
let clearAllE1 = document.querySelector(".all-clear");
let clearLastE1 = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersE1.forEach( number => {
    number.addEventListener("click", (e)=> {
        if(e.target.innerText === "." && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === "." && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
});

operationE1.forEach( operation => {
    operation.addEventListener("click", (e)=>{
      if(!dis2Num) result; 
      haveDot= false;
      let operationName = e.target.innerText;
      if(dis1Num && dis2Num && lastOperation){
        mathOperation();
      }else{
        result = parseFloat(dis2Num);
      }
      claerVar(operationName);
      lastOperation = operationName;
      console.log(result);
    })
});

function claerVar(name = ""){
    dis1Num += dis2Num+ " " + name + " ";
    display1E1.innerText = dis1Num;
    display2E1.innerText = " ";
    dis2Num = " ";
    temoResultE1.innerText = result;
}

function mathOperation(){
    if(lastOperation === "*"){
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if(lastOperation === "+"){
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if(lastOperation === "-"){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if(lastOperation === "/"){
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if(lastOperation === "%"){
        result = parseFloat(result) % parseFloat(dis2Num);   

    }
}

equalE1.addEventListener("click", (e)=> {
    if( !dis2Num || !dis1Num ) return;
    haveDot = false;
    mathOperation();
    claerVar();
    display2E1.innerText = result;
    temoResultE1.innerText = "";
    dis2Num = result;
    dis1Num = "";
});

clearAllE1.addEventListener("click", (e)=> {
    display1E1.innerText = "";
    display2E1.innerText = "";
    dis1Num = "";
    dis2Num = "";
    result = "";
    temoResultE1.innerText = "";
});

clearLastE1.addEventListener("click", (e)=> {
    display2E1.innerText = "";
    dis2Num = "";
})

window.addEventListener("keydown", (e)=>{
    if(
        e.key === "0" || 
        e.key === "1" || 
        e.key === "2" || 
        e.key === "3" || 
        e.key === "4" || 
        e.key === "5" || 
        e.key === "6" || 
        e.key === "7" || 
        e.key === "8" || 
        e.key === "9" || 
        e.key === "."  
    ){
        clickButtonEl(e.key);
    } else if(
        e.key === "*" ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "%" 
    ){
        clickOperation(e.key);
    }else if (e.key == "Enter" || e.key === "="){
        clickEqual();
    }
});

function clickButtonEl(key){
    numbersE1.forEach(button => {
        if(button.innerText === key){
            button.click();
        }
    })
}
function clickOperation(key){
    operationE1.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}

function clickEqual(){
    equalE1.click();
}

