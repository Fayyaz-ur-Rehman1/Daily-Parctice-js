// 41 ==> Fix the Error: Check Whether a Given Number Is Odd
//     I've written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Fix the error.


// console.log("41 --->")
function isOdd(num){
    return !!(num % 2)
}
// console.log(isOdd(-5))
// console.log(isOdd(25))
// console.log(isOdd(0))

// 42 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.

function flipBaloon(bool){
    return +!bool 
}
// console.log(flipBaloon(true))
// console.log(flipBaloon(false))
// console.log(flipBaloon(1))
// console.log(flipBaloon(0))

//     Kinetic energy can be calculated with the following formula:
//     Kinetic energy = (0.5) * m * v^2

function kineticEnergy(mass,velocity){
//   return (0.5) * maas * velocity * velocity
    return (0.5) * mass * Math.pow(velocity,2);
}
// console.log(kineticEnergy(60,3))
// console.log(kineticEnergy(45,10))
// console.log(kineticEnergy(63.5,7.35))


//     Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".
 
const fun = (str) => 
//    "hello "+str
  `hello ${str}`

// console.log(fun("Gerald")) // hello Gerald
// console.log(fun("Tiffany")) // hello Tiffany
// console.log(fun("Ed")) // hello Ed

// 45 ==> To the Power of _____
//     Create a function that takes a base number and an exponent number and returns the calculation.

function calculteExponent(base,exponent){
    return (base ** exponent)
}

console.log(calculteExponent(5, 5))
console.log(calculteExponent(10, 10))
console.log(calculteExponent(3, 3))