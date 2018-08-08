"use strict"// makes global 'this' undefined

//global
console.log(this);//window
function whatIsThis(){
    return this;
}
whatIsThis();

function variablesInThis(){
    this.person = "Ellie";
}
variablesInThis();
//global variable because this refer to 
//the global object
console.log(person);

//example of bad declaration of global variables
function mistake(){
    this.badIdea = "oops!";
}
mistake();
console.log(badIdea);

var person = {
    firstName: "Elie",
    sayHi: function(){
        return "HI " + this.firstName

    },
    determineContext: function(){
        return this === person;
    }
}
person.sayHi();
person.determineCOntext();//is true 

var person = {
    firstName: "Elie",
    determineContext: this
}//what is this in this context?
//It is the window 
//This is always the closes parent object

var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;//false
        }
    }
}
//implicit binding
//always the closes binding
person.sayHi(); // "Hi Colt"
person.determineContext()// true
person.dog.sayHi(); // "Hi undefined"
person.dog.determineContext();//false

//call apply and bind will solve this problem
//Explicit binding set the context of 'this' to be 
// using call, apply, or bind
//only used on functions

/*
Explicit Binding

method name     parameters           invoked immediately?
call            thisArg, a,b,c,...      yes
apply           thisArg, [a,b,c,..]     yes
bind            thisArg, a,b,c,...      no
*/

function firstFunction(){
    return "Hello";
}
console.log(firstFunction)
