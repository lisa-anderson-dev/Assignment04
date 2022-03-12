//STEP 1

const halfNumber = x => console.log(`Half of ${x} is ${x / 2}.`);

halfNumber(5);

//STEP 2

const squareNumber = x => console.log(`The result of squaring the number ${x} is ${x ** 2}.`);

squareNumber(3);

//STEP 3

const percentOf = (x, y) => console.log(`${x} is ${(x / y * 100).toFixed(2)}% of ${y}.`);

percentOf(2, 4);

//STEP 4

const findModulus = (x, y) => console.log(`${y % x} is the modulus of ${x} and ${y}.`);

findModulus(4, 10);

//STEP 5

function findSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += Number(arguments[i]);
    }
    alert(`Sum of the entered numbers is ${sum}.`);
}

let numList = prompt('Enter a comma-separated list of numbers');
if (numList) {
    numList = numList.split(',');
    findSum(...numList);
}