const actor = {
    name: 'Ananta',
    age : 30,
    phone: '01796403364',
    money:23228378,
}
console.log(actor.phone)
console.log(actor.phone)
console.log(actor.phone)
console.log("----------------------------------")

// we can get a properity values in simple way 
// const phone = actor.phone;
// const age = actor.age;
// const name = actor.name;

// we can do it by distructuring, if right side is an object, left side of distructuring will be object as well.
// using properity as a variable that contains value

// const {phone, name, age}= actor;

// we can chage propeity name was declared 
const {phone, name, age: boyos}= actor; //we change variable age to boyos which called ellius banglay bola hy orofe jmn ali orofe akbar

console.log(name);
console.log(name);
// console.log(age);
// console.log(age);
console.log(boyos);
console.log(phone)
console.log(phone)

// array distructing
const numbers = [12, 34, 43];
const [a, b, c] = numbers;

// distructuer with function
function doubleThem(a, b){
    return [a*2, b*2]
}
const [fast, second] = doubleThem(3, 6);
console.log(fast, second)