// / 18 ==> The Farm Problem
//     In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//         chickens = 2 legs
//         cows = 4 legs
//         pigs = 4 legs
//     The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//     animals(2, 3, 5) ➞ 36
//     animals(1, 2, 3) ➞ 22
//     animals(5, 2, 8) ➞ 50
//     Remember that the farmer wants to know the total number of legs and not the total number of animals.

function animals(num,num1,num2){
//  return (2*num) + (4*(num1+num2))
// return 2*num + 4*num1 + 4*num2
return 2*num/1 + 4*num1/1 + 4*num2/1
}

// console.log(animals(2,3,5))
// console.log(animals(1,2,3))
// console.log(animals(5,2,8))

// 19 ==> Convert Hours and Minutes into Seconds
//     Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert(hours , minutes){
    // return  hours * 3600 + minutes
    // return 60* ((60*hours)+minutes);
    return  (60*60*hours/1) +minutes/1
}

// console.log(convert(1,3))
// console.log(convert(2,0))
// console.log(convert(0,0))

// 20 ==> Equality Check
//     In this challenge, you must verify the equality of two different given parameters: a and b.
//     Both the value and the type of parameters need to be tested in order to have a matching equality. The possible types of the given parameters are:
//         Numbers
//         Strings
//         Booleans (false or true)
//         Special values: undefined, null and NaN

function checkEquality(a,b){
     return a === b 
}
console.log(checkEquality(1,true))
console.log(checkEquality(0,"0"))
console.log(checkEquality(1,1))

