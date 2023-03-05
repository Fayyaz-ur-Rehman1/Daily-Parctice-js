// 46 ==> Word without First Character
//     Create a function that takes a word and returns the new word without including the first character.

function newWord(str) {

       // return str.slice(1)
let a = ""
for (let i =1 ; i < str.length ; i++){
       a += str[i]
}
return a
}

// console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))

// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.

function concat(...arr2) {
       // return arr1.concat(arr2)
       let s = []
       for(let a = 0 ; a < arr1.length ; a++){
              s.push(arr2[a])
       }
       return arr2
}

// console.log(concat([1, 3, 5], [2, 6, 8]))
// console.log(concat([7, 8], [10, 9, 1, 1, 2]))
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))


// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.

function search(arr, val) {
       //  return arr.indexOf(val)
       // return arr.findIndex(x => x == val)

       for(let j = 0 ; j < arr.length ; j++){
              if(arr[j] == val){
                     return j
              }
       }
       return -1
}

// console.log(search([1, 5, 3], 5))
// console.log(search([9, 8, 3], 3))
// console.log(search([1, 2, 3], 4))
// console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))

// / 49 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.

function check(arr1, val1) {
       // return arr1.includes(val1)
       for (let f = 0; f < arr1.length; f++) {
      
              if (arr1[f] == val1){
                     return true
              }
       
       }
       return false
}

console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))
