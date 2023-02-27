//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2) {
    return str1.trim().length === str2.trim().length
}

// console.log(comp("AB", "CD"))
// console.log(comp("ABD", "DE"))
// console.log(comp("hello", "moien khan"))

//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

function anInteeger(num1) {
    return num1 % 100 === 0
}
// console.log(anInteeger('100'))

// Check if an Integer is Divisible By Five

function divisibleByFive(num) {
    return num % 5 === 0
}
// console.log(divisibleByFive(5))
// console.log(divisibleByFive(-55))
// console.log(divisibleByFive(37))

//     Create a function that takes a string and returns it as an integer.
function stringInt(num) {
    // return Number(num)
    // return parseInt(num)
    // return (1*num)
    // return (num/1)
    return num - 0
}
// console.log(stringInt("6"))
// console.log(stringInt("1000"))
// console.log(stringInt("12"))

// 30 ==> Divides Evenly
//     Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
    const result = a / b;
    return result === parseInt(result);
}
// console.log(dividesEvenly(98, 7 ))
// console.log(dividesEvenly(85,4 ))