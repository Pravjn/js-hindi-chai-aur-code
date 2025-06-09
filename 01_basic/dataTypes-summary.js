// # Primitive

// 7 Types : string, Number, Boolean, null, undefined, Symbol(unique), BigInt   => call by value

const score = 100
const scoreValue = 100.34

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

//const bigNumber = 3456789n

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ("shaktiman", "Hanuman", "batman");
let myObj = {
    name : "Praveen",
    age: 18,
}

const myFunction = function(){
    console.log("HELLO WORLD");
    
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3