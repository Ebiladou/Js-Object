function Car() {
  this.driving = false;

  this.start = function () {
    let status = this.driving;
    if (status === false) {
      this.driving = true;
    }
    return this.driving;
  };

  this.break = function () {
    let status = this.driving;
    if (status === true) {
      this.driving = false;
    }
    return this.driving;
  };
}

const corolla = new Car();
console.log(corolla.start());