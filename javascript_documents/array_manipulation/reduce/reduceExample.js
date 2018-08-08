//[1,2,3].reduce(function(accumulator, nextVaule, index, array){});
var arr = [1,2,3,4,5];

arr.reduce(function(accumulator, nexvalue){
    return accumulator + nextValue;
})

arr.reduce(function(accumulator, nextvalue){
    return accumulator + nextvalue;
},10);

var names = ["Tim", "Matt", "Colt", "Elie"];

console.log(names.reduce(function(accumulator, nextValue){
    return accumulator += " " + nextValue;

}, "THe Instructors are"));

var arr = [5,4,1,4,5];
arr.reduce(function(accumulator, nextValue){
    if(nextValue in accumulator){
        accumulator[nextValue]++;
    }
    else {
        acculumulator[nextValue] = 1;
    }
    return accumulator;
},{});

function sumOddNumbers(arr){
    return arr.reduce(function(accumulator, nextValue){
        if(nextValue % 2 !== 0){
            accumulator += nextValue;
        }
        return accumulator;
    }, 0);
}

console.log(sumOddNumbers([1,2,3,4,5]));// 9

function createFullName(arr){
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextvalue.first + " " + nextValue.last);
        return accumulator;
    }, []);
}

console.log(createFullName([{first: "Colt", last: "Steele"},{first: "Matt", last:"Lane"}]));


