function outer(){
    var start = "Closures are";
    return function inner(){
        return start + " " + "awesome";
    }
}

console.log(outer());
console.log(outer()());


function outer(a){
    return function inner(b){
        return a + b;
    }
}

outer(5)(5);
var storeOuter = outer(5);
console.log(storeOuter(10));


//is this a closure?
function outerFn(){
    var data = "something from outer";
    return function innerFn(){
        return "Just returned from the inner function";
    }
}
//no, because it doesn't use variables from outer function

//is this a closure?
function outerFn(){
    var data = "something from outer";
    return function innerFn(){
        var innerData = "Something from inner";
        return data + " " + innerData;
    }
}
//yes