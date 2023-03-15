// function printArray(num){
//     var a = []
//     for(var i =1 ; i <= num; i++){
//         a.push(i)
//     }
//     return a
// }

// console.log(printArray(1)) // [1]
// console.log(printArray(3)) // [1, 2, 3]
// console.log(printArray(6)) // [1, 2, 3, 4, 5, 6]
 
// function arrryprint(num){
//     var b = []
//     for(var u = 1 ; u <= num ; u++){
//     b.push(u)
//  }
//  return b
// }


// console.log(arrryprint(1)) // [1]
// console.log(arrryprint(3)) // [1, 2, 3]
// console.log(arrryprint(6)) // [1, 2, 3, 4, 5, 6]
                                    
// function calculateExponent(calculated , num){
//     let num1 = 1;
//     for(o = 0 ; o < num ; o++){ 
//         num1 = num1 * calculated
//     }
//     return num1
// }

// console.log(calculateExponent(5, 5)) // 3125
// console.log(calculateExponent(10, 10)) // 10000000000
// console.log(calculateExponent(3, 3)) // 27

// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples

function word(num){
    var str = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    for(var i = 0 ; i <= num ; i++){
        str.keys(i)
    }
    return str
    
}

console.log(word("one") )// 1
console.log(word("two") )// 2
console.log(word("nine")) // 9