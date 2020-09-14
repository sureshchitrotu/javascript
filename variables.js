//* if any varib/any fuction is accessed without declaration even assigns a value afterwards,  it will throw an error: not defined 
//* in other words, accessing any variable/func without declaring or assinging any value throws an error.

//console.log('a = ' + a); // Uncaught ReferenceError: a not defined
//console.log('foo = ' + foo()); // Uncaught ReferenceError: aFunc not defined

//console.log('m = ' + m);  //Uncaught ReferenceError: m is not defined
//m= 10;

//* hoisting - var/function  declarations are  processed before any code execution.
console.log('x = ' + x); // undefined
var x; 

console.log('y = ' + y); // undefined
var y=1; 

console.log('bar = ' +bar()); bar = bar
function bar(){
    return "bar"; 
}
//* assigning a value to a variable without declaration anywhere, JS runtime will a  global variable with that name in execution
(function(){
    g=10;
})();
console.log('g = ' + g);

gFunc();
function gFunc(){
    gg = 30;
}
console.log('gg = ' + gg);

//* hoisting - not applicable for let/const variables  throws an error  
//console.log('z = ' + z); // Uncaught ReferenceError
//let z=1;

//console.log('w = ' + w); // Uncaught ReferenceError
//const w=1;

//* Redeclaration possible for var declarations  even in strict mode
var a = 1;
var a = 4;
console.log( 'a = '+ a); // a= 4

//*** Variable redeclaration not possible for let and const even with var / function name throws syntax error , stops  the page to start execute)
//let b = 1;
//let b = 4;
//console.log( 'b = '+ b); // Uncaught SyntaxError

//let u = 1;
//var u= 4;
//console.log( 'u = '+ u); // Uncaught SyntaxError

//function u(){}

//* Default values of var,let - undefined
var e;
let f;
console.log( 'e = '+ e); 
console.log( 'f = '+ f);

//*** Constant variable declaration without initialization throws an Syntax error and stops the page to start execution itself
//const g;  // Uncaught SyntaxError

//* constant variables can't be changed once initialized,
//* re-assigning new value to constant variable throws an error
//const p = 12;
//p = 24;       // Uncaught TypeError
//console.log( 'p = '+ p); 



//* constant array/obj can be created and can be changed inside values but not const variable( throws an error)
const arr = [1,2,3,4,5];
console.log('arr = '+ arr);
arr[0] = 100;
console.log('arr = '+ arr);

const obj = {
    name : 'suresh'
}
obj.name = 'ganesh';
console.log('obj = '+ obj.name); // obj = ganesh

//arr = [23];     // Uncaught TypeError
//console.log('arr = '+ arr); 

//* constant function can be created 
const  pFunc = function(xx,yy){
    return xx+yy;
}
console.log(pFunc(1,2));
console.log(pFunc(5,4));

//* var variables have function scope , let variable have block scope

//Ex1
function f1(){
    var v1 = 10;
}
f1();
//console.log('v1 = ' + v1); // Uncaught ReferenceError v1 not defined

//Ex2
var v2 = 10
function f2(){
    var v2 = 20;
    console.log('v2 = '+ v2);  //v2 = 20
}
f2();
console.log('v2 = '+ v2);  //v2 = 10

//Ex3 for let variable
function f3(){
    if(true){
        let v3 = 20;
    }
  
    //console.log('v3 = ' + v3); // Uncaught ReferenceError: v3 is not defined

}
f3();
