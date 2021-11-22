const calc = document.getElementById("mainblock")
const display = document.getElementById("display")
const calcButtonResult = document.getElementById("calcresbtn")

// console.log(calc, display, calcButtonResult)

function onNumberButtonClick(ev) {
   var element = ev.target
   if (element.classList.contains("nmbbtn")) {
      display.innerText += element.innerText;
   }
}

calc.addEventListener("click", onNumberButtonClick)