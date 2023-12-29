// Functions

function numberIsClicked () {
    calculatorNums.forEach(button => {
        button.addEventListener('click', function () {
            if(counter < 20) { // if statement will be used later
            const buttonText = this.innerText;
            userInput.innerText += buttonText;
            counter++;

            numText += buttonText;


    
            // console.log('num1 is: ' + num1);
            // console.log('num2 is: ' + num2);
            }
        });
    });

}

function operationIsClicked () {
    calculatorOperations.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.innerText;
            userInput.innerText += buttonText;
            operation = buttonText;
            operationCounter++;

            if(operationCounter == 1) {
                num1 = numText;
                numText = '';
                console.log('num1 is: ' + num1);
            } else {
                operate();
                console.log('counter: ' + operationCounter);
            }
            
            
            
            
        })
    });
}

function operate() {

    if(num2 == undefined) {
        num2 = numText;
        console.log('num2 is: ' + num2);
    } else {
        num2 = numText;
    }

    if (operation == '+') {
        num1 = Number(num1) + Number(num2);
    } else if (operation == '-') {
        num1 = Number(num1) - Number(num2);
    } else if (operation == '×') {
        num1 = Number(num1) * Number(num2);
    } else if (operation == '÷') {
        num1 = Number(num1) / Number(num2);
    }
    console.log('numText: ' + numText);
    console.log('num2 is: ' + num2);
    console.log('num1 is now answer: ' + num1);
    
  

    numText = '';
    
}


// Operations
const add = (a, b) => Number(a + b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// 3 Vars for each part of an operation.
let num1;
let num2;
let operation;

// Display Vars
const userInput = document.querySelector('.user-input');
const solution = document.querySelector('.solution');

// Extras
let counter = 0;
let numText = '';
let answer = 0;
let operationCounter = 0;

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
    operate();
    numText = ''; // reset
})