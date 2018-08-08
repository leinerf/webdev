function Person(name){
    this.name = name;
    this.sayHi = function(){
        return "Hi " + this.name;
    }
}

elie = new Person("Elie");
elie.sayHi();//Hi elie

//every time we make an object using the keyword new we have to 
//redefine the sayHi function!

//better version
function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi();//Hi elie

