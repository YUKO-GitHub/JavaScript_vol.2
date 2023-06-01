let calcResult = document.getElementById("calc-result");
let doneCalc = false;

function acClick() {
  calcResult.value = "0";
  doneCalc = false;
  
}

function lastClick(){
  return ["+","-","*","/","."].includes(calcResult.value.toString().slice(-1));
}

function numberClick(val) {
  if (doneCalc) {
    calcResult.value = "0";
  }
  doneCalc = false;
  
  
  if(calcResult.value =="0" && val == "0"){
    calcResult.value = "0";
    
  } else if(calcResult.value == "0" && val == "00") {
    calcResult.value = "0";
    
  } else if(calcResult.value == "0" && val == "."){
    calcResult.value = "0.";
    
  } else if(calcResult.value == "0"){
    calcResult.value = val;
    
  } else {
    calcResult.value += val;
  }
}

function calcClick(val){
  if(lastClick()) {
    calcResult.value = calcResult.value.slice(0, -1) + val;
  } else {
    calcResult.value += val;
  }
  doneCalc = false;
}

function equalClick(){
  if(lastClick()) {
    calcResult.value = calcResult.value.slice(0, -1);
  }
  calcResult.value = new Function( "return " + calcResult.value)();
  doneCalc = true;
  
}
