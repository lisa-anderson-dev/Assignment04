// IMPORT THE MODULE

import * as calc from './modules/calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

let num1, num2, operation;

do {
    do {
        num1 = Number(prompt('Enter a first number'));
    } while (isNaN(num1));
    
    do {
        num2 = Number(prompt('Enter a second number'));
    } while (isNaN(num2));

    operation = prompt('Which operation would you like to perform? (add, subtract, multiply, divide)');
    if (operation === 'add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide') {
        break;
    } else {
        alert('You must enter add, subtract, multiply or divide.');
    }
} while (true);

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

let result;
switch(operation) {
    case 'add':
        result = calc.add(num1, num2);
        break;
    case 'subtract':
        result = calc.sub(num1, num2);
        break;
    case 'multiply':
        result = calc.mult(num1, num2);
        break;
    case 'divide':
        result = calc.div(num1, num2);
        break;
}
alert(`The result of the calculation is ${result}.`);