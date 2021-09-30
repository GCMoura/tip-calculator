let tipBillInput = document.querySelector('.tip-bill-input')
let numberOfPeopleInput = document.querySelector('.number-people-input')

let tipAmount = document.querySelector('.tip-amount-input')
let tipTotal = document.querySelector('.tip-total-input')

let percentButton = document.querySelectorAll('.percent-button')
let resetButton = document.querySelector('.reset-button')

percentButton.forEach(element => {
  element.addEventListener('click', () => {
    tipPercentCalculator(element.innerHTML)
  } )
});

function tipPercentCalculator(percentInText){
  event.preventDefault()
  let percentInNumber = parseInt(percentInText.split('%'))
  let tipBill = parseInt(tipBillInput.value)
  let numberOfPeople = parseInt(numberOfPeopleInput.value)

  if(tipBill == '' || numberOfPeople == '' || tipBill <= 0 || numberOfPeople <= 0){
    alert('Números inválidos. Por favor, repita a operação.')
    tipBillInput.value = ''
    numberOfPeopleInput.value = ''
    return
  }

  let tipAmountCalc = (tipBill * percentInNumber / 100) / numberOfPeople
  let tipTotalCalc = ((tipBill * percentInNumber / 100) + tipBill) / numberOfPeople

  tipAmount.value = tipAmountCalc.toFixed(2)
  tipTotal.value = tipTotalCalc.toFixed(2)
}

resetButton.addEventListener('click', () => {
  tipAmount.value = ''
  tipTotal.value = ''
  tipBillInput.value = ''
  numberOfPeopleInput.value = ''
})
