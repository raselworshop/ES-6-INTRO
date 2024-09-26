// function add(a, b){
//     const result= a + b;
//     return result;
// }

// these functions are called funtion declaration
function add(a, b){
    // const result= a + b;
    return a + b;
}
const numb = add(5, 7);
console.log(numb)

//funtion expression
const add2 = function(a, b){
    return a + b;
}
const numb2 = add2(5, 7);
console.log(numb2)

// arrow function 
const add3 = (a, b) => a + b;
const numb3 = add3(8, 7)
console.log(numb3)