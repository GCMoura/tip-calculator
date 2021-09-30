let tipBillInput = document.getElementsByClassName('tip-bill-input')

let resetButton = document.getElementsByClassName('reset-button')

resetButton.addEventListener('click', () => {
  console.log(tipBillInput.value)
})
