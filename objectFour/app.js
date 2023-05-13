function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
}

const cat1 = new Cat("Peaches", "Nkita", "black");
cat1.greeting();

const cat2 = new Cat("Spin", "German Shephard", "Grey");
cat2.greeting();


