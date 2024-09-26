const max = Math.max(12, 34, 45, 54, 66, 77);
const numbers = [12, 43, 43, 56, 78, 87, 67, 89, 98]
// console.log(numbers)
console.log(...numbers)
// const arrayMax = Math.max(numbers)
const arrayMax = Math.max(...numbers)
console.log(arrayMax)
console.log("-----------------------------------------------")

// to use spread oparator to copy
const nums = [56, 45, 56, 67, 76];
// console.log(nums);
const nums2 = nums;
// nums2.push(34);
const numb3 = [...nums]; //copy spread
console.log(numb3);
nums.push(20);
console.log(numb3)
console.log(nums)

// advance 

const sonkha = [...nums, 999]// add extra element while copy
console.log(sonkha)