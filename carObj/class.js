class Car {
  constructor() {
    this.driving = false;
  }

  start() {
    let status = this.driving;
    if (status === false) {
      this.driving = true;
    }
    return this.driving;
  }

  break() {
    let status = this.driving;
    if (status === true) {
      this.driving = false;
    }
    return this.driving;
  }
}

const camry = new Car();

console.log(camry.start());
