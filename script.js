// Finding even numbers
const even = (arr) => {
    return arr.filter(x => x % 2 === 0)
}

// Finding prime numbers from and array of numbers
function factors(num) {
    let list = []
    let divisors = []
    for (let i = 1; i <= Math.abs(num); i++) {
        list.push(i)
    }
    for (x of list) {
        if (num % x === 0) {
            divisors.push(x)
        }
    }
    if (divisors.length === 2) {
        return true
    } else {
        return false
    }
}

const isPrime = (arr) => {
    let prime = []
    for (x of arr) {
        if (factors(x)) {
            prime.push(x)
        }
    }
    return prime
}

// Finding the factors of a number and determining if it is a prime number.
function factorsOfNumber(num) {
    let list = []
    let divisors = []
    for (let i = 1; i <= Math.abs(num); i++) {
        list.push(i)
    }
    for (x of list) {
        if (num % x === 0) {
            divisors.push(x)
        }
    }
    if (divisors.length === 2) {
        let primeMessage = `${num} is a Prime a number. Its factors are 1 and ${num}`
        return primeMessage
    } else {
        let notPrimeMessage = `${num} is not a Prime number. Its factors are ${divisors}`
        return notPrimeMessage
    }
}

//Finding the prime factors of a number

function primeFactors(num) {
    let list = []
    let divisors = []
    for (let i = 1; i <= Math.abs(num); i++) {
        list.push(i)
    }
    for (x of list) {
        if (num % x === 0) {
            divisors.push(x)
        }
    }
    if (divisors.length === 2) {
        let primeMessage = `${num} is a Prime a number. Its factors are 1 and ${num}`
        return primeMessage
    } else {
        let primes = isPrime(divisors); // calling isPrime function here.
        if (primes.length === 0) {
            primes = `None`
        }
        let notPrimeMessage = `${num} is not a Prime number. Its prime divisors are ${primes}`
        return notPrimeMessage
    }
}

// Generating Fibonacci Numbers
const fib = (num) => {
    let fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1
    for (let i = 2; i <= Math.abs(num); i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }
    let message = `The Fibonacci sequence is ${fibonacci}...`
    return message
}

// Generating Pell Numbers
function pel(num) {
    let pell = [0, 1]
    for (let i = 2; i < Math.abs(num); i++) {
        pell[i] = 2 * pell[i - 1] + pell[i - 2]
    }
    let message = `The Pell sequence is ${pell}...`
    return message
}

//This is needed for the Highest Common Facator function
const intersection = (arr1, arr2) => {
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            continue;
        };
        res.push(arr1[i]);
    };
    return res;
};
const intersectMany = (...arrs) => {
    let res = arrs[0].slice();
    for (let i = 1; i < arrs.length; i++) {
        res = intersection(res, arrs[i]);
    };
    return res;
};

// Finding the Highest Common Factors of array of numbers
const heighestCommonFactors = (arr) => {
    let setOfArray = [];
    for (num of arr) {
        let list = []
        let divisors = []
        for (let i = 1; i <= Math.abs(num); i++) {
            list.push(i)
        }
        for (x of list) {
            if (num % x === 0) {
                divisors.push(x)
            }
        }
        let set = new Set(divisors)
        setOfArray.push([...set])
    }
    let answer = intersectMany(...setOfArray)
    let max = 0;
    for (elem of answer) {
        if (elem > max) {
            max = elem
        }
    }
    return `The Highest Common Factor of ${arr} is ${max}`
}

// DOM codes

// factors
document.querySelector(".btn-factorsInput").addEventListener("click", () => {
    let inputVal = parseInt(document.querySelector(".factorsInput").value);
    document.querySelector(".h3-factorsInput").innerText = factorsOfNumber(inputVal)
})

// prime factors
document.querySelector(".btn-primeFactorsInput").addEventListener("click", () => {
    let inputVal = parseInt(document.querySelector(".primeFactorsInput").value);
    document.querySelector(".h3-primeFactorsInput").innerText = primeFactors(inputVal)
})

//fibonacci
document.querySelector(".btn-fibonacci").addEventListener("click", () => {
    let inputVal = parseInt(document.querySelector(".fibonacci").value);
    document.querySelector(".h3-fibonacci").innerText = fib(inputVal)
})

//pell
document.querySelector(".btn-pell").addEventListener("click", () => {
    let inputVal = parseInt(document.querySelector(".pell").value);
    document.querySelector(".h3-pell").innerText = pel(inputVal)
})

//heighestCommonFactors
document.querySelector(".btn-hcf").addEventListener("click", () => {
    let arr = document.querySelector(".hcf").value.split(" ");
    let inputVal = [];
    for (elem of arr) {
        inputVal.push(parseInt(elem))
    }
    document.querySelector(".h3-hcf").innerText = heighestCommonFactors(inputVal)
})