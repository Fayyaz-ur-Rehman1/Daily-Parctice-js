# day-3

```javascript
function squared(b) {
        return b*b; => this b*b is use beacuse this question say all value are slov in squared then i give multiply * sing  
    }
//    console.log(squared(5))
//    console.log( squared(9))
//    console.log( squared(100))


function and(a,b){
   return a && b  => && opreator this opreator is run both value are true then this opreator are run but both value are one value are ture but second value are false then this opreator are give false
}
// console.log(and(true,false))
// console.log(and(true,true))
// console.log(and(false,true))
// console.log(and(false,false))

function lessThanOrEqualToZero(num){
    return num <= 0  =>  you and me this <= sing is use beacuse this is check 5 less then 0 no five is not less than 0 that is called false
    // return (num === 0 || num < 0 ) return true 
    // else return  false
   
}

// console.log(lessThanOrEqualToZero(5))
// console.log(lessThanOrEqualToZero(0))
// console.log(lessThanOrEqualToZero(-2))

function lessThan100(num1,num2){
//    const sum = num1+num2 
//    return sum < 100
return (num1 + num2) < 100
}

// console.log(lessThan100(22,15))
// console.log(lessThan100(83,34))

function footballPoints(wins,draws,losses){
    return (3*wins) + (1*draws) + (0*losses) => this question is say wins team get 3 coin and draw team get 1coin and losses team get 0 coin then then use three paramenter and 1 parameter is a and a is win the team then a * 3 and draw team b * 1 losses team c*0 solv the question
}

// console.log(footballPoints(3,4,2)) // 3*- 9, 1*4,0*1
// console.log(footballPoints(5,0,2))// 15,0,0
// console.log(footballPoints(0,0,1))//0,0,0


function isSameNum(num1,num2){
    return Object.is(num1,num2) object.is check true and false and give perfect answer object .is say value is qual then object.is show value true number are not equal then answer is false
    // return num1 === num2
}
// console.log(isSameNum(4,8))
// console.log(isSameNum(2,2))
// console.log(isSameNum(2,"2"))
// console.log(isSameNum(0,-0))

function isEven(num){
    return  num % 2 === 0
}

// console.log(isEven(2))
// console.log(isEven(3))
```
More Code Cleck On[day-3](../js/day3.js)