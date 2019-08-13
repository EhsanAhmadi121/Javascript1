//1
console.log("Salam Donya!");//Persian
console.log("Hello World!");

//2
console.log('I \'m awesome');

//3
let x;
console.log("the value of my variable x will be: 7");
console.log(x);
x = 7;
console.log("the value of my variable x will be: aftersix");
console.log(x);

//4
let y = "Ehsan"; 
console.log("the value of my variable y will be: myFirstName"); 
console.log(y);
y = "Ahmadi Khanehsaz";
console.log("the value of my variable y will be: myLastName");
console.log(y);

//5
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
console.log(Math.max(a,z));

//6
let fishArr = [];
console.log("the value of my array fish will be: myFavFishBreed");
console.log(fishArr);
fishArr = ["Calico Goldfish","Red Mosaic Guppy","Angelfish"];
console.log(fishArr);
fishArr.push("baby pig");
console.log(fishArr);

//7
let myString = "this is a test";
console.log(myString);
myString = myString.length;
console.log(myString);

//8
var myNumber = 2; 
var newString = "this is a test"; 
var noValue = null;
var nameFieldChecked = true;
console.log(myNumber);
console.log(newString);
console.log(noValue);
console.log(nameFieldChecked);

console.log("the type of my variable myNumber will be: number");
console.log("the type of my variable newString will be: string");
console.log("the type of my variable noValue will be: object")
console.log("the type of my variable nameFieldChecked will be: boolean")

typeof myNumber; //number
typeof newString;//string
typeof noValue;//object
typeof nameFieldChecked;//boolean

console.log(myNumber === newString);//false
console.log(noValue === nameFieldChecked); //false
console.log(myNumber == newString); //false
console.log(noValue == nameFieldChecked);//false

//9
let x=7;
console.log(7 % 3); // answer is 1

console.log( 9 % 2); // output is 1
console.log (10 % 2); //output is 0
console.log( 2 % 2); //output is 0

//10
let multiArr = ["fish", 2, "soda", "cars", 5];
console.log(multiArr[3]); // cars

if(6 / 0 === 10 / 0) {
    console.log("Let\'s call it Infinity");
} else { console.log("Try again");}