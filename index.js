// Functions

function numberIsClicked () {
    calculatorNums.forEach(button => {
        button.addEventListener('click', function () {
            if(counter < 20) {
            const buttonText = this.innerText;
            userInput.innerText += buttonText;
            counter++;
            }
        });
    });

}


// Operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// 3 Vars for each part of an operation.
let num1 = 0;
let num2 = 0;
let operation;

// Text Vars
userInput = document.querySelector('.user-input');
// userInput.innerText = 'hello';

// Extras
let counter = 0;

// Button Vars
const calculatorNums = document.querySelectorAll('.number-btn');

numberIsClicked();