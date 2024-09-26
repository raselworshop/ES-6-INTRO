const difference = (x, y) => x -y;
const math =  difference(12, 7)
console.log(math);

const multiply = (first, second, third, fourth) => first * second * third * fourth;
const math2= multiply(2, 3, 5, 6)
console.log(math2)

// get a property from array 
const getAge = (person) => person.age;

const student = {name: 'Rasel', age:24};

const age = getAge(student);
console.log(age)
console.log('-----------------------------------')

// another example 
const getThird = numbers => numbers[2]; //it's work as array and we'll get index 3, for this it means single perameter can be use without perameter
const third = getThird([12, 23, 24, 55, 66, 88]);
console.log(third);

// withOut perameter function 
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function 
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
}
const mathe = doMath(1, 3, 5);
console.log(mathe)