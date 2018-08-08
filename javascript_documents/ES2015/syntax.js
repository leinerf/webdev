//const
const a = 10;
a = 11;//can't reasign const
//can change mutuable objects 
//but not immutable objects

//block scope
let c = 3;//new var can't reference before creating variables

let instructor = "a";
function hello(instructor){
    let b = instructor 
}

hello(instructor);
console.log(b);//undefined
//let is within the scope
for(let i = 0; i< 10; ++i){
    setTimeout(function(){
        console.log(i);
    },1000);
}
//produce properly other 
//than printing 10 each time

//template strings
let something = `${helloWorld}`;
//`${hellow}` use this

//arrow functions
var add = function(a,b){
    return a + b;
}

var add = (a,b) => a + b;
//do not return keyword and curly braces


//same result
[1,2,3].map(function(value){
    return value * 2;
});

[1,2,3].map(value => value * 2);

//what catch
//arrow functions do not have this
//arrow does not have their own this keyword

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hello " + this.firstName);
        }.bind(this), 1000);
    }
}

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(() =>{
            console.log("Hello" + this.firstName);
        },1000);
    }
}
//it inherits the this keyword from instructor object
//if we turn sayHi to arrow function itll inherit the this of the outer scope
//never use arrow functions for objects
// ES5
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      setTimeout(() =>{
        console.log('Hello ' + this.firstName)
      }, 1000)
    }
  }
  
  //no default parameters
  function add(a, b){
      return a + b;
  }
  //default parameters
  function add(a = 3, b = 4){
      return a + b;
  }
  
  //For ... of syntax
  var arr= [1,2,3,4];
  //we cannot iter through objects but we can do it in arrays
  for(val of arr){
      console.log(arr);
  }
  
  //Rest operators
  //..variable takes the rest of the arguments
  function printRest(a,b, ...c){
      console.log(a);
      console.log(b);
      console.log(c);
  }
  console.log(printRest(1,2,3,4,5));
  
  //ES5 without REST and Arrow
  function sumArguments(){
      var total = 0;
      for(var i = 0; i < arguments.length; i++){
          total += arguments[i];
      }
      return total;
  }
  
  //ES2015 with REST and Arrow
  const sumArguments = (...args) => args.reduce((acc,next) => acc + next,0);
  
  //spreads
  var arr = [3,2,4,1,5];
  Math.max.apply(this, arr);
  Math.max(...arr);
  
  function sumvalues(a,b,c){
      return a + b + c;
  }
  var nums = [12,15,20];
  //ES5
  sumValues.apply(this, nums);
  //ES2015
  sumValues(...nums); //47
  
  
  //Spread
  //ES5
  var arr1 = [1,2,3];
  var arr2 = [4,5,6];
  var arr3 = [7,8,9];
  var combined = arr1.concat(arr2).concat(arr3);
  
  //ES2015
  var combined = [...arr1, ...arr2, ...arr3];
  
  //function(..args) makes the arguments into an array
  
  
  //object enhancements
  //ES5
  var firstName = "Elie";
  var lastName = "Schoppik";

  var instructor = {
      firstName: firstName,
      lastName: lastName
    }
  //ES2015


  var firstName = "Elie";
  var lastName = "Schoppik";

  var instructor = {
    firstName,
    lastName
}

//ES5
var instructor = {
    sayHello: function(){
        return "Hello!";
    }
}

//ES2015
var instructor = {
    sayHello(){
        return "Hello!";
    }
}

//computed Property
//ES5
var firstName = "ELIE";
var instructor  = {};
instructor[firstName] = "Thats me";
instructor.Elie;

//ES2015
var firstName = "ELIE";
var instructor  = {
    [firstName]:"Thats me"
};

instructor.Elie;

//object destructuring
var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
}
//same as the keys
var {firstName, lastName} = instructor;
firstName;//"Elie"
lastName;//"Schoppik"


//not same as the keys
var {firstName: first, lastName:last} = instructor;
first;
last;

//default values
function createInstructor(options){
    var options = options || {};
    var name = options.name || {first:"MATH", last:"Lane"};
    var isHilarious = options.isHilarious || false;
    return [name.first, name.last, isHilarious];
}

createInstructor();//["Matt", "Lane", false]

//object fields as parameters
var instructor = {
    name: "Elie",
    favColor: "Schoppik"
}

function displayInfo({name, favColor}){
    return [name, favColor];
}
displayInfo(instructor);


//array destructuring
var arr = [1,2,3];
var [a,b,c] = arr;
a;
b;
c;

//ES5
function swap(a, b){
    var temp = a;
    a = b;
    b = temp;
    return [a,b];
}

//ES2015
function swap(a,b){
    return [a,b] = [b,c];
}

//class
//class keyword creates a constant cannot be redeclared
//class keyword is ano abstraction of constructor functions
//and prototypes
//The class keyword is no hoist

//ES5
function createStudent(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//object methods
Student.prototype.sayHello = function(){
    return "Hello "   + this.firstName + " " + this.lastName;
}

//class methods
Student.isStudent = function(obj){
    return obj.constructor === Student;
}

var elie = new createStudent('Elie', 'Schoppik');
//ES2015
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    static isStudent(obj){
        return obj.constructor === Student;
    }
}

var elie = new Student("ELIE", "SCHOPPIK");


//ES5 inheritance
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//ES5
function createStudent(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//object methods
Student.prototype.sayHello = function(){
    return "Hello "   + this.firstName + " " + this.lastName;
}

//class methods
Student.isStudent = function(obj){
    return obj.constructor === Student;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var elie = new createStudent('Elie', 'Schoppik');

//ES2016
class Student extends Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    static isStudent(obj){
        return obj.constructor === Student;
    }
}

var elie = new Student("ELIE", "SCHOPPIK");

//super keyword