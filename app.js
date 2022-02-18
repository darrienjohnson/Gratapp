const billInput = document.querySelector('#bill');
const tipButtons = document.querySelectorAll('.button');
const customTip = document.querySelector('.tip-percentage');
const numPeopleInput = document.querySelector('#total-people');
const resetButton = document.querySelector('.reset-button');
const tipAmountOutput = document.querySelector('#amountOutput');
const totalTipAmountOutput = document.querySelector('#totalOutput');

let billInputVal = '';
let numPeopleInputVal = 1;
let percentage = 0.15;

billInput.addEventListener('input', () => {
  billInputVal = billInput.value;
  calculateTotal()
})

numPeopleInput.addEventListener("input", () => {
  numPeopleInputVal = numPeopleInput.value;
  calculateTotal()
});

function calculateTotal() {
  if (numPeopleInputVal >= 1) {
    let tipAmount = (billInputVal * percentage) / numPeopleInputVal;
    let total = (billInputVal / numPeopleInputVal) + tipAmount;
    tipAmountOutput.textContent = `${tipAmount.toFixed(2)}`;
    totalTipAmountOutput.textContent = `${total.toFixed(2)}`;
  }
}


  
//"input" event is an event that happens anytime the content of the input changes. 
//value property sets or returns the value of an attribute. 
//forEach() calls a function for each element in array
//parseFloat()
// backticks and $ {}  equal template literal and placeholder for any expression, like math expression {2*3} but in this case const variable {tipAmount}
//toFixed() returns a string representation of an object tand has specified number of digits after the decimal place. .toFixed(2) represents two decimal places
//textContent property represent the text content of the node and its descendants.