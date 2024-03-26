// Working with the objects
// 1. Creating a new object
// Using Object initializer
const report={
    name:"Field Report",
    members:"78",
    time:"4hrs"
}
console.log(report);

let a; // checks the condition and then only creates the object.
if(true){
    a={
        greeting:"Hi there"
    }

}
console.log(a);

const car={
    name:{
       1: "Mercedes",
       2:"Ferrari",
       3:"RedBull"
    },
    speed:"400kmph",
    weight:"~kg"
}
console.log(car)

function color(color1,color2,color3) {
    this.color1="white";
    this.color2="blue";
    this.color3="black"
    console.log(color);
}

color();

function car00(make, model, year,owner,color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.color= color;
  }
  
//   const car0 = new car00('Eagle', 'Talon TSi', 1993);
  const car2 = new car00("Nissan", "300ZX", 1992,"Ken");
  const car3= new car00("Mercedes","benz","2022","willie","black")
//   console.log(car0.make);
  console.log(car2.owner);
console.log(car3.color)

//2.Using the Object.create() method

// Animal properties and method encapsulation
const Animal = {
    type: "Invertebrates", 
    displayType() {
     
      console.log(this.type);
    },
  };
  

  const animal1 = Object.create(Animal);
  animal1.displayType(); 
  
 
  const fish = Object.create(Animal);
  fish.type = "Fishes";
  fish.displayType(); 

  let person={
    city:"Rome",
    calculateAge: function(){
        let currentyear= new Date().getFullYear();
        let age= currentyear - this.yearOfBirth;
        console.log(age);
    }
  }
let john= Object.create(person);
john.name="John";
john.yearOfBirth= 1990;
john.occupation="Tennis_player";
console.log(john);
john.calculateAge();

let mass= Object.create(person,{
    name:{value:"Sore"},
    yearOfBirth:{value:2003}
});

console.log(mass);
mass.calculateAge();
console.log(mass.city);