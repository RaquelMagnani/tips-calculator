let totalBillValue = document.getElementById('bill-total');
let peopleTotal = document.getElementById('people-total');
let tipPerson = document.getElementById('tip-person');
let billPerson = document.getElementById('bill-person');
let btnCustom = document.querySelector('button');

function calculateTiptotal(selected) {
  return parseInt(totalBillValue.value) * parseFloat(selected.value);
}
btnCustom.addEventListener('click', (event) => {
  event.preventDefault();
  let selected = document.querySelector('input[type=radio][name=tip]:checked');

  tipPerson.innerHTML =
    calculateTiptotal(selected) / parseInt(peopleTotal.value);
  billPerson.innerHTML =
    (parseInt(totalBillValue.value) + calculateTiptotal(selected)) /
    parseInt(peopleTotal.value);
});
