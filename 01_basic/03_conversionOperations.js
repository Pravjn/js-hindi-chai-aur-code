let score = 33

console.log(typeof score) ;
console.log(typeof (score)) ;

let valueInNumber = Number(score)
console.log( typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
//"33abc" => NaN
// True => 1; False => 0;

let isLoggedIn = "Null"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => False
//"praveen" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ******************************  Operations       *************************************************     
let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let str1 = "hello "
let str2 = "Praveen "
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1"  + 2 + 2);
console.log(2 + 2 + "1");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

/* let x = 3;                   
const y = x++;          => postfix increment operator x++

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;             => Prefix Increment operator ++x

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4" */


