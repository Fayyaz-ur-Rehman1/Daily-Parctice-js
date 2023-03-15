// // 36 ==> Reverse an Array
// //     Write a function to reverse an array.

// // function reverse(arr){
// //     return arr.reverse()
// // }

// // function reverse(new_arr){
// //   const reverse_Arr = []
// //   for(let i = new_arr.length-1 ; i >= 0 ; i--){
// //      reverse_Arr.push(new_arr[i])
// // }
// // return reverse_Arr;
// // }

// // console.log(reverse([1, 2, 3, 4]))
// // console.log(reverse([9, 9, 2, 3, 4]))



// // function arrryprint(num){
// //     var b = []
// //     for(var u = 1 ; u <= num ; u++){
// //     b.push(u)
// //  }
// //  return b
// // }


// // 37 ==> ES6: Destructuring Arrays I
// //     You can assign variables from arrays like this:
//         const arr = [1, 2, 3, 4, 5, 6]
//         let a = arr[0]
//         let b = arr[1]
//         console.log(a) // outputs 1
//         console.log(b) // outputs 2
// //     With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax

// function es6(arr){
//    const [a,b,...rest] =arr;  

//    console.log(a)
//    console.log(b)
//    console.log(rest)
// }

// (es6([1, 2, 3, 4, 5, 6]))

// // 38 ==> Using Ternary Operators
// //     Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.

// function yeah_nope(yeah){
//     return (yeah ? 'yeah':'nope')
// }

// console.log(yeah_nope(true))
// console.log(yeah_nope(false))



// // 39 ==> Convert an Array to a String
// //     Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(str){
//     return str.join('')
//     // let arr = ""
//     // for(let i = 0 ; i < str.length; i++){
//     //   arr += str[i]
//     // }
//     // return arr
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]))
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))

// // 40 ==> Return the Last Element in an Array
// //     Create a function that accepts an array and returns the last item in the array.


// function getLastItem(arr){
//     return arr.pop()
//     // return arr.slice(-1)
//     // return arr.splice(-1)
//     // return arr[arr.length-1]
    
    
// }

// console.log(getLastItem([1, 2, 3]))
// console.log(getLastItem(["cat", "dog", "duck"]))
// console.log(getLastItem([true, false, true]))



// // A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

// function carsNeeded(n){
//     return Math.ceil(n/5)
// }

// console.log( carsNeeded(5)) // 1
// console.log( carsNeeded(11)) // 3
// console.log( carsNeeded(0)) // 0



// // Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
// // The left shift operation is similar to multiplication by powers of two.

// // The left shift operation is similar to multiplication by powers of two.

// function shiftToLeft(power,power1){
//     return power* 2 ** power1
// }

// console.log( shiftToLeft(5, 2)) // 20
// console.log( shiftToLeft(10, 3)) // 80
// console.log( shiftToLeft(-32, 2)) // -128
// console.log( shiftToLeft(-6, 5)) // -192
// console.log( shiftToLeft(12, 4)) // 192
// console.log( shiftToLeft(46, 6)) // 2944


// // Write a function that returns true if a year is a leap, otherwise return false.

// // A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, creating February 29.

// // A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.

// // Look at the exa
// // Look at the examples, and if you need help, look at the resources panel.

// function leapYear(year){
// //       return year % 4 === 0
// return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

// }

// console.log( leapYear(1990)) // false
// console.log( leapYear(1924)) // true
// console.log( leapYear(2021)) // false

// // Create a function that takes in an array of numbers and returns the sum of its cubes.

// // Examples
// function sumOfCubes(nums) {
//   return nums.reduce((total, num) => total + Math.pow(num, 3));
// }
// console.log(sumOfCubes([1, 5, 9])) // 855
// console.log(sumOfCubes([3, 4, 5])) // 216
// console.log(sumOfCubes([2])) // 

console.log(Boolean(function fn(){}))

function fn(){
    console.log("hi")
}
console.log(Boolean(fn()));