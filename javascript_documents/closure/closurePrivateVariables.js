function counter(){
    var count = 0;
    return function(){
        count++;
        return count;
    }
}

var counter1 = counter();
console.log(counter1());//1
console.log(counter2());//2

var counter2 = counter();
counter2(); //1
counter2(); //2

counter1(); //3 

/*
gives reference error because you cannot 
access count directly
*/
count;


//More Privacy
function classRoom(){
    var instructors = ["Elie", "Colt"];
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructors: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

var first = clasRoom();
first.addInstructors("Louis");
//still can modify instructors 
first.getInstructors().pop();

//beter implementation
function classRoom(){
    var instructors = ["Elie", "Colt"];
    return {
        getInstructors: function(){
            return instructors.slice()//returns a copy;
        },
        addInstructors: function(instructor){
            instructors.push(instructor);
            return instructors.slice()//returns a copy;
        }
    }
}

//slice cannot deep copy list of objects
a = [{1:"hello"}];
b = a;
console.log(a);
console.log(b);
b.push({2:"world"});
console.log(a);
console.log(b);
c = a.slice();
console.log(a);
console.log(b);
console.log(c);
c.push({3:'javascript'});
console.log(a);
console.log(b);
console.log(c);
c[0]["idk"] = 3;
console.log(a);
console.log(b);
console.log(c);