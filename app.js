const billInput = document.querySelector('#bill');
const tipButtons = document.querySelectorAll('.button');
const customTip = document.querySelector('#custom-tip');
const numPeopleInput = document.querySelector('#total-people');
const resetButton = document.querySelector('#reset-button');
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

tipButtons.forEach(button => {
  button.addEventListener('click', activeButton);
});

resetButton.addEventListener('click', () => {
  reset();
});

function activeButton(e) {
  tipButtons.forEach(button => {
    button.classList.remove('active-button');
    if (e.target.innerHTML == button.innerHTML) {
      if (e.target.id !== "reset-button") {
        button.classList.add('active-button');
      }
      percentage = parseFloat(button.innerHTML) / 100
    }
  });
  if (billInputVal !== "") {
    calculateTotal();
  }
  customTip.addEventListener('input', () => {
    percentage = parseFloat(customTip.value) / 100;
    calculateTotal();
  });
}

function reset() {
  billInputVal = "";
  billInput.value = "";
  numPeopleInput.value = "";
  numPeopleInputVal = 1;
  customTip.value = "";
  percentage = 0.15;
  tipAmountOutput.textContent = "$0.00";
  totalTipAmountOutput.textContent = "$0.00";
  tipButtons.forEach(button => {
    button.classList.remove('active-button');
  })
  tipButtons[2].classList.add('active-button');
}

// //Add "click" listener to every #button
// tipButtons.classList.add('active-button')
// tipButtons.classList.remove('active-button')
// tipButtons.classList.toggle('active-button')






//"input" event is an event that happens anytime the content of the input changes. 
//value property sets or returns the value of an attribute. 
//forEach() calls a function for each element in array
//parseFloat()
// backticks and $ {}  equal template literal and placeholder for any expression, like math expression {2*3} but in this case const variable {tipAmount}
//toFixed() returns a string representation of an object tand has specified number of digits after the decimal place. .toFixed(2) represents two decimal places
//textContent property represent the text content of the node and its descendants.