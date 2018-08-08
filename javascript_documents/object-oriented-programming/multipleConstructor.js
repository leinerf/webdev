function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    //we can also set properties on the keyword this
    //that are present values
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

//change it so that we can combine the 
//two or Motorcycle inherits from car

function Motorcycle(make, model, year){
    //using call
    Car.call(this, make, model, year);
    this.numWheels = 2;

}


//creates an empty object
//sets this to that empty object
//sends the empty object to car
//now this has the same things as car for certain stuff
//arguments are the list of arguments passed into the function

function Motorcycle(make, model, year){
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}