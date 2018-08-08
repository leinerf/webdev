var arr = [1,2,3];
arr.filter(function(value, index, array){
    return value > 2;
});


var instructors = [
    {name: "Elie"},
    {name: "Tim"},
    {name: "Matt"},
    {name: "Colt"}
];

instructors.filter(function(value, index, array){
    return value.name.length > 3;
});

function myFilter(array,callback){
    var newArr = [];
    for(var i = 0; i < array.length; ++i){
        if(callback(array[i], i, array)){
            newArr.push(array[i]);
        }
    }
    return newArr;
}


function onlyFourLetterNames(arr){
    return arr.filter(function(value){
            return value.length === 4;
    });
}

console.log(onlyFourLetterNames(["Rusty", "Matt", "Moxie", "Colt"]));

function divisibleByThree(arr){
    return arr.filter(function(value){
        return value % 3 === 0;
    });
}

console.log(divisibleByThree([1,2,3,4,5,6,7,8,9]));
