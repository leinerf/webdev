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

person.dog.sayHello.call(person);// "Hello Colt"
person.dog.determineContext.call(person);// true

var colt = {
    firstName: "COlt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }

}

var elie = {
    firstName: "Elie"
}

colt.sayHi.call(elie);
//modularizing
function sayHi(){
    return "Hi " + this.firstName;
}

var colt = {
    firstName: "Colt"
}
var elie = {
    firstName: "Elie"
}

sayHi.call(colt);
sayHi.call(elie);

var divsArray = [].slice.call(divs);
// you might also see this as Array.prototype.slice.call(divs)
// they do the samething

divsArray.filter(function(val){
    return val.innerText === "Hello";
})