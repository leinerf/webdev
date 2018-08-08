//passing one class to another
//Javascript can mimic classes

//why?
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}
Student.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype.status = function(){
    return "I am currntly a student;";
}

Student.prototype = Object.create(Person.prototype);
var elie = new Person('Elie', 'Schoppik');
elie.status

//use Object.create(obj.prototype);
Student.prototype.constructor = Student;