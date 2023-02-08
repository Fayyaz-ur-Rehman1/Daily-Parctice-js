// 1) => // 5*x=300 => x = 5/300 => 5*60 = 300
//       5/x = 300 => 5*300 => 5/1500 = 300

//2) => // 5+x = 300 => x = 300-5 = 295 => 295 + 5 = 300
        // 5-x = 300 => x = 300 + 5 = 305 => 305 - 5 = 300

//3) => Number is use any datatype convert Number

//4) => presint is work some same number method but you give decimal number and use parseint method then parsint convert integer value  

function addition(num1,num2){
    return Number(num1) + Number(num2)
    // return (num1/1) + (num2/1)
    // return (num1-1)+1 + (num2-1)+1
    // return (num1-1)+(num2-1) + 2
    // return parseInt(num1) + parseInt(num2)
    // return (num1*1)+(num2*1)
}
  // console.log(addition(5, 6))
  // console.log(addition(-3, -8) )
  // console.log(addition(7, 4) )
  // console.log(addition('7', '4') )
  // console.log(addition('7', 4) )

  function convert(num){
    return 60 * num
  }
  // console.log(convert(6) )
  // console.log(convert(4) )
  // console.log(convert(3) )
  // console.log(convert('3') )