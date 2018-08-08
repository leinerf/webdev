var colt = {
    firstName: "Colt"
}
var elie = {
    firstName: "Elie"
}

sayHi.call(colt);
sayHi.call(elie);
sayHi.apply(colt);
sayHi.apply(elie);


function addNumbers(a, b, c, d){
    return this.firstName + " just calculated "  + (a + b + c + d);

}

var colt = {
    firstName: "Colt"
}
var elie = {
    firstName: "Elie"
}

addNumbers.call(elie, 1, 2, 3, 4);//Elie just calculated 10
addNumbers.apply(elie,[1,2,3,4]);//Elie just calculated 10

/*
When to use apply
When a function does not accept an array, apply
will spread out values in an array for us!
*/

//example
var nums = [5,7,1,4,2];
Math.max(nums);//Nan not a number
Math.max.apply(this, nums);//spreads out the numbers

function sumValues(a,b,c){
    return a + b + c;
}

var values = [4,1,2];
sumValues(values);//"4,1,2undefinedundefined"

sumValues.apply(this,values);// 7
