
/**
 * Calculates the factorial of a non-negative integer n.
 *
 * @param {number} n - The number to calculate the factorial for. Must be a non-negative integer.
 * @returns {number} The factorial of the given number.
 * @throws {Error} Throws an error if n is a negative number.
 */
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Handle negative numbers
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// add a method to check whether the given no is even or odd
function isEven(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    return n % 2 === 0;
}

function isOdd(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    return n % 2 !== 0;
}

// add a method to check whether the given no is prime or not
function isPrime(n) {   
    if (n <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // n is divisible by i, hence not prime
        }
    }
    return true; // n is prime
}
