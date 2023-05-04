const sum = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw Error('Inputs should be numbers');
}

const diff = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    throw Error('Inputs should be numbers');
}

const product = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    throw Error('Inputs should be numbers');
}

const divide = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a / b;
    }
    throw Error('Inputs should be numbers');
}

module.exports = {
    sum,
    diff,
    product,
    divide
}
