//STRING MANIPULATION
//Reversing A string
function strReverse(str){
   return str.split("").reverse().join("");
};
console.log(strReverse("hello"));
//Counting a Character
function countChar(str){
   return str.length;
};
console.log(countChar("World"));
// Capitalizing a Word
function capitalize(str){
   return str.toUpperCase();
};
console.log(capitalize("my name"));
//ARRAY FUNCTIONS
// Min-Max of an Array
function minMax(arr){
   return `Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`;
};
console.log(minMax([1,2,3,4,5,6,7,8,9,10]));
//SUm of Array
function sum(arr){
    return arr.reduce((a,b) => a + b, 0);
}
console.log(sum([1,2,3,4,5,6]));
//Filter
function filter(arr){
    return arr.filter(num => num > 2)
}
console.log(filter([1,2,3,4,5,6]));
// Mathematical Function
// Factorial function
function factorial(num){
    if(num === 0){
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
// Prime Number
function prime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return `${num} is not a prime number`;
        }
    }
    return `${num} is a prime number`;
}
console.log(prime(10));
// Fibonacci
function fibonacci(n) {
    const fibSequence = [1, 1]; // Starting with the first two Fibonacci numbers
    
    for (let i = 2; i < n; i++) {
        // Fibonacci number is the sum of the previous two Fibonacci numbers
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    
    return fibSequence;
}
console.log(fibonacci(4));