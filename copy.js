function numberIsClicked () {
    calculatorNums.forEach(button => {
        button.addEventListener('click', function () {
            if(counter < 20) { // if statement will be used later
            const buttonText = this.innerText;
            userInput.innerText += buttonText;
            counter++;

            numText += buttonText;

            if(operationClicked == false) {
                num1 = numText;
            } else {
                num2 = numText;
            }

    
            console.log('num1 is: ' + num1);
            console.log('num2 is: ' + num2);
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
            operationClicked = true;
            numText = ''; // reset
            operationCounter++;
            
        })
    });
}

function operate() {
   
    if (operation == '+') {
        answer += Number(num1) + Number(num2);
    } else if (operation == '-') {
        answer += Number(num1) - Number(num2);
    } else if (operation == '×') {
        answer += Number(num1) * Number(num2);
    } else if (operation == '÷') {
        answer += Number(num1) / Number(num2);
    }
    console.log(num1);
    console.log(num2);
    console.log('answer is: ' + answer);
    num1 = undefined;
}