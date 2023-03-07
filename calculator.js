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
  const initValue = { amount:20000, years: 20, rate: 2.5 };
  let amount = document.querySelector('#loan-amount');
  let years = document.querySelector('#loan-years');
  let rate = document.querySelector('#loan-rate');
  amount.value = initValue.amount;
  years.value = initValue.years;
  rate.value = initValue.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthly = (values.rate / 100) / 12;
  let x = Math.floor(values.years * 12);
  if(values===0){
    return 0.00;
  }
  return (
    (monthly * values.amount) /
    (1 - Math.pow((1+monthly), -x))
  ).toFixed(2);
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerText = monthly;
}
