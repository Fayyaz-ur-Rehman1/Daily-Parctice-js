# day-1

```javascript
    function addition(num1,num2){
        return Number(num1) + Number(num2);
        return parseInt(num1) + parseInt(num2);
        return +(num1) + +(num2);
        return (1*num1) + (1*num2);
        return (num1 /1) + (num2 /1);
        return (num1-1) + (num2-1) + 2;;
    }
    
   console.log( addition(3, 2));=> 5
   console.log( addition(-3, -6) );=>-9
   console.log( addition(7, 3) );=>10
   console.log( addition('7', '3') );=>10
   console.log( addition('7', 3) );=>10

function convert(num){
    return num * 60;
    return 60 * num;
}

console.log( convert(5));=>30
console.log( convert(3));=>180
console.log( convert(2));=> 120
console.log( convert('2'));=>120
function addition1(num){
    return  1 + Number(num);
    return  1 + (1*num);
    return 1 + (num/1);
    return 1 + (num-1)+1;
    return 1+ (+num);
    return 1+ parseInt(num);
}
console.log(addition1(0));=> 1
console.log(addition1('9') );=>10
console.log(addition1('-3') );=>-2
 
 ```
  Notes => 1) =>  5*x=300 => x = 5/300 => 5*60 = 300
      5/x = 300 => 5*300 => 5/1500 = 300

2) => // 5+x = 300 => x = 300-5 = 295 => 295 + 5 = 300
        5-x = 300 => x = 300 + 5 = 305 => 305 - 5 = 300

3) => Number is use any datatype convert Number

4) => presint is work some same number method but you give decimal number and use parseint method then parsint convert integer value 


More Code Cleck On [Day-1](../js/day1.js)