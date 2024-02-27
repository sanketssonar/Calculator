let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter') {
    appendToDisplay(key);
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
