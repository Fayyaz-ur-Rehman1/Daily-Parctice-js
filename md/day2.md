# day-2

```javascript
function giveMeSomething(str){
String Concat in one line First method => return ( 'something '+str); 
 Second method => return (`something ${str}`);
  Third method =>  return 'something'.concat( ' ' ,str);
}
 console.log( giveMeSomething("is better than nothing") ); => something is better than nothing"
 console.log( giveMeSomething("Bob Jane")); =>"something Bob Jane"
 console.log( giveMeSomething("something") => "something something"

function triArea(base,height){
   return (base * height) / 2; Tringle area formula is height multiply base divided by 2  => height * Base /2 this is triangle formula 
}

// `Area of a Triangle`
 console.log( triArea(3, 2)); => 3
 console.log( triArea(7, 4) ); => 14
 console.log( triArea(10, 10) );=> 50

function howManySeconds(hour){
     return 3600 * hour
}
question is say hour convert minutes and munites convert second then you and me solve the question 60 minutes in one hour then 60 second in 1 minutes then both multiply munites and second then the answer is 3600 and 3600 multiply by hourse then see answer 
  console.log(howManySeconds(2));7200
  console.log(howManySeconds(10));36000
  console.log(howManySeconds(24));86400
 
 function getFirstValue(arr){
    // return arr.shift()
   any array take first value then shift method is use acctully shift method is use chose first value in array that is called shift method return arr[0]
 }
 console.log(getFirstValue([1, 2, 3])) =>1
 console.log(getFirstValue([80, 5, 100])) => 80
 console.log(getFirstValue([-500, 0, 50])) => -500

function nextEdge(num1,num2){
    return Number(num1) + Number(num2)-1
    return (num1-1) + (num2-1) + 2 -1
    return (num1*1) + (num2*1) -1
    return parseInt(num1) + parseInt(num2)-1
    return parseFloat(num1) + parseFloat(num2)-1
    return (num1/1) + (num2/1) -1
    return +(num1) + +(num2) -1
}

 console.log(nextEdge(8, 10) ) => 17
 console.log(nextEdge(5, 7) ) => 11
 console.log(nextEdge(9, 2) ) => 10

 function findPerimeter(num1,num2){
    return 2 * (Number(num1) + Number(num2)) ;
    
 }
 console.log(findPerimeter(6, 7)) => 26
 console.log(findPerimeter(20, 10)) => 60
 console.log(findPerimeter(2, 9)) => 22

function remainder(num1,num2){
  return num1 % num2 => modulus Second name is Remainder you are not clear modulus then serach what is modulus and remainder then you clear the modulus 
}
 console.log(remainder(1, 3)) => 1
 console.log(remainder(3, 4)) => 3
 console.log(remainder(-9, 45)) => -9
 console.log(remainder(5, 5)) => 0
```
More Code Cleck On [Day-2](../js/day2.js)