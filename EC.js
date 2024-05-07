const x = 10;
console.log(x);
let y = 20;
console.log(y);

var x = 10;
let y = 20;
function foo(a,b) {
    let  z = 30;
    var x = 40;
    console.log(a,b);
    y = a + z + x;
}
foo(x);
console.log();


// --------
// let x = 10;

// function foo(){
//     let x = 20;
//     BarProp(;)
// }

// function bar(){
//     console.log(x);
// }

// foo();

let a = 1;
let b = 2;
function foo() {
let a = 3;
let b = 4;
bar(a);
console.log(a, b);

function baz(arg1, arg2, arg3) {
console.log(arg1, arg2, arg3);
b = arg1 + arg2;
a = arg1 + arg2;
}
const f = () => {console.log(a, b)};
baz(5, 10, f, 40, 50);
console.log(a, b);
}
function bar(arg1, arg2) {
console.log(arg1, arg2);
a = arg1 + 40;
}
foo();
console.log(a, b);


