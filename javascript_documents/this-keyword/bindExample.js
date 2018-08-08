function addNumbers(a,b,c,d){
    return this.firstName + " just calculated " + (a + b + c + d);
}

var elie = {
    firstName: "Elie"
}

var elieCalc = addNumbers.bind(elie,1,2,3,4);//function(){}
elieCalc();

var elieCalc = addNumbers.bind(elie,1,2);
elieCalc(3,4);//Elie just calculated 10



//BInd in the wild
var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        },1000);
    }
}
//firstName is undefined because this refers to window
//setTimeout is called on a later point in time
//cant use apply or call because it will call the function right away

var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("HI " + this.firstName);
        }.bind(this), 1000);
    }
}

colt.sayHi();
