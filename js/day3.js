    function squared(b) {
        return b*b;
    }
   console.log(squared(5))
   console.log( squared(9))
   console.log( squared(100))


function and(a,b){
   return a && b
}
console.log(and(true,false))
console.log(and(true,true))
console.log(and(false,true))
console.log(and(false,false))

function lessThanOrEqualToZero(num){
    return num <= 0 
    // return num === 0
}

console.log(lessThanOrEqualToZero(5))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

function lessThan100(num1,num2){
   return  (num1+num2) < 100
}

console.log(lessThan100(22,15))
console.log(lessThan100(83,34))

function footballPoints(wins,draws,losses){
    return (3*wins) + (1*draws) + (0*losses) 
}

console.log(footballPoints(3,4,2))
console.log(footballPoints(5,0,2))
console.log(footballPoints(0,0,1))


function isSameNum(num1,num2){
    return Object.is(num1,num2)
}
console.log(isSameNum(4,8))
console.log(isSameNum(2,2))
console.log(isSameNum(2,"2"))
console.log(isSameNum(0,-0))

function isEven(num){
    return  num % 2 === 0
}

console.log(isEven(2))
console.log(isEven(3))