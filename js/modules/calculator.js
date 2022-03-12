// ADD A PRIVATE FUNCTION CALLED CALCULATE

const calculate = (x, y, operation) => {
    switch(operation) {
        case 'add':
            return add(x, y);
        case 'subtract':
            return sub(x, y);
        case 'multiply':
            return mult(x, y);
        case 'divide':
            return div(x, y);
    }
}

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION

function add(x, y) {
    return x + y;
}

// SUBTRACT FUNCTION

function sub(x, y) {
    return x - y;
}

// MULTIPLY FUNCTION

function mult(x, y) {
    return x * y;
}

// DIVIDE FUNCTION

function div(x, y) {
    return x / y;
}

// EXPORT THE FOUR PUBLIC FUNCTIONS

export {add, sub, mult, div};