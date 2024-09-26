// default ---> if value isn't provided take this as default value. to set it num2=0

function add(num1=0, num2=0){
    const result = num1 + num2;
    console.log(num1, num2, result)
    return result;
}
const sum = add(5, 7);
// const sum = add(5);
// const sum = add();

// another example to string 
function fullName(firstN, lastN=''){// we can keep here empty if value is not assign
    const fullNam = firstN + ' ' +lastN;
    console.log(firstN, lastN, fullNam)
    return fullNam;
}
const name = fullName('Rasel')

// if we want array but not assign what can be done, default from array 
function friends(nums=[]){

}
// to get defaul value from Object, this function system is ok 
function person(human={}){
    
}