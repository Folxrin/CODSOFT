let currentOperand = '';
let previousOperand = '';
let operator = '';

function appendNumber(number) {
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function setOperator(op) {
  if (operator !== '' || currentOperand === '') return;
  operator = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function calculateResult() {
  if (operator === null || previousOperand === '' || currentOperand === '') return;
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operator = '';
  previousOperand = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('account').innerText = currentOperand;
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operator = '';
  updateDisplay();
}