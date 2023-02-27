// /1. create a function that take  arguments num1 ,num2,string and according to string parform the operation,divide ,add,subtract,etc and return the result.

function operations(num1, num2, str) {
 if(str == 'add'){
     return num1 + num2
 }else if(str =='subtract'){
  return num1 - num2}
  else if(str== "divide"){
     return num1/num2
  }else if(str == "multiply"){
    return num1 * num2
  }else{
    return ("not defind number") }
}
console.log(operations(1, 2, "add"));
console.log(operations(10, 7, "subtract"));
console.log(operations(60, 12, "divide"));
console.log(operations(100, 10, "multiply"));
console.log(operations(100, 10, "module"));