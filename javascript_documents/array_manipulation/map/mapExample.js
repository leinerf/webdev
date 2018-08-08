/* 
Creates a new array
Iterates through an array
Runs a callback function for each value in the array
Pushes result of the callback function to the new array
Returns the new array
*/

var arr = [1,2,3];
arr.map(function(value, index, array){
    return value * 2;
})


function myMap(arr,callback){
    var newArr = []
    for(var i = 0; i < arr.length; ++i){
            newArr.push(callback(arr[i],i,arr));
    }
    return newArr;
}



function tripleValue(arr){
    return arr.map(function(value){
        return value * 3;
    });
}
console.log(tripleValues([1,2,3]));

function onlyFirstName(arr){
    return arr.map(function(val){
        return val.first;
    });
}

onlyFirstName([
    {
        first: "Tim",
        last:"Garcia"
    },
    {
        first: "Matt",
        last:"Lane"
    }
]);
