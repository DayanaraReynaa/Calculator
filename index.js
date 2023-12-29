// Functions

function numberIsClicked () {
    calculatorNums.forEach(button => {
        button.addEventListener('click', function () {
            if(counter < 20) { // if statement will be used later
            const buttonText = this.innerText;
            userInput.innerText += buttonText;
            counter++;

            numText += buttonText;
            }
        });
    });

}

function operationIsClicked () {
    calculatorOperations.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.innerText;
            userInput.innerText += buttonText;

            // operation array
            operation[operationCounter] = buttonText;
            operationCounter++;

            // If statements
            if(operationCounter == 1) {
                // Initial Num1
                num1 = numText;
                numText = ''; // is reset
                console.log('Initial Num1 is: ' + num1);
            } else {
                // If OperationCounter > 1
                operationDecrement = -2; // is changed
                operate();
            }
        })
    });
}

function getAnswer() {
    if (operation[operationCounter + operationDecrement] == '+') {
        answer = add(Number(num1), Number(num2));
    } else if (operation[operationCounter + operationDecrement] == '-') {
        answer = subtract(Number(num1), Number(num2));
    } else if (operation[operationCounter + operationDecrement] == '×') {
        answer = multiply(Number(num1), Number(num2));
    } else if (operation[operationCounter + operationDecrement] == '÷') {
        answer = divide(Number(num1), Number(num2));
    }
}

function operate() {

    if(operationCounter == 1) {
        num2 = numText;
        numText = '';
        console.log('Num2 is: ' + num2);
    } else {
        num2 = numText;
        numText = '';
        console.log('Num2 is: ' + num2);
    }
   
   getAnswer();
   
   num1 = answer;
   console.log('Num1 is answer: ' + num1);
   console.log('The answer is: ' + answer);
    
}


// Operations
const add = (a, b) => Number(a + b);
const subtract = (a, b) => Number(a - b);
const multiply = (a, b) => Number(a * b);
const divide = (a, b) => Number(a / b);


// 3 Vars for each part of an operation.
let num1;
let num2;
let operation = [];

// Display Vars
const userInput = document.querySelector('.user-input');
const solution = document.querySelector('.solution');

// Extras
let counter = 0;
let numText = '';
let answer = 0;
let operationCounter = 0;
let operationDecrement = -1;

// Button Vars
const calculatorNums = document.querySelectorAll('.number-btn');
const calculatorOperations = document.querySelectorAll('.operation-btn');
const clearBtn = document.getElementById('clear-btn');
const equalBtn = document.getElementById('equal-btn');
// Function Calls / Event Listeners
numberIsClicked();
operationIsClicked();

clearBtn.addEventListener('click', function () {
    userInput.innerText = '';
    counter = 0; // counter is reset

})

equalBtn.addEventListener('click', function() {
    operationDecrement = -1; // is changed back
    operate();
    solution.innerText = answer;
})