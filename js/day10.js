//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.

// function acceptIntoMovie(age ){

//     return (age,isSupervised) => age >= 15 || isSupervised
// }

const  acceptIntoMovie = (age,isSupervised) => age >= 15 || isSupervised;

// console.log(acceptIntoMovie(14, true))
// console.log(acceptIntoMovie(14, false))
// console.log(acceptIntoMovie(16, false))


//     Create a function that evaluates an equation.

const eq= (str) => eval(str);

// console.log(eq("1+2"))
// console.log(eq("6/(9-7)"))
// console.log(eq("3+2-4"))


// Concatenate First and Last Name into One String
//     Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName,lastName){
    // return firstName + ' '+lastName
     return  ` ${lastName} , ${firstName}`
}

// console.log(concatName("First", "Last"))
// console.log(concatName("John", "Doe"))
// console.log(concatName("Mary", "Jane"))

// Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
//  posCom(1) ➞ 2
//  posCom(3) ➞ 8
//  posCom(10) ➞ 1024


function posCom(on ){
    // retur/n 2**on;
    return Math.pow(2,on)
}

// console.log(posCom(1));
// console.log(posCom(3));
// console.log(posCom(10));

// Triangle and Parallelogram Area Finder
//     Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

// function areaShape(base,height,shape){
//     if(shape === "triangle"){
//         return 0.5 *base *height;
//     } else if(shape === "parallelogram"){
//         return base * height
//     } else {
//         return "invalid shape"
//     }
// }    
function areaShape(base,height , shape){
    return (shape == "triangle" ? (0.5 * base * height) : (base * height) )                                                                    
}
// console.log(areaShape(2, 3, "triangle"))
// console.log(areaShape(8, 6, "parallelogram"))
// console.log(areaShape(2.9, 1.3, "parallelogram"))
