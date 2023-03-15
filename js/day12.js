
// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.

function hasSpaces(str){
    // for(let i = 0 ; i < str.length ; i++){
    //     if(str[i] === " "){
    //         return true
    //     }
    // }
    // return false;
//   return str.includes(" ")
return str.split(" ").length > 1;
}

console.log(hasSpaces("hello"))
console.log(hasSpaces("hello, world"))
console.log(hasSpaces(" "))
console.log(hasSpaces(""))
console.log(hasSpaces(",./!@#"))
