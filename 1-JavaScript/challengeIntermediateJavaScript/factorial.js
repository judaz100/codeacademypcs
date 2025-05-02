/*
Write a function factorial() 
that takes a number as an argument and returns 
the factorial of the number. */

function factorial(num) {
    if (num === 0 || num === 1) return 1;

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));