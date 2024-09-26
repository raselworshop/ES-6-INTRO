/**
 * var : No reason to use var ( exception is common);
 * let : it allow to reassign 
 * const : Don't allow to reassign
 */

const money = 50;
// money = 100; it gives error but if do this
const rich = money + 50;//it will work and noerror made; another way is let

// let count = 10;
// count = count + 10;
// we can do 
const numbers = [12, 34, 34, 7, 876, 32, 67];
numbers[2] = 44;//can change array value
numbers.push(43, 45, 65,74);//can add element by push method
console.log(numbers)
// console.log(count)
console.log(rich);

// Object 
// const instead, and if we want to change property value from const then possible
// let
const student = {
    name:'rasel',
    class: 12,
}
student.name = 'shahid'
// we want to change element from object with const it gives error
// student = {name:'shahid', class: 12,}//it gives error but if we use let instead const then it will work
console.log(student)