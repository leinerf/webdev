function Person(name){
    this.name = name;
}

var elie = new Person("Elie");
var colt = new Person("Colt");

console.log(elie.__prototype__ === Person.prototype);
console.log(Person.prototype.constructor === person);

Person.prototype.isIntructor = true;
console.log(elie.isIntructor);
console.log(colt.isIntructor);

//kinda like class variables
var arr = [];//same thing
var arr = new Array;//same thing
arr.push

arr.__prototype__ === Array.prototype
arr.hasOwnProperty("length");
