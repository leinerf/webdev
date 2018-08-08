/*
You can think of a Promise as a 1 time guarantee of 
future value. You don't know when you're going to get 
that "future value" or what it is. 
Once we get back that "future value" - it is either 
what we expect (we call this resolved) or something has 
gone wrong (we call that rejected). To handle the result 
of a resolved promise, we use the .then method, to handle 
the result of a rejected promise, we use .catch.

We use the keyword new for Promise since that is how we 
can create a Promise, we can't just invoke the Promise 
function (you will see later on a lot more detail as to 
what the new keyword does). 

The difference between setTimeout and a Promise is that 
setTimeout as an asynchronous function that runs a callback 
function after a specified amount of time. Promises are a 
tool to manage asynchronous code (as opposed to callbacks). 
So to manage one or many asynchronous functions (like 
    setTimeout or AJAX calls), we can use promises. 
*/
var p1 = new Promise(function(resolve,reject){
    resolve([1,2,3,4]);
});

p1.then(function(arr){
    console.log("Promise p1 resolved withd data:", arr);

});

var p2 = new Promise(function(resolve,reject){
    reject("Error1");
});

p2
    .then(function(arr){
        console.log("Promise p1 resolved withd data:", arr);
    })
    .catch(function(data){
        console.log(data)
    })


var p3 = new Promise(function(resolve,reject){
    var num =  Math.random();
    if(num < 0.5) {
        resolve(num);
    } else {
        reject(num);
    }
});

p3.then(function(result){
    console.log("Success:", result);
}).catch(function(error){
    console.log("Error2:", error);
})


var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        var randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});

promise.then(function(data){
    console.log("Random int passed to resolve:", data);
});