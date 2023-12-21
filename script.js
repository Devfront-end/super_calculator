let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(operator) {
    if (currentInput !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            currentInput = '';
            currentOperator = operator;
        } else {
            calculateResult();
            currentOperator = operator;
        }
        updateDisplay();
    }
}

function calculateResult() {
    if (currentInput !== '' && firstOperand !== null) {
        let secondOperand = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                currentInput = (firstOperand + secondOperand).toString();
                break;
            case '-':a
                currentInput = (firstOperand - secondOperand).toString();
                break;
            case '*':
                currentInput = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand !== 0) {
                    currentInput = (firstOperand / secondOperand).toString();
                } else {
                    currentInput = 'Error';
                }
                break;
            default:
                break;
        }
        firstOperand = null;
        currentOperator = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput !== '' ? currentInput : '0';
}