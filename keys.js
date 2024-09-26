const glass = {
    name:'Glass',
    color:'Golden',
    price: 24,
    isClean: true,
}
console.log(glass);
const keys = Object.keys(glass)
// here it will return object propertie keys name 
// [ 'name', 'color', 'price', 'isClean' ]
// console.log(keys)

const values = Object.values(glass);
// it will return Object propertie values 
// [ 'Glass', 'Golden', 24, true ]
// console.log(values)

const pair = Object.entries(glass);
// it will return object, it's called as array of arry or two dimentional array
/*
    [
    [ 'name', 'Glass' ],
    [ 'color', 'Golden' ],
    [ 'price', 24 ],
    [ 'isClean', true ]
    ]
 */
// console.log(pair)

// delete constructor simple and complex way
// delete glass.isClean;
// console.log(glass)

const {isClean, ...shortGlass} = glass;
// console.log(shortGlass)

// freeze method/constructor, if anything includes in freeze section it will not change
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 500;
// delete glass.name;
// console.log(glass)

// seal 
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 500;
delete glass.name;
console.log(glass)
