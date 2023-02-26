// // 21 ==> Profitable Gamble
// //     Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
// //     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
// //     profitableGamble(0.2, 50, 9) ➞ true
// //     profitableGamble(0.9, 1, 2) ➞ false
// //     profitableGamble(0.9, 3, 2) ➞ true
// //     A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

// function profitableGamble(prob, prize, pay) {
//     // return (prob*prize) > pay
//     // return (prob/1*prize/1) > pay
//     // return (prob-1+1)*(prize-1+1) > pay
//     return (prob * 1) * (prize * 1) > pay

// }

// // console.log(profitableGamble(0.2, 50, 9))
// // console.log(profitableGamble(0.9, 1, 2))
// // console.log(profitableGamble(0.9, 3, 2))

// // 22 ==> Frames Per Second
// //     1(Create a function that returns the number of frames shown in a given number of minutes)   for a certain FPS.
// //     frames(1, 1) ➞ 60
// //     frames(10, 1) ➞ 600
// //     frames(10, 25) ➞ 15000
// //     FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
// //     Assume the screen produces 60 frames every second.

function frames(num1,num2){
    return (60*num2) * num1
}
// samjna h 
// console.log(frames(1,1))   // (1       =    (1 *60) = 60  )          (1 * 60)
// console.log(frames(10,1))   // (10       -  (1 * 60)  = 60)         (10 * 60)
// console.log(frames(10,25))  // (10         - (25 * 60) = 1500  )     (10 * 1500)   
// console.log(frames(20,15))
// // 23 ==> Drinks Allowed?
// //     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
// //     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
// //     shouldServeDrinks(17, true) ➞ false
// //     shouldServeDrinks(19, false) ➞ true
// //     shouldServeDrinks(30, true) ➞ false
// //     Return true or false.
// //     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.

function shouldServeDrinks(age, isBrake) {
    return age >= 18 && isBrake === false
}

// console.log(shouldServeDrinks(17, true));
// console.log(shouldServeDrinks(19, false));
// console.log(shouldServeDrinks(30, true));
// console.log(shouldServeDrinks((25-15),false))

// // 24 ==> Is the String Empty?
// //     Create a function that returns true if a string is empty and false otherwise.
// //     isEmpty("") ➞ true
// //     isEmpty(" ") ➞ false
// //     isEmpty("a") ➞ false
// //     A string containing only whitespaces " " does not count as empty.

function isEmpty(str){
   return str.length === 0
}
console.log(isEmpty(""))
console.log(isEmpty(" "))
console.log(isEmpty("a"))

// var a = 'FAYYAZURREHMAN'
// var b = a.toLocaleLowerCase
// var c = b.trim()
// console.log(c)

// // [...new Set(array)];
// // Mohammed Moien Khan
// // 4:49 AM
// // Sort two sorted array. 

// // input_a = [2,4,6,7]
// // input_b = [3, 4,8,9,12]

// // result = [2, 3, 4, 4, 6, 7, 8, 9, 12]
// // Mohammed Moien Khan
// // 4:53 AM
// // [4,5,6].map((val) => val % 2 == 0)
// // Mohammed Moien Khan
// // 4:57 AM
// // function getName () {
// //    return 'Moien'
// // }
// // function getName () {
// //    console.log(4)
// //    return 'Moien'
// // }
// // Mohammed Moien Khan
// // 5:01 AM
// // function getName () {
// //    console.log(4);
// // }
// // Mohammed Moien Khan
// // 5:03 AM
// // [4,5,6].map((val) => { 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // });

// // function getName () {
// //    return 'Moien'
// // }

// // function getName () {
// //    console.log(4)
// //    return 'Moien'
// // }


// // function getName () {
// //    console.log(4);
// // }
// // Mohammed Moien Khan
// // 5:05 AM
// // [4,5,6].map((val) => { 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // });
// // let x = [4,5,6].map((val) => { 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // });
// // Mohammed Moien Khan
// // 5:10 AM
// // let x = [4,5,6].map((val) => { 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // });
// // console.log(x)
// // Mohammed Moien Khan
// // 5:11 AM
// // function getName () {
// //    console.log(4)
// //    return 'Moien'
// // }


// // function getName () {
// //    console.log(4);
// // }
// // Mohammed Moien Khan
// // 5:13 AM
// // let x = [4,5,6].map(function getName(val){ 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // });

// // function getName(val){ 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // }

// // let x = [4,5,6].map(getName);
// // Mohammed Moien Khan
// // 5:14 AM
// // function getName () {
// //    console.log(4);
// // }

// // function getName(val){ 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // }
// // Mohammed Moien Khan
// // 5:15 AM
// // let x = [4,5,6].map(function getName(val){ 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // });

// // function getName(val){ 
// //    if (val % 2 == 0) {
// //          console.log('even')
// //     } else{
// //           console.log('odd')
// //     }
// // }

// // let x = [4,5,6].map(getName);
// // Mohammed Moien Khan
// // 5:20 AM
// // let arr = [4, 5, 6];
// // let x = arr.map(getName);
// // Mohammed Moien Khan
// // 5:26 AM









var a = "               danish         "

console.log(a.trim().length)