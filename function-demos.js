// function square(number){
//     return number * number;
// }

// const square2 = function(number){
//     return number * number;
// }
// console.log(typeof square, typeof square2);
// console.log(square2(6));

// const square3 = number => number * number;
// console.log('square3 :', square3(2));

// const fruit = [];
// fruit [0]= 'Banana';
// fruit [1] = 'Orange';
// fruit [2] = 'Apple';
// fruit [9] = 'Strawbeery';
// fruit.unshift('Pear');
// console.log(fruit);

const elements = [
    'Hydrogen', 'Helium', 'Oxygen', 'Lithium', 'Beryllium'
];
const result = elements.filter((item, index, Array) => {
    console.log(item, index, Array)
});
console.log(result); 
