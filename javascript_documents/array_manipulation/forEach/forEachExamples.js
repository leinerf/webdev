console.log("builtin forEach");
[1,2,3].forEach(function(value,index,array){
    console.log(value, index, array);
});

var myForEach = function(arr,callback){
    console.log("my forEach")
    for(let i = 0; i < arr.length; ++i){
        callback(arr[i],i, arr);
    }
}
myForEach([1,2,3],function(value,index,array){
    console.log(value, index, array);
});

function halfValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val/2);
    });
    return newArr;
}
console.log(halfValues([2,4,6]));