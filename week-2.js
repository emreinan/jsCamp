

//First Question
function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let result = isPrime(numbers[i])
        if (result) {
            console.log(numbers[i])
        }
    }

}
findPrime(3, 4, 5, 7, 11, 18, 37, 41, 40,99)

//Second Question
function positiveDividers(num) {
    let total = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            total += i;
        }
    }
    return total;
}
function isFriednsNumber(num1,num2) {
    let a = positiveDividers(num1)
    let b =positiveDividers(num2)
    if (num1===b && num2===a) {
        console.log(num1 + " " + num2)
    }
}

//Third Question

function isPerfectNumber(num) {
    if (num <= 1) {
        return false;
    }
    if (num === positiveDividers(num)) {
        return true;
    }
}
for (let i = 0; i < 1000; i++) {
    let result = isPerfectNumber(i)
    if (result) {
        console.log(i)
    }

}

//Fouth Question

for (let i = 0; i < 1000; i++) {
    let prime = isPrime(i)
    if (prime) {
        console.log(i)
    }

}