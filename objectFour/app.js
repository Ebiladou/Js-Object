  function Animal (name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function () {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    };
  }

  const cat2 = new Animal ("Peaches", "Nkita", "black");
  cat2.greeting();