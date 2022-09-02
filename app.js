document.getElementById('btn-5').addEventListener('click', tip5);
document.getElementById('btn-10').addEventListener('click', tip10);
document.getElementById('btn-15').addEventListener('click', tip15);
document.getElementById('btn-25').addEventListener('click', tip25);
document.getElementById('btn-50').addEventListener('click', tip50);
document.getElementById('btn-custom').addEventListener('click', porPessoa);

let totalBillValue = document.getElementById('bill-total');
let pplTotal = document.getElementById('ppl-total');
let tipTotal = document.getElementById('tip-total');
let tipPerson = document.getElementById('tip-person');

function tip5(event) {
  event.preventDefault();
  tipTotal.innerHTML = parseInt(totalBillValue.value) * 0.05;
}
function tip10(event) {
  event.preventDefault();
  tipTotal.innerHTML = parseInt(totalBillValue.value) * 0.1;
}
function tip15(event) {
  event.preventDefault();
  tipTotal.innerHTML = parseInt(totalBillValue.value) * 0.15;
}
function tip25(event) {
  event.preventDefault();
  tipTotal.innerHTML = parseInt(totalBillValue.value) * 0.25;
}
function tip50(event) {
  event.preventDefault();
  tipTotal.innerHTML = parseInt(totalBillValue.value) * 0.5;
}

function porPessoa(event) {
  event.preventDefault();
  tipPerson.innerHTML = tipTotal.innerHTML / parseInt(pplTotal.value);
}
