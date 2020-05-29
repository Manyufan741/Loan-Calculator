window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let currentInput = getCurrentUIValues();
  //console.log(currentInput);
  if (!currentInput['amount'] || currentInput['amount'] === 0){
    document.getElementById("loan-amount").value = 1000000;
  }
  if (!currentInput['years'] || currentInput['years'] === 0){
    document.getElementById("loan-years").value = 30;
  }
  if (!currentInput['rate'] || currentInput['rate'] === 0){
    document.getElementById("loan-rate").value = 0.036;
  }
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentInput = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(currentInput);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayment = 0;
  monthlyPayment = (values['amount']*values['rate']/12)/(1-(1+values['rate']/12)**(-(values['years']*12)));
  console.log("monthly payment", monthlyPayment);
  return monthlyPayment.toFixed(2).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let calculatedMonthly = document.querySelector('#monthly-payment');
  calculatedMonthly.innerText = monthly;
}
