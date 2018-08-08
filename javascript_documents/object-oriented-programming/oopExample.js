function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathroom = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = House(2,2,1000);//does this work?
firstHouse // undefined;
//function returns undefined
//were not binding this to anything so it is global
//better way 

var firstHouse = new House(2,2,1000);
firstHouse.bedrooms; //2
firstHouse.bathrooms;// 2
firstHouse.numSqft;// 1000


/*
What does new do?
it creates an empty object
sets this to the empty object
adds return this to end of function
adds "__proto__" to the constructor function of the 
empty object 
*/

//Create a dog constructor function

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){console.log(this.name + " just bark");}
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark();//Rust just barked;
fido.bark();//Fido just barked;
